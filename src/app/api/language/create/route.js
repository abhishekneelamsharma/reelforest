import languageModel from "@/_model/LanguageModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { language } = await request.json();
        if (!language) {
            return NextResponse.json({ message: "Language is required!", status: 0 })
        }

        const data = new languageModel({ language: language })
        await data.save();
        return NextResponse.json({ message: "Language created successfully", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}