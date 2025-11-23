import { Router } from "express";
import { createFish, deleteFish, getAll, updateFish } from "../controller/fishController";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { upload } from "../middleware/upload";

const router = Router();

router.post("/createfish",  authenticate , requireRole([Role.ADMIN]) , upload.single("image"),createFish)
router.get("/all" , authenticate ,requireRole([Role.ADMIN , Role.USER]) , getAll)
router.put("/updateFish", authenticate , requireRole([Role.ADMIN]) , updateFish)
router.delete("/deleteFish", authenticate , requireRole([Role.ADMIN]),deleteFish)

export default router