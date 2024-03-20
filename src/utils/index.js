/**
 * A collection of utility functions.
 *
 * @module Utils
 */

/**
 * Converts a Date object to a string representation of the date.
 *
 * @memberof module:Utils
 * @example
 *   DateToString(new Date()); // '2021-01-01'
 *
 * @param {Date} date - The Date object to convert.
 * @returns {string} The string representation of the date.
 */
function DateToString(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Converts a string representation of the date to a Date object.
 *
 * @memberof module:Utils
 * @example
 *   StringToDate('2021-01-01'); // Date object
 *
 * @param {string} string - The string representation of the date.
 * @returns {Date} The Date object.
 */
function StringToDate(string) {
  return new Date(string);
}

/**
 * Returns the first element from an array.
 *
 * @memberof module:Utils
 * @example
 *   getFirstFromArray([1, 2, 3]); // 1
 *
 * @param {Array} array - The input array.
 * @returns {any} The first element of the array.
 */
function getFirstFromArray(array) {
  return array[0];
}

export { DateToString, StringToDate, getFirstFromArray };
