
import express from "express";
import {
  createSalary,
  getAllSalaries,
  getSalaryByStaffId,
  markAsPaid,
  deleteSalary
} from "../controllers/salaryController.js";

const router = express.Router();

router.post("/", createSalary);
router.get("/", getAllSalaries);
router.get("/:staffId", getSalaryByStaffId);
router.put("/mark-paid/:id", markAsPaid);
router.delete("/:id", deleteSalary);

export default router;
