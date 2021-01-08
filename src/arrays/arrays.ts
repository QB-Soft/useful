/**
 * Randomly selects an element from an Array. An empty array or undefined parameters will return undefined
 * @param {array} array Array to select value from
 * @returns {any} Random value
 */

export const selectRandomlyFromArray = (array: any[]): any => {
    if (!array) return undefined;
    return array[Math.floor(Math.random() * array.length)];
}