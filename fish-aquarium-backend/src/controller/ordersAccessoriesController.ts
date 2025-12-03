import { Request , Response } from "express"
import { OrdersAccessories } from "../model/ordersAccessriesModel"

export const createOrdersAccessories = async(req:Request , res:Response)=>{
    const {email ,firstname,lastname,address,paymentmethod,amount,orderDate,orderType,itemname,description,price,qty} = req.body

    if(!email || !firstname || !lastname || !address || !paymentmethod){
        return res.status(400).json({ message: "All fields are required" })
    }

    const newOrdeAccessoriesDetail = new OrdersAccessories({
        email, 
        firstname,
        lastname,
        address,
        paymentmethod,
        amount,
        orderDate,
        orderType,
        itemname,
        description,
        price,
        qty,
    })

    await newOrdeAccessoriesDetail.save()
    res.status(201).json({message: "Order created successfully",
        data: newOrdeAccessoriesDetail
    })
}