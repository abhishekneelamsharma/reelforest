import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id, walletAmount } = await request.json();
        const user = await userModel.findOne({ _id: id });

        const updatedWalletAmount = user.walletAmount + Number(walletAmount);

        const data = await userModel.findByIdAndUpdate({ _id: id }, { walletAmount: updatedWalletAmount })
        if (!data) {
            return NextResponse.json({ message: "Unable to update data", status: 0 });
        }
        return NextResponse.json({ message: "Fund Added.", status: 1, });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}