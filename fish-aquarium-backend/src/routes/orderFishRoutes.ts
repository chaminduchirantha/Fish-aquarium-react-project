import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { createOrders } from "../controller/ordersFishController";

const router = Router()

router.post("/createOrders",  authenticate , requireRole([Role.USER]) ,createOrders)

export default router