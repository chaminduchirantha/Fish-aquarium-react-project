import { Router } from "express";
import { getMyDetails, login, register } from "../controller/authController";
import { authenticate } from "../middleware/auth";

const router = Router()

router.post("/register" , register)
router.post("/login", login)
router.get("/get", authenticate, getMyDetails)

export default router