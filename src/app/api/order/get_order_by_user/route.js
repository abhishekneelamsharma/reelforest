import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { user_id } = await request.json();
        let completedOrder = await orderModel.find({ user_id: user_id, order_status: 1 }).lean();
        let pendingOrder = await orderModel.find({ user_id: user_id, order_status: 0 }).lean();
        if (!completedOrder || !pendingOrder ) {
            return NextResponse.json({ message: "Unable to get order data", status: 0 });
        }

        completedOrder = completedOrder.map((element) => {
            const completed = element?.assigned_creator?.filter((ele) => ele.isVerified == 1).length;
            element.completedOrder = completed;
            return element;
        })

        pendingOrder = pendingOrder.map((element) => {
            const completed = element?.assigned_creator?.filter((ele) => ele.isVerified == 1).length;
            element.completedOrder = completed;
            return element;
        })

        return NextResponse.json({
            message: "Get order data successfully...", status: 1, data: {
                completedOrder: completedOrder,
                pendingOrder: pendingOrder
            }
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}