// 1. Addition
// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
// add(3)(4);
// returns 7
function add(a) {
    return function addThem(b) {
        return a + b;
    }
}

console.log(add(3)(6));
// 2. Multiply
// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
const multiply = (num1) => {
    return function (num2) {
        return num1 * num2;
    }
}
console.log(multiply(3)(11));
// 3. Calculate Money Saved till Pension Day!
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
function retirement(age, wage, rent, percent) {
    if (age >= rent) {
        return `You are already retired.`
    } else {
        let restWorkMonths = (rent - age) * 12;
        let savingsPerMonth = wage/100 * percent;
        let possibleSaving = restWorkMonths * savingsPerMonth;
        return `This is how much money you can save until pension if you start now: ${possibleSaving}`
    }
}
console.log(retirement(31, 1500, 60, 10));
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.

// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000