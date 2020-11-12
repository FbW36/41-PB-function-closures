//1.  Addition
// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
//add(3)(4);
// returns 7

function createAddition(y) {
  return function (x) {
    return x + y;
  };
}

let addition3 = createAddition(3);

console.log(addition3(4));

/**2. Multiply
Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called. */

function multiplier(y) {
  return (x) => {
    return x * y;
  };
}

let multiplication = multiplier;

console.log(multiplication(5)(4));

/**3. Calculate Money Saved till Pension Day!
Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:

The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.

Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */

let data = {
  age: 45,
  retirementAge: 67,
  monthlyWage: 1500,
  saving: 7,
};

function savings(data) {
  if (data.age < data.retirementAge) {
    let sum = (data.retirementAge - data.age) * 12 * data.monthlyWage;
    let savings = (sum * data.saving) / 100;
    return savings;
  } else {
    return "You're already retired!";
  }
}

console.log(savings(data));
