const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let returnStr = [];
  let additionStr = [];

  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionStr.push(addition + '');
  }
  additionStr = additionStr.join(additionSeparator);

  for (let i = 1; i <= repeatTimes; i++) {
    returnStr.push(str + '' + additionStr);
  }
  returnStr = returnStr.join(separator);
  return returnStr;
}

module.exports = {
  repeater
};
