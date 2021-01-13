/**
 * Iterates through an object and detects if it contains any falsy values. Currently only works for one level.
 * Does not currently account for boolean values that are intended to be there
 *
 * ```
 *  containsFalsyFields({ name: '' }) → true
 *  containsFalsyFields({ name: 'John' }) → false
 *  containsFalsyFields({}) → true
 *  containsFalsyFields(undefined) → true
 *  containsFalsyFields(null) → true
 * ```
 * @param obj
 */
export const containsFalsyFields = (obj: object) => {
    if (!obj) return true;
    if (JSON.stringify(obj) === '{}') return true;

    for (const value of Object.values(obj)) {
        if (!!!value) { return true; }
    }

    return false;
}

/**
 * Iterates through an object and detects if it contains an empty string. Currently only works for one level.
 * Useful for checking form values
 *
 * ```
 *  containsFalsyFields({ name: '' }) → true
 *  containsFalsyFields({ name: 'John' }) → false
 *  containsFalsyFields({ name: 'John', age: 25 }) → false
 *  containsFalsyFields({}) → true
 *  containsFalsyFields(undefined) → true
 *  containsFalsyFields(null) → true
 * ```
 * @param obj
 */
export const containsEmptyString = (obj: object) => {
    if (!obj) return true;
    if (JSON.stringify(obj) === '{}') return true;

    for (const value of Object.values(obj)) {
        if (value === '') { return true; }
    }

    return false;
}
