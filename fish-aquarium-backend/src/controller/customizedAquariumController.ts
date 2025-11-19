import { Request, Response } from "express"
import cloudinary from "../config/cloudinary"
import { CustomizedAquarium } from "../model/customizedAquarium"
import { AuthRequest } from "../middleware/auth"


export const create = async(req:AuthRequest , res:Response)=>{

    try{
    const {customername, phonenumber, email, address, width, height, length, material, extrafeatures, notes} = req.body

        let imageUrl = ""

        if (req.file) {
            const result: any = await new Promise((resolve, reject) => {
                const upload_stream = cloudinary.uploader.upload_stream(
                    {folder: "post"},
                    (err, result) => {
                        if (err) return reject(err)
                        resolve(result)
                    }
                )

                upload_stream.end(req.file?.buffer)

            })
            imageUrl  = result.secure_url
        }


        const newDetails = new CustomizedAquarium({
            customername,
            phonenumber,
            email,
            address,
            width,
            height,
            length,
            material,
            extrafeatures,
            notes,
            imageUrl,
            auther:req.user?.sub
        })

        await newDetails.save()
        res.status(201).json({message: "Post created",
            data: newDetails
        })

    }catch(erorr){
        console.error(erorr)
        res.status(500).json({message: "Fail to save post"} )
    }
}

export const getDetails = (req:Request , res:Response) => {

}