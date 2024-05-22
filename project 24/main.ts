// Define variables
let apple = "apple";
let uppercaseApple = "Apple";
let ten = 10;
let twenty = 20;

//// test for equality and inequality with string

console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("\nIs appple is not equal to apple?");
console.log(apple != "apple");

// test using Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");


console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical  tests
// equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);

// greater than
console.log("\nIs ten is greater than zero");
console.log(ten > 0);

// less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

// greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to
console.log("\nIs twenty is less than or qual to 10");
console.log(twenty <= 10);