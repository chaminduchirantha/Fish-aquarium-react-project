import { Router } from "express"
import { authenticate } from "../middleware/auth"
import { requireRole } from "../middleware/role"
import { Role } from "../model/user"
import { createOrdersAccessories, getAllAccessoriesOrders } from "../controller/ordersAccessoriesController"

const router = Router()

router.post("/createOrders",  authenticate , requireRole([Role.USER]) ,createOrdersAccessories)
router.get("/allOrders" , authenticate ,requireRole([Role.ADMIN]), getAllAccessoriesOrders)

export default router