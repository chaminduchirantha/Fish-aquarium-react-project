import express from "express"
import authRouter from "./routes/authRoutes"
import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose"
dotenv.config()


const SERVER_PORT = process.env.SERVER_PORT
const MONGO_URI = process.env.MONGO_URI as string 

const app = express()

app.use(express.json())

app.use("/api/v1/auth" , authRouter)


mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DB connected Successful")
  })
  .catch((err) => {
    console.error(`DB connection fail: ${err}`)
    process.exit(1)
  })


app.listen(SERVER_PORT,()=>{
    console.log("Server is Running 5000")
})