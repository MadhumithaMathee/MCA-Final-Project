
import React, { useEffect, useState } from "react";
import axios from "axios";

const SalaryDashboard = () => {
  const [salaries, setSalaries] = useState([]);

  const fetchSalaries = async () => {
    const res = await axios.get("/api/salaries");
    setSalaries(res.data);
  };

  const markPaid = async (id) => {
    await axios.put(`/api/salaries/mark-paid/${id}`);
    fetchSalaries();
  };

  useEffect(() => {
    fetchSalaries();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Salary Management</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Staff</th>
            <th>Month</th>
            <th>Base</th>
            <th>Allowances</th>
            <th>Deductions</th>
            <th>Net</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary) => (
            <tr key={salary._id}>
              <td>{salary.staffId?.name}</td>
              <td>{salary.month}</td>
              <td>{salary.baseSalary}</td>
              <td>{salary.allowances}</td>
              <td>{salary.deductions}</td>
              <td>{salary.netSalary}</td>
              <td>{salary.status}</td>
              <td>
                {salary.status === "Pending" && (
                  <button onClick={() => markPaid(salary._id)} className="bg-green-500 text-white px-2 py-1 rounded">
                    Mark as Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryDashboard;
