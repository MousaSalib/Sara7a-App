
import userModel from "../../db/model/user.model.js";
import bcrypt from "bcrypt";
import { signUpValidationSchema } from "./userValidation.js";
import { loginvalidationSchema } from "./userValidation.js";
import  jwt  from "jsonwebtoken";


const signUp = async (req, res) => {
    try {
        let {error} = signUpValidationSchema.validate(req.body, {abortEarly: false});
        if(error) {
            res.status(400).json({message: "Validation is error", error})
        } else {

        
        let {email} = req.body;
        let foundedUser = await userModel.findOne({email: email});
        if(foundedUser) {
            res.status(400).json({message: "Your are already registered"})
        } else {
            let hashedPassword = bcrypt.hashSync(req.body.password, 7)
            let insertedUser = await userModel.insertMany({...req.body, password: hashedPassword});
            res.status(200).json({message: "Added Successfully", insertedUser})
        }
    }
    } catch (error) {
        res.status(400).json({message: "error", error})
    }
}



const login = async (req, res) => {
    try {
        let {error} = loginvalidationSchema.validate(req.body);
        if(error) {
            res.status(400).json({message: "Validation is error", error})
        }else {
        let foundedUser = await userModel.findOne({email: req.body.email});
        if(foundedUser) {
            let matched = bcrypt.compareSync(req.body.password, foundedUser.password);
            if(matched) {
                let token = jwt.sign({id: foundedUser.id}, "bl7")
                res.status(201).json({message: "Welcome", token})
            }else {
                res.status(404).json({message: "Password is wrong"})
            }
        } else {
            res.status(404).json({message: "You have to register"})

        }
        }

    } catch(error) {
        res.status(404).json({message: "Error"})
    }

}
export {
    signUp,
    login
}