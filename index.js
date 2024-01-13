import express from "express";
import { connection } from "./db/connection.js";
import userRoutes from "./Modules/Users/user.routes.js";
import messageRoutes from "./Modules/Messages/message.routes.js";
import cors from "cors"
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({origin: "*"}))
connection();
app.use(userRoutes);
app.use(messageRoutes);
app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () => console.log(`app listen on port ${port}`));

