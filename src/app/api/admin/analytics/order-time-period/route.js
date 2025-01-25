import orderModel from "@/_model/OrderModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    connectDB();
    try {
        const { time_period } = await request.json();
        const startOfDay = new Date();
        const endOfDay = new Date();

        if (time_period == "day") {
            startOfDay.setHours(0, 0, 0, 0);
            endOfDay.setHours(23, 59, 59, 999);
        } else if (time_period == "month") {
            startOfDay.setHours(0, 0, 0, 0);
            startOfDay.setDate(1);

            endOfDay.setHours(23, 59, 59, 999);
            endOfDay.setDate(0);
            endOfDay.setMonth(endOfDay.getMonth() + 1);
        } else if (time_period == "year") {
            startOfDay.setMonth(0);
            startOfDay.setDate(1);
            startOfDay.setHours(0, 0, 0, 0);
            startOfDay.setFullYear(startOfDay.getFullYear() - 1)

            endOfDay.setMonth(11)
            endOfDay.setDate(31)
            endOfDay.setHours(23, 59, 59, 999);
            endOfDay.setFullYear(endOfDay.getFullYear() - 1)
        }


        const totalOrder = await orderModel.find({ createdAt: { $gte: startOfDay, $lte: endOfDay } })
        const completedOrder = await orderModel.find({ createdAt: { $gte: startOfDay, $lte: endOfDay }, order_status: 1 })
        const pendingOrder = await orderModel.find({ createdAt: { $gte: startOfDay, $lte: endOfDay }, order_status: 0 })


        return NextResponse.json({
            message: "Get Data Successfully...", data: {
                totalOrder: totalOrder.length,
                completedOrder: completedOrder.length,
                pendingOrder: pendingOrder.length
            },

            status: 1
        })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}