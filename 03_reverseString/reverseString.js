const reverseString = function(str) {
  let newStr = String(str);
  let reversedStr = newStr.split('').reverse().join('');

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
