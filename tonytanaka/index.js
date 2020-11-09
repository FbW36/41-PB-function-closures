// 1
function add (num) {
    return (result) => result + num
}
console.log('result Sum ==>', add(3)(4))

// 2
function multiplier (num) {
    return (result) => result * num
}
console.log('result Mult ==>', multiplier(2)(10))

// 3
function retirement (actualAge, retirAge, wage, perc) {
    if (actualAge > retirAge) {
        return "You're already retired!"
    }
    remainingYears = retirAge - actualAge
    monthlySavings = wage * perc /100
    return totalSavings = monthlySavings * 12 * remainingYears 
}
console.log('How much money a person has saved until retires: ', retirement(40, 65, 2000, 5))