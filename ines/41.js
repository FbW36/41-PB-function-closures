// Did we learn closures ?!

//1
function add(x) {
  return function (y) {
    return x + y;
  };
}

let add3 = add(3);
console.log(add3(4));

//2
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

let multiply10 = multiply(10);
console.log(multiply10(4));

//3
function retirement(currentAge, retirementAge, wage, percentage) {
  if (currentAge >= retirementAge) {
    return "You are already retired";
  } else {
    let yearsRemain = retirementAge - currentAge;
    let savedPerMonth = wage * (percentage / 100);
    let savedPerYear = savedPerMonth * 12;
    let totalSaved = savedPerYear * yearsRemain;
    return totalSaved;
  }
}

console.log(retirement(40, 65, 2000, 5));
