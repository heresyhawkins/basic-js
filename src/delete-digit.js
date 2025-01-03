const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrNum = n.toString().split("");
  const arrNumbers = [];

  for (let i = 0; i < arrNum.length; i++) {
    let tempStr = "";
    for (let j = 0; j < arrNum.length; j++) {
      if (i != j) {
        tempStr += arrNum[j];
      }
    }
    arrNumbers.push(tempStr);
  }

  return Math.max(...arrNumbers);
}

module.exports = {
  deleteDigit,
};
