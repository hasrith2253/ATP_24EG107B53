/* assignment 1 temp analysis

test data:
const temp=[32,35,28,40,38,30,42]:
task:
1.filter() temp above 35
2. map() to convert all temp from celsuis-> fahrenheit
3.reduce() to calculate avg temp
find() irst temp above 40
5. findIndex() of temp 


*/
 const temp=[32,35,28,40,38,30,42]

//1.
 const above35 = temp.filter(t => t > 35);
console.log("Temp above 35:", above35);

//2.
const conv= temp.map(t=>(t*9/5)+32);
console.log(conv)
//3.
const ttl = temp.reduce((acc,num)=>acc+num);
const avg = ttl/temp.length;
console.log(avg)
 
//4.
const Above40 = temp.find(t => t > 40);
console.log("First temp above 40:", Above40);

//5.

const i = temp.findIndex(t=>t==28)
console.log(i)