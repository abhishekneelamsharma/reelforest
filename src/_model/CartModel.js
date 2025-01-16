import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        default: null
    },
    item: [
        {
            category_id: {
                type: String,
                default: null
            },
            amount: {
                type: Number,
                default: 0
            },
            number_of_creators: {
                type: Number,
                default: 0
            },
            Creators: {
                type: [String],
                default: null
            }
        }
    ],

})

const cartModel = mongoose.models.cart_model || new mongoose.model("cart_model", cartSchema);
export default cartModel;