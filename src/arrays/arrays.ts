/**
 * Randomly selects an element from a given array.
 *
 * ```
 *  selectRandomlyFromArray([1, 2, 3, 4]) → 4
 *  selectRandomlyFromArray(["string", 4, false, {}]) → "string"
 *  selectRandomlyFromArray([]) → undefined
 * ```
 */
export const selectRandomlyFromArray = (array: any[]): any => {
    if (!array) return undefined;
    return array[Math.floor(Math.random() * array.length)];
}