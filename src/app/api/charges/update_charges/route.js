import chargesModel from "@/_model/ChargesModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id, plateform_charges, service_charges } = await request.json();
        const data = await chargesModel.findByIdAndUpdate({ _id: id }, { plateform_charges, service_charges })

        if (!data) {
            return NextResponse.json({ message: "Unable to updated charges", status: 0 })
        }
        
        return NextResponse.json({ message: "Updated successfully...", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 })
    }
}