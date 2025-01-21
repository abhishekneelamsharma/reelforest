import creatorModel from "@/_model/CreatorModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    connectDB();
    try {
        const { creator_id } = await request.json();

        const data = await creatorModel.findOne({ _id: creator_id });
        if (!data) {
            return NextResponse.json({ message: "Unable to get data", status: 0 })
        }
        return NextResponse.json({
            message: "Get Creator data successfully", status: 1, data: {
                username: data.username,
                fullname: data.fullname,
                profile_image: data.profile_image,
                wallet_amount: data.wallet_amount
            }
        })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}