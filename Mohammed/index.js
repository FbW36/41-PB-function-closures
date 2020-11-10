/*
- Closure is simply inner function resides inside another  
  function.
- The inner function has access to all variables of its outer 
  function.
*/

// 1. Addition

function addition(n1)
{
    function add(n2)
    {
        return n1+n2;
    }
    return add;
}

let addOuterNo = new addition(5); // to the outer function
console.log(addOuterNo(3));  // to the inner function

// ===============================================

// 2. Multiplication

function multiply(callback)
{
    let no1 = 3;
    return callback(no1);
}

function multiplyMethod(no1)
{
    let no2 = 5;
    return no1*no2;
} 

console.log(multiply(multiplyMethod));

// =================================================

// 3.
// A self invoked function is the anonymous function

function moneySaved(callback)
{
    let currentAge = 40;
    let retiredAge = 65;
    let salary = 2000;
    let savingRatio = 0.05;
    
    let savingYears = retiredAge - currentAge; 
    
    return callback(savingYears, salary, savingRatio);
}

console.log(moneySaved(function(savingYears, salary, savingRatio)
{
    return 12*salary*savingYears*savingRatio;

}));
