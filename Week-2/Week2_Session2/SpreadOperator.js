 /* Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                                               Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                        
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
💡 Exercise 2: Update User Object
                        
                        Goal: Learn object cloning & adding new property
                        
                        You are given:
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };                      
                        Tasks
                        
                              -> Create a new object updatedUser
                              
                              -> Copy all properties from user
                              
                              -> Add a new property age: 25
                              
                              -> Print both objects
                        
                        
                        
                              { name: "Ravi", city: "Hyderabad" }
                              { name: "Ravi", city: "Hyderabad", age: 25 }
                        
                       */ 


 let fruits = ["apple", "banana"];
 let morefruits=[...fruits,"orange"];
console.log(fruits)
console.log(morefruits);


let user = {
         name: "Ravi",
        city: "Hyderabad"
       };  
let updatedUser={...user,age:25};
console.log(user);
console.log(updatedUser);