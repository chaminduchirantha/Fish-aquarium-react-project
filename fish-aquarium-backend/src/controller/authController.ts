import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import {User } from "../model/user"
import { signAccessToken } from "../util/token"


export const register = async (req:Request , res:Response)=>{
    const {firstname , lastname , email , password , role} = req.body

    if(!firstname || !lastname || !email || !password || !role){
        return res.status(400).json({ message: "All fields are required" })
    }

    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(400).json({ message: "Email alrady registered" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

     const newUser = new User({
      firstname, 
      lastname,
      email,
      password: hashedPassword,
      role: [role],
    })

     await newUser.save()

    res.status(201).json({
      message:"User Register Successfully",
      data: {
        id: newUser._id,
        email: newUser.email,
        roles: newUser.role,
      }
    })
}

export const login = async(req:Request , res:Response)=>{
    const {email , password} = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

       const valid = await bcrypt.compare(password, existingUser.password)
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const accessToken = signAccessToken(existingUser)

    res.status(200).json({
        message : "success",
        data:{
            email : existingUser.email,
            role : existingUser.role,
            accessToken
        }
    })
}

export const get = (req:Request , res:Response)=>{
    res.send("Get Details")
}