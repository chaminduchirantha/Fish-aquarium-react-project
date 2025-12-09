import { Request,Response } from "express"
import { Payemnt } from "../model/paymentModel"
import bcrypt from "bcryptjs"

export const savePayment = async(req:Request , res:Response)=>{
    const {email , phonenumber , cardHolderName , cardNumber , expireDate , cvv, paymentDate , amount} = req.body
    
    if(!email || !phonenumber || !cardHolderName || !cardNumber || !expireDate || !cvv || !paymentDate || !amount){
        return res.status(400).json({ message: "All fields are required" })
    }

    const hasheCardNumber = await bcrypt.hash(String(cardNumber), 10)
    const hasheCvv = await bcrypt.hash(String(cvv), 10)
    const hasheExpireDate = await bcrypt.hash(String(expireDate), 10)

    const newPayement = new Payemnt({
        email, 
        phonenumber,
        cardHolderName,
        cardNumber:hasheCardNumber,
        expireDate:hasheExpireDate,
        cvv:hasheCvv,
        paymentDate,
        amount
    })

    await newPayement.save()

    res.status(201).json({
        message:"Payment Create Successfully",
        data: newPayement
    })
}