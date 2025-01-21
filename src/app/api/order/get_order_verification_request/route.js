import creatorModel from "@/_model/CreatorModel";
import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    connectDB();
    try {
        const { order_id } = await request.json();
        const order = await orderModel.findOne({ _id: order_id }).lean();

        let filteredCreators = order.assigned_creator.filter(
            creator => creator.isCompleted === 1 && creator.isVerified === 0
        );


        if (!filteredCreators) {
            return NextResponse.json({ message: "Unable to get data", status: 0 })
        }

        const creatorData = await creatorModel.find({});

        filteredCreators = filteredCreators.map((ele) => {
            const creator = creatorData.find((e) => e._id == ele.creator_id);
            ele.fullname = creator.fullname
            ele.username = creator.username
            ele.creator_charges = creator.creator_charges;
            return ele;
        })


        return NextResponse.json({ message: "Get order request successfully...", status: 1, data: filteredCreators })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}