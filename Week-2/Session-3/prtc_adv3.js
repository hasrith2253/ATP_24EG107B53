
/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

// ===============================
// Employee Payroll Processor
// ===============================

// Test Data
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. Filter IT Department Employees
const itEmployees = employees.filter(emp => emp.department === "IT");

// 2. Add 10% Bonus (netSalary)
const employeesWithBonus = employees.map(emp => ({
  netSalary: emp.salary + emp.salary * 0.10
}));

// 3.Calculate Total Salary Payout
const totalSalaryPayout = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);

// 4. Find Employee with Salary 30000
const employee30000 = employees.find(emp => emp.salary === 30000);

// 5. Find Index of Employee "Neha"
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");








