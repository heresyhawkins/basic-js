const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const returnArr = [];
  let count = 1;

  for (let i = 0; i < names.length; i++) {
    if (returnArr.includes(names[i])) {
      count = 1;
      let newFileName = `${names[i]}(${count})`;

      while (returnArr.includes(newFileName)) {
        count++;
        newFileName = `${names[i]}(${count})`;
      }

      returnArr.push(newFileName);
    } else {
      returnArr.push(names[i]);
    }
  }

  return returnArr;
}

module.exports = {
  renameFiles
};
