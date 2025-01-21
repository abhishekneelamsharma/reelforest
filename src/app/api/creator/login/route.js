import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import creatorModel from "@/_model/CreatorModel";


export const POST = async (request) => {
    await connectDB();
    try {
        const { email, password } = await request.json()
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }
        const isVerified = await creatorModel.findOne({ email, password });
        if (isVerified) {
            return NextResponse.json({ message: "Creator login successfully", status: 1, role: isVerified.role, fullname: isVerified.fullname,_id:isVerified._id });
        }
        return NextResponse.json({ message: "Invalid credentials", status: 0 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}