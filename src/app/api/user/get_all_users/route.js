import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    connectDB()
    try {
        const data = await userModel.find({}).sort({ _id: -1 });
        if (!data) {
            return NextResponse.json({ message: "Unable to get user data", status: 0 });
        }
        return NextResponse.json({ message: "Get User data successfully", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}