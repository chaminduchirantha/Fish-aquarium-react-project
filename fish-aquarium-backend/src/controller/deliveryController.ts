import { Request,Response} from "express"
import { Delivery } from "../model/deliveryModel"
import { sendDeliveryEmail } from "../util/sendMail"

export const saveDelivery =async (req:Request , res:Response) =>{
    const {customername , phonenumber , email , address , city , deliveryDate, deliveryTime , postelCode , location} = req.body

    if(!customername || !phonenumber || !email || !address || !city || !postelCode || !deliveryDate || !deliveryTime){
        return res.status(400).json({ message: "All fields are required" })
    }
    

    const newDelivery = new Delivery({
        customername, 
        phonenumber,
        email,
        address,
        city,
        deliveryDate,
        deliveryTime,
        postelCode,
        location: location
        ? { lat: location.lat, lng: location.lng }
        : { lat: null, lng: null },
    })

    const saved = await newDelivery.save()

    await sendDeliveryEmail(saved);

    res.status(201).json({
      message:"Feedback Create Successfully",
      data: newDelivery
    })
}

export const getAllDeliveryh = (req:Request , res:Response)=>{

}