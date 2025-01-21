import creatorModel from "@/_model/CreatorModel";
import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    connectDB();
    try {
        const { order_id, creator_id, creator_charges } = await request.json();


        const data = await orderModel.updateOne(
            { _id: order_id },
            {
                $set: {
                    "assigned_creator.$[elem].isVerified": 1,
                }
            },
            {
                arrayFilters: [
                    { "elem.creator_id": creator_id }
                ]
            }
        );

        if (!data) {
            return NextResponse.json({ message: "Unable to Verify Order Request", status: 0 })
        }

        const creator = await creatorModel.findOne({ _id: creator_id });

        if (!creator) {
            return NextResponse.json({ message: "Unable to Verify Order Request", status: 0 })
        }

        const new_wallet_amount = creator.wallet_amount + Number(creator_charges);
        
        await creatorModel.findByIdAndUpdate({ _id: creator_id }, { wallet_amount: new_wallet_amount });

        return NextResponse.json({ message: "Order Verified...", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}