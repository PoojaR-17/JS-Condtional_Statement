// Problem 1: FizzBuzz
// Write a function fizzBuzz that takes a number as input. For multiples of 3, return "Fizz"; 
// for multiples of 5, return "Buzz"; for multiples of both 3 and 5,
// return "FizzBuzz"; otherwise, return the number.


function fizzBuzz(num){
    if(num%3==0 && num%5 == 0){
        console.log("fizzzzBuzzz")
    }
    else if(num%3==0){
        console.log("fizzz")
    }
    else if(num%5==0){
        console.log("Buzz")
    }
    else{
        console.log(num)
    }
}
fizzBuzz(1);
fizzBuzz(0);
fizzBuzz(6);
fizzBuzz(15);

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    else if (num % 3 === 0) return "Fizz";
    else if (num % 5 === 0) return "Buzz";
    else return num;
}
console.log(fizzBuzz(15)); 
console.log(fizzBuzz(3));  
console.log(fizzBuzz(5));  
console.log(fizzBuzz(7)); 


// Problem 2: Determine the Largest of Three Numbers
// Write a function largestOfThree that takes three numbers as input and returns the largest.

function largestOfThree(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > c) return b;
    else return c;
}
console.log(largestOfThree(3, 7, 5));  
console.log(largestOfThree(10, 15, 8)); 

// Problem 3: Grade Calculator
// Write a function calculateGrade that takes a score (0-100) and returns the corresponding grade:

// A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).

function calculateGrade(score){
    if(score >= 90) return "A";
    else if(score >= 80) return "B";
    else if(score >= 70) return "C";
    else if(score >= 60) return "D";
    else if(score < 60) return "F";
}
console.log(calculateGrade(99));
console.log(calculateGrade(55));
console.log(calculateGrade(89));
console.log(calculateGrade(35));

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's weekend!");
        break;
    default:
        console.log("Midweek days.");
}

let age = 17;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);


function largestOfThree(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > c) return b;
    else return c;
}
console.log(largestOfThree(3, 7, 5));  // Output: 7
console.log(largestOfThree(10, 15, 8)); // Output: 15


function authenticate(username, password) {
    if (username === "admin") {
        if (password === "1234") return "Login Successful";
        else return "Invalid Password";
    } else {
        return "Invalid Username";
    }
}
console.log(authenticate("admin", "1234")); // Output: "Login Successful"
console.log(authenticate("admin", "wrong")); // Output: "Invalid Password"
console.log(authenticate("user", "1234"));   // Output: "Invalid Username"
