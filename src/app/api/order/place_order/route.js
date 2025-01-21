import cartModel from "@/_model/CartModel";
import creatorModel from "@/_model/CreatorModel";
import orderModel from "@/_model/OrderModel";
import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { user_id, cart_id, audio_link, total_no_of_creators, total_amount } = await request.json();

        if (!user_id || !cart_id || !audio_link || !total_no_of_creators || !total_amount) {
            return NextResponse.json({ message: "Unable to place your order", status: 0 });
        }

        const cartData = await cartModel.findOne({ _id: cart_id });

        //1. Find the all categories for those the creators array is null
        const categoriesInCartData = cartData?.item?.map((ele) => {
            if (!ele.Creators) {
                return ele.category_id
            }
            return []
        }).flat()
        const creatorData = await creatorModel.find({});

        //Find all the creators as per category array
        const unassigned_creators = creatorData?.filter((ele) => {
            return categoriesInCartData.includes(ele.category_Id);
        }).map((ele) => ele._id)


        // 2. Find all the assigned creators 
        const assigned_creators = cartData?.item?.map(item => item.Creators || []).flat();

        const newOrder = new orderModel({
            user_id, cart_id, audio_link, total_no_of_creators, total_amount,
            assigned_creator: [...unassigned_creators, ...assigned_creators].map((ele) => ({
                creator_id: ele
            }))
        })
        await newOrder.save();

        const user = await userModel.findOne({ _id: user_id })
        const walletAmount = user.walletAmount - Number(total_amount)
        await userModel.findByIdAndUpdate({ _id: user_id }, { walletAmount: walletAmount })

        await cartModel.findByIdAndDelete({ _id: cart_id })
        
        return NextResponse.json({ message: "Order Placed !", status: 1 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}