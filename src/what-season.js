const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (!date) return 'Unable to determine the time of year!';
    if (date.toString() === (new Date()).toString() || !date.getTime) throw new Error('Invalid date!');

    
    let month = date.getMonth() + 1
    
    
    if (month > 2 && month <= 5) return 'spring'
    if (month > 5 && month <= 8) return 'summer'
    if (month > 8 && month <= 11) return 'autumn'
    if (month > 11 && month <= 12 || month > 0  && month <= 2) return 'winter'
    
    console.log(date);
    

  } catch (error) {
    console.log(error);
    return error
  } 
 
}

const springDate = new Date(2020, 5, 30)
// console.log(getSeason({
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// }));

module.exports = {
  getSeason
};
