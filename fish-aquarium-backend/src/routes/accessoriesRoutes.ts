import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { upload } from "../middleware/upload";
import { createAccessories, deleteAccessories, getAccessories, updateAccessories } from "../controller/accessoriesController";

const router = Router()

router.post("/createAccess",  authenticate , requireRole([Role.ADMIN]) , upload.single("image"),createAccessories)
router.get("/allAccess" , authenticate ,requireRole([Role.ADMIN , Role.USER]) , upload.single("image") , getAccessories)
router.put("/updateAccess/:id", authenticate , requireRole([Role.ADMIN]) , upload.single("image"), updateAccessories)
router.delete("/deleteAccess/:id", authenticate , requireRole([Role.ADMIN]),deleteAccessories)

export default router