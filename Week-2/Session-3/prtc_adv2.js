/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
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
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//1.
const filt = students.filter(t=>t.marks>=40);
console.log(filt)

//2.2. map() to add a grade field

const grd = students.map(m=>{
    if(m.marks>=90){
        return "A"
    }
    else if(m.marks>=75){
         return "B"
    }
    else if(m.marks>=60){
        return "C"
    }
    else{
        return "D"
    }
    
});
console.log(grd)

//3.reduce() to calculate average marks

const ttl = students.reduce(
    (acc,num)=> acc+num.marks,0);
const avg = ttl/students.length
console.log(ttl)

//4.find() the student who scored 92
const scr = students.find(m=>m.marks==92);
console.log(scr)

//5.findIndex() of student "Kiran"
const idx = students.findIndex(m=>m.id==3);
console.log(idx)