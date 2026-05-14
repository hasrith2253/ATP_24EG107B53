/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 36, 30, 38, 35, 29, 37]; // Hasrith's city temperatures

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */

//  1. filter() temperatures above 35 in Hasrith's city
const temperatures =[32,36,30,38,35,29,37];
let temp=temperatures.filter((ele)=> ele>35);
console.log("Hasrith's temperatures above 35°C:",temp);   // output [40,38,42]

// 2. map() to convert Hasrith's temperatures from Celsius → Fahrenheit
const fahrenheit_temp=temperatures.map(temp=> (temp*9/5)+32); 
console.log("Hasrith's temperatures in Fahrenheit:", fahrenheit_temp)

//  3. reduce() to calculate average temperature (Hasrith's city)
const avg_temp=temperatures.reduce((acc,ele)=>acc+ele,0)/temperatures.length;
console.log("Hasrith's average temperature:", avg_temp.toFixed(2));

// 4. find() first temperature above 35 in Hasrith's data
const above40=temperatures.find(ele=> ele>35)
console.log("Hasrith's first temperature above 35°C:", above40);

// 5. findIndex() of temperature 28
const index=temperatures.findIndex(ele=> ele==28)
console.log("Index of 28 is:",index);


