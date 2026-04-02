// assigned a random number from 0 to 1000 rounded down
let raceNumber = Math.floor(Math.random() * 1000);

// variable for early register
let earlyRegister = true;

// variable for age
let age = 18;

// change Values below to test
age = 18;
earlyRegister = true;

// adds 1000 to random raceNumber if both an adult and registered early
if (earlyRegister && age >= 18) {
  raceNumber += 1000;
}

// logs a message for race time with a race number depending on age and registration
if (earlyRegister && age > 18) {
  console.log(`You will race at 9:30 am with race number: ${raceNumber}.`);
} else if (!earlyRegister && age > 18) {
  console.log(`You will race at 11:00 am with race number: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 pm with race number: ${raceNumber}.`); 
}
  else {
  console.log(`See the registration desk for assistance.`); 
}