// Hasrith's test data for array operations
let data_of_ele=[42,65,28,89,56,73]
// filter - Find elements greater than 50 (Hasrith's high scores)
let a=data_of_ele.filter((k)=>k>50)
console.log("Hasrith's high scores (>50):",a);
// map - Add 10 bonus points to each score
let b=data_of_ele.map((v)=>v+10)
console.log("Hasrith's scores with bonus points (+10):",b);
// reduce - Calculate total score
const sum=data_of_ele.reduce((acc,val)=>acc+val,0)
console.log("Hasrith's total score:",sum);
// find - Look for score 89
const ele=data_of_ele.find((k)=>k==89)
console.log("Hasrith's score of 89 found:",ele);
// findindex - Find index of 65 in Hasrith's scores
const ind=data_of_ele.findIndex((k)=>k==65)
console.log("Index of Hasrith's score 65:",ind);
