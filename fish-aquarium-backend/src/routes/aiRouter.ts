import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { Role } from "../model/user";
import { requireRole } from "../middleware/role";
import { generateContent } from "../controller/aiController";


const router = Router()


router.post("/generate", authenticate ,  requireRole([Role.USER]) , generateContent )

export default router