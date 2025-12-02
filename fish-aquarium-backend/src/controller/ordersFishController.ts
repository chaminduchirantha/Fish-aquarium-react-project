import { Request , Response } from "express"
import { OrdersFish } from "../model/ordersFishModel"

export const createOrders = async(req:Request , res:Response)=>{
    const {email ,firstname,lastname,address,paymentmethod,amount,orderDate,orderType,fishname,price,qty} = req.body

    if(!email || !firstname || !lastname || !address || !paymentmethod){
        return res.status(400).json({ message: "All fields are required" })
    }

    const newOrderFishDetail = new OrdersFish({
        email, 
        firstname,
        lastname,
        address,
        paymentmethod,
        amount,
        orderDate,
        orderType,
        fishname,
        price,
        qty,
    })

    await newOrderFishDetail.save()
    res.status(201).json({message: "Order created successfully",
        data: newOrderFishDetail
    })

}