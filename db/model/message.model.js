import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    muscle: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    // recievedId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }

}, {timestamps: true});
const messageModel = model("Message", messageSchema);
export default messageModel;