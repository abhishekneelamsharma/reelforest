import creatorModel from "@/_model/CreatorModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises"


export const POST = async (request) => {
    await connectDB();
    try {
        const data = await request.formData();

        const fullname = data.get('fullname')
        const username = data.get('username')
        const profile_link = data.get('profile_link')
        const email = data.get('email')
        const followers = data.get('followers')
        const followings = data.get('followings')
        const posts = data.get('posts')
        const views = data.get('views')
        const engagement = data.get('engagement')
        const profile_image = data.get('profile_image')
        const language = data.get('language')
        const category_Id = data.get('category_id')
        const creator_charges = data.get('creator_charges')
        const wallet_amount = data.get('wallet_amount')
        const password = data.get('password')


        if (!fullname || !username || !profile_link || !email || !followers || !followings || !posts || !views || !engagement || !language || !profile_image || !category_Id || !creator_charges || !wallet_amount || !password) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }

        const isExist = await creatorModel.findOne({ email: email });
        if (isExist) {
            return NextResponse.json({ message: "Email already exist!", status: 0 });
        }

        const byteData = await profile_image.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `${Date.now()}-${profile_image.name}`
        await writeFile(`./public/uploads/${path}`, buffer);

        const newCreator = new creatorModel({ fullname, username, profile_link, email, followers, followings, posts, views, engagement, category_Id, creator_charges, wallet_amount, password, language: language.split(","), profile_image: path, isVerified: 1 });
        await newCreator.save();
        return NextResponse.json({ message: "Creator created successfully!", status: 1 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}