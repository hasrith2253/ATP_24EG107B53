
 /* Hasrith's Team Salary Data:
const employees = [
  { id: 201, name: "Hasrith Rao", salary: 120000, department: "IT" },  // Team Lead
  { id: 202, name: "Priya Sharma", salary: 95000, department: "IT" },  // Developer
  { id: 203, name: "Vikram Singh", salary: 90000, department: "IT" },  // Developer
  { id: 204, name: "Neha Patel", salary: 75000, department: "HR" }      // HR Manager
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
    */

const employees = [
  { id: 201, name: "Hasrith Rao", salary: 120000, department: "IT" },
  { id: 202, name: "Priya Sharma", salary: 95000, department: "IT" },
  { id: 203, name: "Vikram Singh", salary: 90000, department: "IT" },
  { id: 204, name: "Neha Patel", salary: 75000, department: "HR" }
];

// 1. filter() employees from IT department (Hasrith's direct reports)
let employee_1=employees.filter((ele)=>ele.department=="IT")
console.log("Hasrith's IT Team Members:",employee_1);

/*2 .map()  map() to add:
            netSalary = salary + 10% bonus */
let netSalary = employees.map(emp => ({
  id: emp.id,
  name: emp.name,
  salary: emp.salary,
  department: emp.department,
  netSalary: emp.salary * 1.10
}));
console.log("The net salary is =", netSalary);


// 3. reduce() to calculate total salary payout
let total_salary=employees.reduce((acc,employee) => acc+employee.salary,0);
console.log("The total salary is =",total_salary);


// 4. find() employee with salary 30000
 let sal=employees.find(ele=>ele.salary==75000)
 console.log("Employee with salary 75000:",sal);


 // 5. findIndex() of employee "Priya"
 let index=employees.findIndex(ele=>ele.name=="Priya Sharma")
 console.log("The index of Priya Sharma in Hasrith's team is=",index);

