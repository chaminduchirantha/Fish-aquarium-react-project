import express from "express"
import authRouter from "./routes/authRoutes"
import customAquariumRouter from "./routes/customizedAquariumRoutes"
import fishRouter from "./routes/fishRoutes"
import userRouter from "./routes/userRoutes"
import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose"
import cors from "cors"

dotenv.config()


const SERVER_PORT = process.env.SERVER_PORT
const MONGO_URI = process.env.MONGO_URI as string 

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
)

app.use("/api/v1/auth" , authRouter)
app.use("/api/v1/aquarium" , customAquariumRouter)
app.use("/api/v1/fish" , fishRouter)
app.use("/api/v1/user" , userRouter)


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