// 1. Addition
// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
// add(3)(4);
// returns 7
const addNumbers = (num1) => {
  return (num2) => num1 + num2;
};
addNumbers(3)(4);
console.log(addNumbers(3)(4));

// 2. Multiply
// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
const mutiplier = (a) => {
  return (b) => a * b;
};
let multiplyBy2 = mutiplier(2);
let multiplyBy4 = mutiplier(4);
console.log(multiplyBy2(5));
console.log(multiplyBy4(7));

// 3. Calculate Money Saved till Pension Day!
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires.
function totalPension(cuAge, reAge, wage, percentage) {
  if (cuAge >= reAge) {
    return "You're already retired!";
  } else {
    let monthToRetired = (reAge - cuAge) * 12;
    let monthSaving = (wage * percentage) / 100;
    let totalSavings = monthToRetired * monthSaving;
    return totalSavings;
  }
}
console.log(totalPension(40, 65, 3000, 10));
