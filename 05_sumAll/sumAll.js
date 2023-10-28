const sumAll = function(firstNumber, secondNumber) {
  let result = 0;

  if (firstNumber > secondNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber]
  } else if (firstNumber < 0) {
      return "ERROR";
  } else if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    return "ERROR";
  } 
  
  for (let i = firstNumber; i <= secondNumber; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
