import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB()
    try {
        const { user_id } = await request.json();
        const data = await userModel.findOne({ _id: user_id });
        if (!data) {
            return NextResponse.json({ message: "Unable to get user data", status: 0 });
        }
        return NextResponse.json({
            message: "Get User data successfully", status: 1, data: {
                walletAmount: data.walletAmount,
                name: data.name
            }
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}