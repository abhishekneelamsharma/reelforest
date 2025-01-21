import mongoose from "mongoose";

const OrderSchmea = new mongoose.Schema({
    user_id: {
        type: String,
        default: null
    },
    cart_id: {
        type: String,
        default: null
    },
    audio_link: {
        type: String,
        default: null
    },
    total_no_of_creators: {
        type: Number,
        default: 0
    },
    total_amount: {
        type: Number,
        default: 0
    },
    assigned_creator: [
        {
            creator_id: {
                type: String,
                default: null
            },
            isCompleted: {
                type: Number,
                default: 0
            },
            isVerified: {
                type: Number,
                default: 0
            },
            video_link: {
                type: String,
                default: null
            }
        }
    ]
}, {
    timestamps: true
})

const orderModel = mongoose.models.order_model || new mongoose.model("order_model", OrderSchmea);
export default orderModel;