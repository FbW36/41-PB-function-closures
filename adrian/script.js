//1
function add(a) {
  return (b) => {
    return a + b;
  };
}
let add5 = add(5);
// console.log(add5(10));
// console.log(add(3)(4));

//2
function multiplier(a) {
  return (b) => a * b;
}
let multiplyBy2 = multiplier(2);
let multiplyBy3 = multiplier(3);

// console.log(multiplyBy2(5));
// console.log(multiplyBy3(5));

//3

(function calculateMoney(currAge, retirAge, monthWage, perSavedMonth) {
  let monthsLeft = (retirAge - currAge) * 12;
  let savedMonthly = (monthWage / 100) * perSavedMonth;
  let totalSaved = monthsLeft * savedMonthly;

  if (retirAge <= currAge) return "You're already retired";

  return totalSaved;
})(40, 65, 2000, 5);
