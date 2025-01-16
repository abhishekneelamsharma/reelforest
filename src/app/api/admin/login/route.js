import adminModel from "@/_model/AdminModel";
import connectDB from "@/utils/connect"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 })
        }
        const isVerified = await adminModel.findOne({ email, password });
        if (isVerified) {
            return NextResponse.json({ message: "Admin login successfully", status: 1, role: isVerified.role });
        }
        return NextResponse.json({ message: "Invalid credentials", status: 0 });
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}