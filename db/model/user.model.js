import { Schema } from "mongoose";
import { model } from "mongoose";
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minLength: [3, "min char is 3"],
        maxLength: [10, "max length is 10"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    
    },
    password: {
        type: String,
        required: true,
    },
    phone: String,

}, {timestamps: true});

const userModel = model("User", userSchema);
export default userModel;