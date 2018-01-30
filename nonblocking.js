// reference fileSystem module
let fs = require('fs');

// food title
console.log('FOOD');

// read food file & display asynchronously
fs.readFile('food.txt', 'utf-8', function(err, food) {
    if (err) {
        console.log('Invalid Food File');
    }
    else {
        console.log(food);
    }
});

// drinks title
console.log('DRINKS');

// read & display drinks asynchronously
fs.readFile('drinks.txt', 'utf-8', function(err, drinks) {
   console.log(drinks);
});