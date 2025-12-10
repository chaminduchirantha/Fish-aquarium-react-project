import { Router } from "express";
import { generateOrderReport } from "../controller/pdfOrderFishReportController";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../model/user";

const router = Router()

router.get("/pdf", generateOrderReport);

export default router