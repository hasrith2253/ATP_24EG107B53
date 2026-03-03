/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */

const marks = [78, 92, 35, 88, 40, 67];

//1.
const mrk= marks.filter(t=>t>=40);
console.log(mrk)

//2.
const grace= marks.map(t=>t+5);
console.log(grace)

//3.
const high = marks.reduce((acc,num)=>{
    if(num>acc){
        return num;
    }
    else{
        return acc;
    }
});
console.log(high);

//4.
const below40 = marks.find(t=>t<40);
console.log(below40)

//5.

const idx = marks.findIndex(t=>t==92);
console.log(idx)
