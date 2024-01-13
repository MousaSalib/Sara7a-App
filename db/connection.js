import mongoose from "mongoose";
export const connection = () => {
    mongoose.connect(`mongodb+srv://saraha:saraha@cluster0.lfpknd4.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("DB connected") ).catch((err) => console.log(err))
}

