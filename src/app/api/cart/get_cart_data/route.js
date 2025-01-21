import cartModel from "@/_model/CartModel";
import categoryModel from "@/_model/CategoryModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB()
    try {
        const { user_id } = await request.json();

        let data = await cartModel.findOne({ user_id: user_id }).lean();
        const category = await categoryModel.find({});

        if (!data) {
            return NextResponse.json({ message: "Unable to get data", status: 0 });
        }

        data.item = data.item.map((ele) => {
            const categorydata = category.find((cate) => cate._id == ele.category_id);
            ele.category_name = categorydata?.category_name;
            return ele;
        })

        
        return NextResponse.json({ message: "Get Data successfully", status: 1, data: data });
    } catch (err) {
        console.log(err);
    }
}