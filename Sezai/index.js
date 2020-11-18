//1. 

function add(num1) {
    return function addSecond(num2) {
      return num1 + num2;
    };
  }
  
  console.log(add(3)(4));


  //2.
  const multiply = function firstNum(num1){
    return function secondNum(num2) {
      return num1 * num2;
    };
  };
  
  console.log(multiply(3)(3));


  //3. 
  function calculateMoney(age, retirementAge, monthlyWage, percentSaved) {
    if (age >= retirementAge) {
      console.log(`You already retired!`);
    } else {
      let yearsRemain= retirementAge - age;
      let amount = monthlyWage * 12 * yearsRemain;
      let percent = percentSaved / 100;
      let result = amount * percent;
      return result;
    }
  }
  console.log(calculateMoney(40, 65, 2000, 5));
  //My approach with a lifelong Hartz4 ;D
  console.log(calculateMoney(37, 65, 450, 10));