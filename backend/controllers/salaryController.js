
import Salary from "../models/Salary.js";

export const createSalary = async (req, res) => {
  try {
    const { staffId, month, baseSalary, allowances, deductions } = req.body;
    const netSalary = baseSalary + allowances - deductions;

    const salary = new Salary({ staffId, month, baseSalary, allowances, deductions, netSalary });
    await salary.save();
    res.status(201).json(salary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find().populate("staffId");
    res.status(200).json(salaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSalaryByStaffId = async (req, res) => {
  try {
    const salaries = await Salary.find({ staffId: req.params.staffId });
    res.status(200).json(salaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const markAsPaid = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndUpdate(
      req.params.id,
      { status: "Paid", paymentDate: new Date() },
      { new: true }
    );
    res.status(200).json(salary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSalary = async (req, res) => {
  try {
    await Salary.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Salary record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
