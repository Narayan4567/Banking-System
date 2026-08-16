import { Router } from "express";
import { getAllAccounts, depositAmount, withdrawAmount } from "../controllers/accountController";

const router = Router();

router.get("/", getAllAccounts);
router.post("/deposit", depositAmount);
router.post("/withdraw", withdrawAmount);

export default router;
