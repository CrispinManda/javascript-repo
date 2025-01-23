// // variables

// var x = 11;
// console.log(x);

// // constants
// const y = 10;
// console.log(y);

// console.log(typeof y);

// let username = 'John';
// console.log(username);
// console.log(typeof username);

// const result = 10 > 5;
// console.log(result);

// console.log(typeof result);
// let cars = ['volvo', 'toyota', 'bMW'];

// console.log(typeof(cars));
// console.log (cars[1]);
// console.log (cars[2]);
// console.log (cars);



// Get the display div
let displayDiv = document.getElementById('display');


function printToBrowser(content) {
    const para = document.createElement('p'); 
    para.textContent = content;              
    displayDiv.appendChild(para);           
}


var x = 11;
printToBrowser(`${x}`);



// constants
const y = 10;
printToBrowser(`${y}`);
console.log(y);
printToBrowser(typeof y);
console.log(typeof y);

let username = 'John';
printToBrowser(` username: ${username}`);
console.log(username);
console.log(typeof username);

const result = 10 > 5;
console.log(result);

console.log(typeof result);
let cars = ['volvo', 'toyota', 'bMW'];

console.log(typeof(cars));
console.log (cars[1]);
console.log (cars[2]);
console.log (cars);
