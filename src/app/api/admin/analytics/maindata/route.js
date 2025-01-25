import categoryModel from "@/_model/CategoryModel";
import creatorModel from "@/_model/CreatorModel";
import orderModel from "@/_model/OrderModel"
import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server"

export const GET = async () => {
    connectDB();
    try {
        const totalOrder = await orderModel.find();
        const completedOrders = await orderModel.find({ order_status: 1 });
        const totalUser = await userModel.find()
        const totalCreator = await creatorModel.find({ isVerified: 1 })
        const totalCategory = await categoryModel.find();
        const topCreator = await creatorModel.find().sort({ creator_charges: -1 }).limit(5)



        return NextResponse.json({
            message: "Get Data Successfully...", data: {
                creatorData: topCreator,
                totalUser: totalUser.length,
                totalCreator: totalCreator.length,
                totalOrder: totalOrder.length,
                completedOrders: completedOrders.length,
                processOrder: totalOrder.length - completedOrders.length,
                totalCategory: totalCategory.length
            },

            status: 1
        })
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}