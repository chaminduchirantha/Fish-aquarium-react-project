import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { createOrders, getAllFishOrders, updateOrderStatus} from "../controller/ordersFishController";

const router = Router()

router.post("/createOrders",  authenticate , requireRole([Role.USER]) ,createOrders)
router.get("/allOrders" , authenticate ,requireRole([Role.ADMIN]), getAllFishOrders)
router.put("/updateStatus/:id",authenticate,requireRole([Role.ADMIN]),updateOrderStatus);



export default router