/* ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Hasrith Rao", marks: 98 },
  { id: 2, name: "Isha Gupta", marks: 95 },
  { id: 3, name: "Vikram Singh", marks: 85 },
  { id: 4, name: "Priya Sharma", marks: 88 },
  { id: 5, name: "Neha Patel", marks: 92 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
   */


   const students = [
  { id: 1, name: "Hasrith Rao", marks: 98 },
  { id: 2, name: "Isha Gupta", marks: 95 },
  { id: 3, name: "Vikram Singh", marks: 85 },
  { id: 4, name: "Priya Sharma", marks: 88 },
  { id: 5, name: "Neha Patel", marks: 92 }
];


// 1. filter() students who passed (marks ≥ 40) - Hasrith's class all passed!

let passed_stud=students.filter((ele)=>ele.marks>=40)
console.log("Students who passed (marks ≥ 40) - Hasrith's class:", passed_stud);

/* 2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D  */
let studentsWithGrade = students.map(student => {
  let grade;

  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return {
    id: student.id,
    name: student.name,
    marks: student.marks,
    grade: grade
  };
});
console.log("Students with Grades (Hasrith's Class Performance):", studentsWithGrade);

 // 3. reduce() to calculate average marks (Hasrith's class average)

 const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Hasrith's Class Average Marks:", averageMarks.toFixed(2));

 // 4.find() the student who scored highest (98 - Hasrith)
    let det_of_student=students.find(ele=>ele.marks==98)
    console.log("Highest scorer in Hasrith's class:", det_of_student); 

    // 5. findIndex() of student "Hasrith Rao"
     let indexof_key=students.findIndex((ele=>ele.name=="Hasrith Rao"))
    console.log("Hasrith's position in the class:", indexof_key);

