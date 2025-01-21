import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import creatorModel from "@/_model/CreatorModel";
import connectDB from "@/utils/connect";

const SECRET_KEY = process.env.SECRET_KEY;

export const POST = async (request) => {
    connectDB();
    try {
        const { token, password } = await request.json();
        if (!token || !password) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 })
        }

        const verifiedToken = jwt.verify(token, SECRET_KEY)

        const data = await creatorModel.findOne({ email: verifiedToken.email, password: null })

        if (!data) {
            return NextResponse.json({ message: "Unable to set creator password", status: 0 })
        }
        const updatedData = await creatorModel.findByIdAndUpdate({ _id: data._id }, { password: password })
        if (!updatedData) {
            return NextResponse.json({ message: "Unable to set creator password", status: 0 })
        }
        return NextResponse.json({ message: "Password Created", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}