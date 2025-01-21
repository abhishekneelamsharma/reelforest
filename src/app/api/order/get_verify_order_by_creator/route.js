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
                    isVerified: 1
                }
            }
        }).lean();

        if (!data) {
            return NextResponse.json({ message: "Unable to get order data", status: 0 });
        }

    
        return NextResponse.json({ message: "Get order data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}