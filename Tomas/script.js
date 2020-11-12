let log = console.log;

// Write a function add that uses a closure that performs addition on arguments in two separate function calls
function add(a) {
    return function (b) {
        return a + b
    }
    
}
console.log(add(5)(3))


// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called
let multiplier = a => b => a * b
log('multiplier -->', multiplier(4)(4))

// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:

// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
const countPension = (function (age,retireAge,wage,savedInPer) {
    if(age >= retireAge) {
        return 'You are already retired';
    }
    else {
      return  (retireAge - age) * 12 * wage * savedInPer / 100
}
})(40,65,2000,5)
log('pension -->', countPension) 

// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000
