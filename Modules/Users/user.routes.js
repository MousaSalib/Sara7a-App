import express from "express";
import { login, signUp } from './user.cotrollers.js'
import validation from "../../middleWare/validation.js";
import { loginvalidationSchema, signUpValidationSchema } from "./userValidation.js";
const userRoutes = express.Router();

userRoutes.post("/signUp", validation(signUpValidationSchema), signUp);
userRoutes.post("/login", validation(loginvalidationSchema), login)



export default userRoutes;

