import categoryModel from "@/_model/CategoryModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    try {
        const { id, status } = await request.json();
        const data = await categoryModel.findByIdAndUpdate({ _id: id }, { status: status == 1 ? 0 : 1 })
        if (!data) {
            return NextResponse.json({ message: "Unable to change status", status: 0 });
        }
        return NextResponse.json({ message: "Status changed", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}