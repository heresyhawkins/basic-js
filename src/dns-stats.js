const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const returnObj = {};

  for (let i = 0; i < domains.length; i++) {
    const arrDomain = domains[i].split(".");
    let key = "";

    for (let j = arrDomain.length - 1; j >= 0; j--) {
      key += "." + arrDomain[j];
      returnObj[key] = returnObj[key] + 1 || 1;
    }
  }
  return returnObj;
}

module.exports = {
  getDNSStats,
};
