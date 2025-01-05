import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
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

const creatorModel = new mongoose.model("user_model", creatorSchema)
export default creatorModel