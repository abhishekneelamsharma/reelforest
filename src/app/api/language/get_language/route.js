import languageModel from "@/_model/LanguageModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    connectDB();
    try {

        const data = await languageModel.find({})
        if (!data) {
            return NextResponse.json({ message: "Unable to get language data", status: 0 })
        }
        return NextResponse.json({ message: "Get language data successfully", status: 1, data: data})
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}