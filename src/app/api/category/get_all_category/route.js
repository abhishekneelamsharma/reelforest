import categoryModel from "@/_model/CategoryModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    connectDB()
    try {
        const data = await categoryModel.find({});
        if (!data) {
            return NextResponse.json({ message: "Unable to get category data", status: 0 })
        }
        return NextResponse.json({ message: "Get category data", status: 1, data: data })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}