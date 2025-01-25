import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"


export const POST = async (request) => {
    await connectDB();
    try {
        const { email, password } = await request.json()
        if (!password) {
            const isVerified = await userModel.findOne({ email });
            if (!isVerified) {
                return NextResponse.json({ message: "User does not exist!", status: 0 })
            }
            return NextResponse.json({ message: "Email exist", email: email, status: 1 })
        }
        const isVerified = await userModel.findOne({ email });
        if (isVerified) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await userModel.findByIdAndUpdate({ _id: isVerified._id }, { password: hashedPassword });
            return NextResponse.json({ message: "Password changed successfully", status: 1 })
        }
        return NextResponse.json({ message: "Unable to change password", status: 0 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}