import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { creator_id } = await request.json();

        let data = await orderModel.find({
            assigned_creator: {
                $elemMatch: {
                    creator_id: creator_id,
                    isCompleted: 0
                }
            }
        }).lean();

        if (!data) {
            return NextResponse.json({ message: "Unable to get order data", status: 0 });
        }

        data = data.map((element) => {
            const completedOrder = element.assigned_creator.filter((ele) => ele.isVerified == 1).length;
            element.completedOrder = completedOrder
            return element;
        })



        return NextResponse.json({ message: "Get order data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}