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
    },
    role: {
        type:String,
        default:"Admin"
    }
})

const adminModel = mongoose.models?.admin_model ||  new mongoose.model("admin_model", adminSchma)
export default adminModel