import mongoose from "mongoose";
const URL = process.env.URL;

const connectDB = async () => {
    if (mongoose.connection.readyState) {
        console.log("Database Already connected...");
        return;
    }
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully :)")
    } catch (err) {
        console.log(`Unable to connect with database :(,${err}`);
    }
}

export default connectDB;