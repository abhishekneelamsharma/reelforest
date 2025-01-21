import mongoose from "mongoose";

const chargesSchema = new mongoose.Schema({
    plateform_charges: {
        type: Number,
        default: null
    },
    service_charges: {
        type: Number,
        default: null
    }
})

const chargesModel = mongoose.models.charges_model || new mongoose.model("charges_model", chargesSchema);
export default chargesModel;