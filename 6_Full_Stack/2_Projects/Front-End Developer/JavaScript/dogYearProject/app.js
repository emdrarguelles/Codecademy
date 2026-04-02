 // This is my age
let myAge = 35;

// This represents first 2 years of a dogs life
let earlyYears = 2;

/*
// This represents first 2 years of a dogs life in human years
earlyYears *= 10.5; */

// extra practice
earlyYears = earlyYears * 10.5;

// This represents the later years of a dog less early years
let laterYears = myAge - 2;

/*
// This represents the later years of a dogs life in human years
laterYears *= 4; */

// extra practice
laterYears = laterYears * 4;
 
/* Checking to see if answer is correct
console.log(earlyYears + laterYears); */
 
// This represent my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Will store my name in lower case
let myName = 'Ed Marcus'.toLowerCase();

// Will print out the interpolation using template literals
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.
`);

myAge += 1;
myAgeInDogYears += 4;

// Will print out the interpolation using template literals
console.log(`My name is ${myName}. Later this year I will be ${myAge} years old in human years, which will be ${myAgeInDogYears} years old in dog years.
`);

