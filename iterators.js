/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

const logger = function (array) {
  array.forEach((member) => console.log(`myelement arry ${member}`));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * in for each
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

// const toCelsius = function (temperatures) {
//   temperatures.forEach((temp) => {
//     console.length(`the temperatures ${temperatures}`);
//   });
// };

const toCelsius = function (temperatures) {
  return temperatures.map((temp) => {
    return (temp - 32) * (5 / 9);
  });
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter((temp) => temp > threshhold);
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  const filterdtemperatur = hottestDays(temperatures, threshhold);
  console.log(filterdtemperatur);
  const temtsincelsius = toCelsius(filterdtemperatur);
  logger(temtsincelsius);
};

/* Uncomment the following lines to test your code... */

logger([1, 2, 3, 4, 5, 6, 7]);
console.log(toCelsius([212, 122])); // should be: [100, 50];
console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
