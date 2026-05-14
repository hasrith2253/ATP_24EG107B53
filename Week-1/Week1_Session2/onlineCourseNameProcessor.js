
/* Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["JavaScript", "React", "Node", "MongoDB", "Express"]; // Hasrith's learning stack


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node" */
const courses = ["JavaScript", "React", "Node", "MongoDB", "Express"];

 // 1. filter() courses with name length > 5 (from Hasrith's stack)
let length=courses.filter((ele) =>ele.length>5)
console.log("Hasrith's longer course names (>5 chars):", length);

//  2. map() to convert Hasrith's course names to uppercase
let uppercase = courses.map((ele)=> ele.toUpperCase())
console.log("Hasrith's Courses (Uppercase):", uppercase);



// 4.  find() the course "React" from Hasrith's list
let find=courses.find((ele)=>ele=="React");
console.log("Hasrith's React course found:", find)

//  5. findIndex() of "Node" in Hasrith's courses
let find_index=courses.findIndex((ele)=>ele=='Node');
console.log("Index of Node in Hasrith's learning path:", find_index);



