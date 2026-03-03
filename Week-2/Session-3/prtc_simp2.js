const courses = ["javascript","react","node","mongodb","express"];
//1.
const crs = courses.filter(c=> c.length>5)
console.log(crs)
//2.
const uppcase = courses.map(conv=>conv.toUpperCase())
console.log(uppcase)
//3.
const join = courses.reduce((acc,word)=>acc+"|"+word)
console.log(join)

//4.
let fnd= courses.find(n=>n=="react")
console.log(fnd);
//5.
let ind=courses.findIndex((ele=>ele=="node"))
console.log(ind);
