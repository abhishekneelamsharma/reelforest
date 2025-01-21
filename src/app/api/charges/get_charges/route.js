import chargesModel from "@/_model/ChargesModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    connectDB();
    try {
        const data = await chargesModel.findOne({});

        if (!data) {
            return NextResponse.json({ message: "Unable to updated charges", status: 0 })
        }

        return NextResponse.json({ message: "Updated successfully...", status: 1, data: data })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}