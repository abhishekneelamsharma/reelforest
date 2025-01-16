import categoryModel from "@/_model/CategoryModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    try {
        const { id, category_name, min_no_of_creators, amount } = await request.json();
       
        if (!category_name || !min_no_of_creators || !amount) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }
        const data = await categoryModel.findByIdAndUpdate({ _id: id }, { category_name, min_no_of_creators, amount })
        console.log(data);
        if (!data) {
            return NextResponse.json({ message: "Unable to Update category data", status: 0 });
        }
        return NextResponse.json({ message: "Updated Successfully", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}