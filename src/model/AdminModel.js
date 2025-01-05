import mongoose from "mongoose";

const adminSchma = new mongoose.Schema({
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
    }
})

const adminModel = new mongoose.model("user_model", adminSchma)
export default adminModel