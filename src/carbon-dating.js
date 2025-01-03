const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  const N = +sampleActivity;
  const N0 = MODERN_ACTIVITY;
  let elapsedTime;

  if (!(N) || typeof sampleActivity !== 'string') {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  elapsedTime = Math.ceil(Math.log(N0 / N) / k);

  return elapsedTime > 0 ? elapsedTime : false;
}

module.exports = {
  dateSample
};
