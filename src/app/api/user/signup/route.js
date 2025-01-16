import userModel from "@/_model/UserModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
  await connectDB();
  try {
    const { name, email, password } = await request.json();
  
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Please fill all the fields", status: 0 })
    }

    const isUserExist = await userModel.findOne({ email: email });
    if (isUserExist) {
      return NextResponse.json({ message: "User already exist", status: 0 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new userModel({ name, email, password:hashedPassword })
    await newUser.save();
    return NextResponse.json({ message: "User registered successfully", status: 1 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error", status: 0 });
  }
};
