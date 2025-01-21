import languageModel from "@/_model/LanguageModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { language, id } = await request.json();
        if (!language) {
            return NextResponse.json({ message: "Language is required!", status: 0 })
        }

        const data = await languageModel.findByIdAndUpdate({ _id: id }, { language: language })
        if(!data){
            return NextResponse.json({ message: "Unable to update language!", status: 0 })
        }
        return NextResponse.json({ message: "Language updated successfully", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}