
import mongoose from "mongoose";

const SalarySchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", required: true },
  month: { type: String, required: true },
  baseSalary: { type: Number, required: true },
  allowances: { type: Number, default: 0 },
  deductions: { type: Number, default: 0 },
  netSalary: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
  paymentDate: { type: Date },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model("Salary", SalarySchema);
