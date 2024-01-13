import messageModel from "../../db/model/message.model.js";
import jwt from "jsonwebtoken"

const addMessage = async (req, res) => {
    try {
        // let {id} = req.params;
        let {name, type, muscle, equipment, difficulty, instructions, day} = req.body ;
        let addedMessage = await messageModel.insertMany({name, type, muscle, equipment, difficulty, instructions,day});
        res.status(201).json({message: "added successfully", addedMessage});
    } catch (error) {
        res.status(401).json({message: "Error", error})
    }
    
}

const allMessage = async (req, res) => {
    try {
        let allMessages = await messageModel.find()
    res.status(201).json({message: "Hi", allMessages})
    }catch (error) {
        res.status(400).json({message: "Err", error})
    }
}

const deleteMessage = async (req, res) => {
    try {
        const messageId = req.params.id;
        const deletedMessage = await messageModel.deleteOne({_id: messageId});

        if (!deletedMessage) {
            res.status(404).json({ message: "Message not found" });
        } else {
            res.status(200).json({ message: "Deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error", error });
    }
}

export {
    addMessage,
    allMessage,
    deleteMessage
}
// .populate("recievedId");