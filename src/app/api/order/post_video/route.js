import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB()
    try {
        const { order_id, creator_id, video_link } = await request.json();
        const data = await orderModel.updateOne(
            { _id: order_id },
            {
                $set: {
                    "assigned_creator.$[elem].isCompleted": 1,
                    "assigned_creator.$[elem].video_link": video_link
                }
            },
            {
                arrayFilters: [
                    { "elem.creator_id": creator_id }
                ]
            }
        );

        if (!data) {
            return res.json({ message: "Unablt to post video", status: 0 });
        }

        return NextResponse.json({ message: "Video posted! Payment will follow verification.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}