import orderModel from "@/_model/OrderModel";
import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    connectDB();
    try {
        let data = await orderModel.find({}).lean();
        if (!data) {
            return NextResponse.json({ message: "Unable to get order data", status: 0 });
        }
        const user = await userModel.find({});

        data = data.map((element) => {
            const findUser = user.find((ele) => ele._id == element.user_id)
            const completed = element?.assigned_creator?.filter((ele) => ele.isCompleted == 1).length;
            element.completedOrder = completed;
            element.username = findUser.name
            return element;
        })

        return NextResponse.json({ message: "Get order data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}