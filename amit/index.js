//1
const add = (num1) => {
  return (num2) => num1 + num2;
};

console.log("add =", add(3)(4));

// 2
const mul = (num) => {
  return (num2) => num * num2;
};

const store = mul(3)(4);
console.log("store=", store);

//3
function calculateMoney(age, retierAge, wage, percentage) {
  const yearsUntilRetierment = retierAge - age;
  const savedPercentageofWage = (wage * percentage) / 100;
  const perYearIncome = savedPercentageofWage * 12;
  const moneySavings = perYearIncome * yearsUntilRetierment;

  if (age > 65) {
    console.log("You are already retired!");
  } else {
    return moneySavings;
  }
}

const savedMoney = calculateMoney(40, 65, 2000, 5);
console.log("savedMoney =", savedMoney);
