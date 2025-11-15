import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { IUser } from "../model/user"

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY as string
export const signAccessToken = (user:IUser):string => {
    return jwt.sign(
        {
            sub:user._id.toString(),
            role : user.role 
        },
        SECRET_KEY,
        {
            expiresIn: "30m"
        }

    )
}
