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

export const getAllFishOrders = async (req:Request, res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const orderFish = await OrdersFish.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

        const total = await OrdersFish.countDocuments();
        return res.status(200).json({
            message: 'Orders Details get Successful',
            data: orderFish,
            totalPages: Math.ceil(total / limit),
            totalCount: total,
            page,
        });

    } catch (error: any) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}