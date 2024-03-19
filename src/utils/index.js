/**
 * Converts a Date object to a string representation of the date.
 *
 * @example
 *   DateToString(new Date()); // '2021-01-01'
 *
 * @param {Date} date - The Date object to convert.
 * @returns {string} The string representation of the date.
 */
export function DateToString(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Converts a string representation of the date to a Date object.
 *
 * @example
 *   StringToDate('2021-01-01'); // Date object
 *
 * @param {string} string - The string representation of the date.
 * @returns {Date} The Date object.
 */
export function StringToDate(string) {
  return new Date(string);
}

/**
 * Returns the first element from an array.
 *
 * @example
 *   getFirstFromArray([1, 2, 3]); // 1
 *
 * @param {Array} array - The input array.
 * @returns {any} The first element of the array.
 */
export function getFirstFromArray(array) {
  return array[0];
}
