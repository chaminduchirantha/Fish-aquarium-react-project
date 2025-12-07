import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { savePayment } from "../controller/paymentController";

const router = Router()

router.post("/create",  authenticate , requireRole([Role.USER]) , savePayment)

export default router