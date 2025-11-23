import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';
import { Fish } from '../model/fishModel';

export const createFish = async (req:Request, res:Response) => {

    const {fishName , price , description , fishCategory} = req.body

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

    const fishDetails = new Fish({
        fishName,
        price,
        description,
        fishCategory,
        imageUrl
    })

    await fishDetails.save()
    res.status(201).json({message: "Fish Details created",
        data: fishDetails
    })
}

export const getAll = async (req:Request, res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const fish = await Fish.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

        const total = await Fish.countDocuments();
        return res.status(200).json({
            message: 'Fish Details get Successful',
            data: fish,
            totalPages: Math.ceil(total / limit),
            totalCount: total,
            page,
        });

    } catch (error: any) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const updateFish = async(req:Request, res:Response) =>{

}

export const deleteFish = async(req:Request, res:Response) =>{

}

