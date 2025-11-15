import { Router } from "express";
import { get, login, register } from "../controller/authController";

const router = Router()

router.post("/register" , register)
router.post("/login", login)
router.get("/get",get)

export default router