import { Router } from "express"
import { authenticate } from "../middleware/auth"
import { requireRole } from "../middleware/role"
import { Role } from "../model/user"
import { createOrdersAccessories } from "../controller/ordersAccessoriesController"

const router = Router()

router.post("/createOrders",  authenticate , requireRole([Role.USER]) ,createOrdersAccessories)

export default router