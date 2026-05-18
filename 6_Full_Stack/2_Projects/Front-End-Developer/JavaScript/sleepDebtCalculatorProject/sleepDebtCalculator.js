// function to get number depending on day
const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday' :
    return 7.5;
    case 'tuesday' :
    return 7;
    case 'wednesday' :
    return 6.5;
    case 'thursday' :
    return 7.5;
    case 'friday' :
    return 5;
    case 'saturday' :
    return 9;
    case 'sunday' :
    return 6.5;
    default:
    return 'Invalid day. Try Again.';
  }
}

/* testing the function
console.log(getSleepHours('saturday')) */

// Get the total sleep hours that you actually slept
const getActualSleepHours = () => {
  /* Task 5 instructions followed
  let sum = 0;
  sum += getSleepHours('monday');
  sum += getSleepHours('tuesday');
  sum += getSleepHours('wednesday');
  sum += getSleepHours('thursday');
  sum += getSleepHours('friday');
  sum += getSleepHours('saturday');
  sum += getSleepHours('sunday');
  return sum; */
  // Task 12 rewriting to skip getSleepHours() 
  return 7.5 + 7 + 6.5 + 7.5 + 5 + 9 + 6.5
}

// Get the ideal sleep hours that you prefer
const getIdealSleepHours = (idealHours = 7) => {
  /* Task 6 instructions followed
  idealHours = 7 */
  return idealHours * 7;
}

/* testing both functions
console.log(getActualSleepHours())
console.log(getIdealSleepHours()) */

//Calculate the sleep debt, if any.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('User got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`User got more sleep than needed. Sleep is over by: ${actualSleepHours - idealSleepHours} hour/s.`);
  } else {
    console.log(`User should get some rest. Sleep is under by: ${Math.abs(actualSleepHours - idealSleepHours)} hour/s.`);
  }
}

// calling function to calculate sleep debt
calculateSleepDebt()