import mongoose from "mongoose";

const userSchma = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    role: {
        type:String,
        default:"User"
    }
})

const userModel = mongoose.models?.user_model || new mongoose.model("user_model", userSchma)
export default userModel