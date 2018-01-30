// reference node's fileSystem module
let fs = require('fs');

// print food title
console.log('FOOD');

// read food file
let food = fs.readFileSync('food.txt', 'utf-8');

// display food list
console.log(food);

// print drinks title
console.log('DRINKS');

// read the drinks file
let drinks = fs.readFileSync('drinks.txt', 'utf-8');

// display drink list
console.log(drinks);