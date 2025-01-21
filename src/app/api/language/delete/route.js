import languageModel from "@/_model/LanguageModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const {  id } = await request.json();
        
        const data = await languageModel.findByIdAndDelete({ _id: id })
        if(!data){
            return NextResponse.json({ message: "Unable to delete language!", status: 0 })
        }
        return NextResponse.json({ message: "Language deleted successfully", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}