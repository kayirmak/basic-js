const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let stack = []
  const newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] === '--double-next') {
      if (i + 1 > newArr.length - 1) {
        console.log(i);
        newArr.splice(i, 1)
      }
      else {
        newArr.splice(i, 1, newArr[i + 1])
      }
    }

    if (newArr[i] === '--double-prev') {
      if (stack.length || i - 1 < 0) {
        newArr.splice(i, 1)
        i--
        stack.pop()
      }
      else {
        newArr.splice(i, 1, newArr[i - 1])
      }
    }

    if (newArr[i] === '--discard-next') {
      if (i > newArr.length - 1) {
        newArr.splice(i, 1)
      }
      else {
        let tmp = newArr.splice(i, 2)
        stack.push(tmp[0])
        i--
      }
    }

    if (newArr[i] === '--discard-prev') {
      if (stack.length || i - 1 < 0) {
        newArr.splice(i, 1)
        i--
      }
      else {
        newArr.splice(i - 1, 2)
      }
    }
  
  }
  return newArr
}

console.log(transform([1, 2, 3, '--double-next']));


module.exports = {
  transform
};
