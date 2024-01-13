import express from "express";
import { addMessage, allMessage, deleteMessage } from "./message.controller.js";
// import auth from "../../middleWare/auth.js";
const messageRoutes = express.Router();

messageRoutes.post("/message", addMessage);
// messageRoutes.post("/message/:id",auth, addMessage);
messageRoutes.get("/allMessage", allMessage);
messageRoutes.delete("/deleteMessage/:id", deleteMessage)



export default messageRoutes;