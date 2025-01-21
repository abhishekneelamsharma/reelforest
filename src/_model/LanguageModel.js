import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    language: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }
})

const languageModel = mongoose.models.language_model || new mongoose.model("language_model", languageSchema);
export default languageModel;