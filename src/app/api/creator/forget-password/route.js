import creatorModel from "@/_model/CreatorModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    await connectDB();
    try {
        const { email, password } = await request.json()
        console.log(email, password);
        if (!password) {
            const isVerified = await creatorModel.findOne({ email });
            if (!isVerified) {
                return NextResponse.json({ message: "Invalid email !", status: 0 })
            }
            return NextResponse.json({ message: "Email exist", email: email, status: 1 })
        }

        const isVerified = await creatorModel.findOne({ email });
        if (isVerified) {
            await creatorModel.findByIdAndUpdate({ _id: isVerified._id }, { password: password })
            return NextResponse.json({ message: "Password changed successfully", status: 1 })
        }
        return NextResponse.json({ message: "Unable to change password", status: 0 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}