const reverseStr = require('./math-module.js');
const yellStr = require('./math-module.js');
const firstLet = require('./math-module.js');

const sum = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const square = (num) => num * num;
let revStr = reverseStr;
let yelling = yellStr;
let firLetter = firstLet;
console.log(revStr, yelling, firLetter);





module.exports = {
  sum,
  multiply,
  divide,
  square
}
