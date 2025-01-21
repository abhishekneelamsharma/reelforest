import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"


export const POST = async (request) => {
    await connectDB();
    try {
        const { email, password } = await request.json()
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }
        const isVerified = await userModel.findOne({ email });
        if (isVerified) {
            const matchPass = await bcrypt.compare(password, isVerified.password);
            if (matchPass) {
                return NextResponse.json({ message: "User login successfully", status: 1, user_id: isVerified._id, role: isVerified.role, username: isVerified.name, walletAmount: isVerified.walletAmount });
            }
        }
        return NextResponse.json({ message: "Invalid credentials", status: 0 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}