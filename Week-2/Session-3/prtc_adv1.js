/* ASSIGNMENT 1:

You are building a shopping cart summary for an e-Commerce website.

Test Data :
const cart = [
  { id: 101, name: "Laptop",   price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse",    price: 800,   quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500,  quantity: 1, inStock: false },
  { id: 104, name: "Monitor",  price: 12000, quantity: 1, inStock: true }
];

Tasks:
1. Use filter() to get only inStock products
2. Use map() to create a new array with: { name, totalPrice }
3. Use reduce() to calculate grand total cart value
4. Use find() to get details of "Mouse"
5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop",   price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse",    price: 800,   quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500,  quantity: 1, inStock: false },
  { id: 104, name: "Monitor",  price: 12000, quantity: 1, inStock: true }
];


//1.
const inst = cart.filter(r => r.inStock == true);
console.log(inst);

//2.

const newarr = cart.map(product =>({  // here ({ is taken because js reads it as function body not as object literal.
  name:product.name,                    
  totalprice:product.price*product.quantity
}));
console.log(newarr)
//3.Use reduce() to calculate grand total cart value

const ttl = cart.reduce( // here acc is initially (zero) then later increments based on num
  (acc,num )=> acc + num.price*num.quantity, // here we are adding acc+num
  0                                    // acc==0 at initial

  
);
console.log("total cart value is ",ttl)

//4.Use find() to get details of "Mouse"
const det = cart.find(product=>product.id==102);
console.log(det)

//5.Use findIndex() to find the position of "Keyboard"
const pos = cart.findIndex(item=>item.name=="Keyboard");
console.log(pos)