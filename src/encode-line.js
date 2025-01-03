const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrSymbols = str.split("");
  let retStr = "";

  for (let i = 0; i < arrSymbols.length; i++) {
    let count = 1;
    let currentSymbol = arrSymbols[i];
    for (let j = i + 1; j < arrSymbols.length; j++) {
      if (currentSymbol != arrSymbols[j]) {
        break;
      }
      count++;
      i = j;
    }
    count = count > 1 ? count : "";
    retStr += count + currentSymbol;
  }

  return retStr;
}

module.exports = {
  encodeLine,
};
