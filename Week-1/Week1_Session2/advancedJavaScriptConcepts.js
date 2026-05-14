
 // BASIC OPERATIONS ON OBJECTS - Hasrith's Profile
   let person ={  // Hasrith's object with personal details
    name:"Hasrith Rao",
    age:22
   }
// adding a new property
person.city="Bangalore";
// updating a property 
person.name="Hasrith Rao";
// deleting a property 
  delete person.age;
console.log("Hasrith's Profile:", person);
// Hasrith's test scores for filtering
let test=[92,75,88,72,85];
// filter operation to get high scores (Hasrith's performance)
let r=test.filter((element)=> element>80);  // arrow function
console.log("Hasrith's High Scores (>80):", r);
// get element 40 and 80
let k=test.filter(element=> element>40 && element<80); 
console.log(k);

// Get scores betto add bonus points to Hasrith's scores
let v=test.map(element=>element+5);
console.log("Hasrith's Scores with Bonus (+5):", v);
let l=test.map((element)=> element>30);  // if we select the ele using map we get bool array of ele 
console.log(l);

const b=test.map(element=>{ // we can use bunch of lines if we have more than one condition
    if(element<50){
        return element+10;
    } else{
        return element-20;
    }
})
console.log(b);
// reduce it returns into a single values
// it takes always two parameter in map and filter the second parameter is optional
// first parameter is accumulator and second one is element
// SUM OF ELEMENTS USING REDUCE 
const sum=test.reduce((accumulator,element)=>accumulator+element)
/*                        90         45          135
                          135        -23          112
                          112       67           179
                          179       73           252
                          sum = 252 
                          */
console.log(sum);

// wap to get max ele in array using map
let max=test.reduce((accumulator,element)=> {
    if(accumulator>element){
        return accumulator
    }
    else 
    return element;
})
console.log(max);
// wap to get min ele in array using map
let min=test.reduce((accumulator,element)=> {
    if(accumulator<element){
        return accumulator
    }
    else 
    return element;
})
console.log(min); 
// other methode 
let min_ele=test.reduce((acc,element)=> acc<element ?acc: element)
console.log(min_ele)

// other methode 
let max_ele=test.reduce((acc,element)=> acc>element ?acc: element)
console.log(max_ele)

// Search 
const ele =test.find(element=> element==90)
console.log(ele);
// find Index
const elem =test.findIndex(element=> element==90)
console.log(elem); // it returns the index of a an ele
// Sort ele 


let newArray=test.sort()
console.log("new array is",newArray);


let data=[10,9,7,11]                 /* the code prints 10,11,7,9
                                         bcs it is 10 as first number it takes bits wise or lexical level comparison*/
let newArray1=data.sort()
console.log("new array is",newArray1);


// sort () 
let dat=[9,10,7,11]
let new1=dat.sort((a,b)=>a-b)    // ascending ord =a-b desc order is b-a
console.log("new array is ",new1);
console.log("data is ",dat);



const studentss= [
    { id:1, name:"Ravi",marks:78},
    { id:2, name:"Kiran",marks:77},
    { id:3, name:"virat",marks:89}

];

let sumofMarks=studentss.reduce((acc,stdObj)=> acc+stdObj.marks,0)
console.log(sumofMarks);





// error handling 
 // console.log(mp);   // Reference errop: mp is not defined
 console.log("first")
 try{
 console.log(vi)
 }
 catch(err){
    console.log(err.message);  // it tells the what typ of the err or explains the err
 }
 console.log("second");

// Modules 
/* We can make the code as modular and modules can share data other modules */


 

 
 






  


