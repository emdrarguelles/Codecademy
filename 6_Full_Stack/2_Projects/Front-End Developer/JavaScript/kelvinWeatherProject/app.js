// This is the current temperature in Kelvin
const kelvin = 293; 

// This converts Kelvin to Celcius by subtracting 273
const celsius = kelvin - 273;

// This converts Celcius to Fahrenheit rounded down
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/* Question: What’s 0 Kelvin in Fahrenheit? 
Answer: 0 Kelvin is -460 degrees Fahrenheit */

// This converts Celcius to Newton rounded down
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`);