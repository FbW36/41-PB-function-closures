// 1. Addition

const add = (num) => {
    return function (a) {
        return num + a;
    }
}

console.log(add(3)(79));

// 2. Multiply

const multiplier = (num) => {
    return function (a) {
        return num * a;
    }
}

let caller = multiplier;

console.log(caller(5)(10));

// 3. Calculate Money Saved till Pension Day!

const user = {
    age: 40,
    retirementAge: 63,
    monthlyWage: 2100,
    monthlySavings: "10%"
}

const pensionCalculater = (age, retirementAge, monthlyWage, monthlySavings) => {
    let yearsToRetirement = retirementAge - age;
    let moneySaved = (((monthlyWage * monthlySavings) / 100) * 12) * yearsToRetirement;
    if (age > 63) {
        console.log("You are already retired!");
    } else {
        return moneySaved;
    }
}

console.log(`$${pensionCalculater(40, 63, 2100, 10)}`);