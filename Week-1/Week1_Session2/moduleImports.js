/* Hasrith's module imports - importing data from module_1.js
import a from './module_1.js'
console.log("data is ", a);
console.log("Hasrith's name", a.person.name) 
*/

// importing by named export (Hasrith's method)
import {data, person} from  './module_1.js'
console.log("Hasrith's data:", {data, person});
