import categoryModel from "@/_model/CategoryModel";
import creatorModel from "@/_model/CreatorModel";
import orderModel from "@/_model/OrderModel"
import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    connectDB();
    try {
        const { creator_id } = await request.json();
        const totalOrder = await orderModel.aggregate([
            {
                $match: {
                    "assigned_creator.creator_id": creator_id
                }
            },{
                $count: 'number'
            }
        ]);
        const completedOrders = await orderModel.aggregate([
            {
                $match: {
                    "assigned_creator.creator_id": creator_id
                }
            }, {
                $match: {
                    "assigned_creator.isVerified": 1
                }
            }, {
                $count: 'number'
            }
        ]);
        const totalUser = await userModel.find()
        const totalCreator = await creatorModel.find()
        const topCreator = await creatorModel.find().sort({ creator_charges: -1 }).limit(5)



        return NextResponse.json({
            message: "Get Data Successfully...", data: {
                creatorData: topCreator,
                totalUser: totalUser.length,
                totalCreator: totalCreator.length,
                totalOrder: totalOrder[0].number,
                completedOrders: completedOrders[0].number,
                processOrder: totalOrder[0].number - completedOrders[0].number,
            },

            status: 1
        })
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}