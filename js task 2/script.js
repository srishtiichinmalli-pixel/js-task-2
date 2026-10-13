// JavaScript Practice Questions

console.log("===== QUESTIONS 1-6: VARIABLES =====");

// Q1: Reassign a var variable
var q1 = 10;
q1 = 20;
console.log("Q1:", q1);

// Q2: Declare the same var variable again
var q2 = 30;
var q2 = 50;
console.log("Q2:", q2);

// Q3: Reassign a let variable
let q3 = 100;
q3 = 200;
console.log("Q3:", q3);

// Q4: Declare a const variable
const q4 = 25;
console.log("Q4:", q4);

// Q5: Use var, let, and const
var q5a = 10;
let q5b = 20;
const q5c = 30;
console.log("Q5:", q5a, q5b, q5c);

// Q6: Store name, age, and city
var name = "purvi";
let age = 23;
const city = "kalaburgi";
console.log("Q6:", name, age, city);


console.log("===== QUESTIONS 7-12: INPUT AND DATA TYPES =====");

// Q7: Get the user's name
let userName = prompt("Q7: Enter your name");
console.log("Q7:", userName);
alert("Hello " + userName);

// Q8: Get the user's age
let userAge = prompt("Q8: Enter your age");
console.log("Q8:", userAge);
console.log("Q8 data type:", typeof userAge);

// Q9: Confirm whether the user likes JavaScript
let answer = confirm("Q9: Do you like JavaScript?");
console.log("Q9:", answer);

// Q10: Check data types
let textValue = "Hello";
let numberValue = 100;
let booleanValue = true;
let emptyValue;

console.log("Q10 text:", typeof textValue);
console.log("Q10 number:", typeof numberValue);
console.log("Q10 boolean:", typeof booleanValue);
console.log("Q10 undefined:", typeof emptyValue);

// Q11: Create an array of fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Q11:", fruits);
console.log("Q11 first:", fruits[0]);
console.log("Q11 last:", fruits[fruits.length - 1]);

// Q12: Create an object
let items = {
    fruits: ["Apple", "Mango", "Orange"],
    electronics: ["Mobile", "Laptop", "Tablet"],
    vegetable: "Carrot"
};

console.log("Q12 fruits:", items.fruits);
console.log("Q12 electronics:", items.electronics);
console.log("Q12 vegetable:", items.vegetable);


console.log("===== QUESTIONS 13-18: OPERATORS =====");

// Q13: Arithmetic operations
let a13 = 15;
let b13 = 4;

console.log("Q13 addition:", a13 + b13);
console.log("Q13 subtraction:", a13 - b13);
console.log("Q13 multiplication:", a13 * b13);
console.log("Q13 division:", a13 / b13);

// Q14: Modulus operator
console.log("Q14:", 27 % 5);

// Q15: Exponentiation operator
console.log("Q15:", 3 ** 4);

// Q16: Pre-increment
let q16 = 10;
console.log("Q16:", ++q16);

// Q17: Pre-decrement
let q17 = 10;
console.log("Q17:", --q17);

// Q18: Post-increment
let x18 = 5;
let y18 = x18++;

console.log("Q18 x:", x18);
console.log("Q18 y:", y18);


console.log("===== QUESTIONS 19-30: INCREMENT AND DECREMENT =====");

// Q19: Post-increment
let q19 = 4;
console.log("Q19:", q19++);
console.log("Q19 final:", q19);

// Q20: Pre-increment
let q20 = 4;
console.log("Q20:", ++q20);
console.log("Q20 final:", q20);

// Q21: Post-increment with two variables
let a21 = 8;
let b21 = a21++;

console.log("Q21 a:", a21);
console.log("Q21 b:", b21);

// Q22: Pre-increment with two variables
let a22 = 8;
let b22 = ++a22;

console.log("Q22 a:", a22);
console.log("Q22 b:", b22);

// Q23: Post-decrement
let a23 = 6;
let b23 = a23--;

console.log("Q23 a:", a23);
console.log("Q23 b:", b23);

// Q24: Pre-decrement
let a24 = 6;
let b24 = --a24;

console.log("Q24 a:", a24);
console.log("Q24 b:", b24);

// Q25: Increment twice
let q25 = 2;
q25++;
q25++;

console.log("Q25:", q25);

// Q26: Decrement twice
let q26 = 10;
--q26;
--q26;

console.log("Q26:", q26);

// Q27: Post-increment assignment
let q27 = 3;
q27 = q27++;

console.log("Q27:", q27);

// Q28: Post-increment
let a28 = 4;
let b28 = a28++;

console.log("Q28 a:", a28);
console.log("Q28 b:", b28);

// Q29: Pre-decrement
let a29 = 5;
let b29 = --a29;

console.log("Q29 a:", a29);
console.log("Q29 b:", b29);

// Q30: Post-increment and pre-increment
let a30 = 5;
let b30 = a30++;
let c30 = ++a30;

console.log("Q30 a:", a30);
console.log("Q30 b:", b30);
console.log("Q30 c:", c30);

console.log("===== ALL QUESTIONS COMPLETED =====");