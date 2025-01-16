const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        default: null
    },
    min_no_of_creators: {
        type: Number,
        default: null
    },
    amount: {
        type: Number,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }
})

const categoryModel = mongoose.models?.category_model || new mongoose.model("category_model", categorySchema)
export default categoryModel;