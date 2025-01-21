import cartModel from "@/_model/CartModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB()
    try {
        const { user_id, item } = await request.json();

        if (!user_id || !item) {
            return NextResponse.json({ message: "Unable to update cart data", status: 0 });
        }

        //If cart is exist for the user
        const isCartExist = await cartModel.findOne({ user_id: user_id });
        if (isCartExist) {

            //If category exist Update the amount and number of creators in the existing one else push new item in array
            const isCateExist = isCartExist.item.find((ele) => ele.category_id == item.category_id);
            if (isCateExist) {
                const data = await cartModel.findByIdAndUpdate({ _id: isCartExist._id },
                    {
                        $set: {
                            "item.$[elem].amount": item.amount,
                            "item.$[elem].number_of_creators": item.number_of_creators,
                            "item.$[elem].Creators": item.Creators
                        }
                    },
                    {
                        arrayFilters: [{ "elem.category_id": item.category_id }]
                    })
                if (!data) {
                    return NextResponse.json({ message: "Unable to update cart", status: 0 });
                }
            } else {
                const data = await cartModel.findByIdAndUpdate({ _id: isCartExist._id }, { $push: { item: item } })
                if (!data) {
                    return NextResponse.json({ message: "Unable to update cart", status: 0 });
                }
            }

            return NextResponse.json({ message: "Added to cart.", status: 1 });
        }

        // If cart does not exist for the user 
        const newCart = new cartModel({ user_id, item});
        await newCart.save();
        return NextResponse.json({ message: "Cart created successfully", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}

