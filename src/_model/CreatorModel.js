import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        default: null
    },
    username: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    profile_image: {
        type: String,
        default: null
    },
    language: [{
        type: String,
        default: null
    }],
    profile_link: {
        type: String,
        default: null
    },
    followers: {
        type: String,
        default: null
    },
    followings: {
        type: String,
        default: null
    },
    posts: {
        type: String,
        default: null
    },
    engagement: {
        type: String,
        default: null
    },
    views: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    category_Id: {
        type: String,
        default: null
    },
    isVerified: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "Creator"
    },
    status: {
        type: Number,
        default: 1
    }
})

const creatorModel = mongoose.models?.creator_model || new mongoose.model("creator_model", creatorSchema)
export default creatorModel;