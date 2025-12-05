import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { saveDelivery } from "../controller/deliveryController";

const router = Router()

router.post("/create",  authenticate , requireRole([Role.USER]) ,saveDelivery)
export default router
