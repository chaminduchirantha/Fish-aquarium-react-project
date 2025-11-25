import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";
import { creaetFeedback } from "../controller/feedbackController";

const router = Router()

router.post("/create",  authenticate , requireRole([Role.USER]) , creaetFeedback)

export default router
