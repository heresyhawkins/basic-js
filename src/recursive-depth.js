const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let arrCounter = 1;

    arr.forEach((elem) => {
      if (Array.isArray(elem)) {
        let innerArrCounter = 1;
        innerArrCounter += this.calculateDepth(elem);
        arrCounter = innerArrCounter > arrCounter ? innerArrCounter : arrCounter;
      }
    });
  
    return arrCounter;
  }
}

module.exports = {
  DepthCalculator
};
