/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [98, 92, 88, 95, 87, 93]; // Hasrith's Computer Science scores

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */
const marks = [98, 92, 88, 95, 87, 93]; // Hasrith's scores
// 1. filter() marks ≥ 40 (pass marks) - Hasrith's passing scores
let marks1=marks.filter((ele) => ele>=40)
console.log("Hasrith's Passing Marks (≥40):",marks1);

// 2. map() to add 5 grace marks to each student (Hasrith's updated marks)

let grace_marks =marks.map(ele=>ele+5)
console.log("Hasrith's Updated marks with grace:",grace_marks);

// 3. reduce() to find highest mark (Hasrith's best score)

let max_marks=marks.reduce((acc,element)=> acc>element ?acc: element)
console.log("Hasrith's Maximum Score:",max_marks);

// 4. find() first mark below 40
let first_mark =marks.find(ele=>ele>40)
console.log("Hasrith's First mark (checking above 40):",first_mark);

// 5. findIndex() of mark 92 in Hasrith's scores

let index=marks.findIndex(ele=>ele==92)
console.log("Index of 92 in Hasrith's marks:",index);
    


