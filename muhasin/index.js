// 1. Addition

function add(num1) {
    return function addOtherr(num2) {
        return num1 + num2
    }
}
console.log("add ==>", add(3)(4)); // 7


// 2. Multiply

function multiplier(factor) {
    return number => number * factor
}
const timesTwo = multiplier(2)
console.log("timesTwo ==>", timesTwo(6));

// 3
(function money(currentAge, retirementAge, monthlyWage, percentage) {
    const yearsTosave = retirementAge - currentAge;
    const monthsToSave = yearsTosave * 12 // months;
    const monthlySaving = (monthlyWage * percentage) / 100;
    const totalSave = monthlySaving * monthsToSave
    console.log("totalSave ==>", totalSave);

})
(40, 65, 2000, 5)
// console.log("totalSave ==>", totalSave);