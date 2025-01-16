import creatorModel from "@/_model/CreatorModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    connectDB();
    try {
        const data = await creatorModel.find({ isVerified: 0 }).sort({_id:-1});
        if (!data) {
            return NextResponse.json({ message: "Unable to get creator data", status: 0 });
        }
        return NextResponse.json({ message: "Get creator data", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}