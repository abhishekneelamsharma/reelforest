import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { user_id } = await request.json();
        let data = await orderModel.find({ user_id: user_id }).lean();
        if (!data) {
            return NextResponse.json({ message: "Unable to get order data", status: 0 });
        }

        data = data.map((element) => {
            const completed = element?.assigned_creator?.filter((ele) => ele.isVerified == 1).length;
            element.completedOrder = completed;
            return element;
        })

        return NextResponse.json({ message: "Get order data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}