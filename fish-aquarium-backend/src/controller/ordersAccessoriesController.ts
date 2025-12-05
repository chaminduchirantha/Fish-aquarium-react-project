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


export const getAllAccessoriesOrders = async (req:Request, res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const orderAccesssories = await OrdersAccessories
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

        const total = await OrdersAccessories.countDocuments();
        return res.status(200).json({
            message: 'Orders Details get Successful',
            data: orderAccesssories,
            totalPages: Math.ceil(total / limit),
            totalCount: total,
            page,
        });

    } catch (error: any) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}