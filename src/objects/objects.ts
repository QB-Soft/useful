/**
 * Iterates through an object and detects if it contains an empty string. Currently only works for one level.
 * Useful for checking form values
 *
 * ```
 *  containsEmptyString({ name: '' }) → true
 *  containsEmptyString({ name: 'John' }) → false
 *  containsEmptyString({ name: 'John', age: 25 }) → false
 *  containsEmptyString({}) → true
 *  containsEmptyString(undefined) → undefined
 *  containsEmptyString(null) → undefined
 * ```
 */
export const containsEmptyString = (obj: object) => {
    if (!obj) return undefined;
    if (JSON.stringify(obj) === '{}') return true;

    for (const value of Object.values(obj)) {
        if (value === '') { return true; }
    }

    return false;
}

/**
 * Merges 0 or more objects together.
 *
 * ```
 *  name = { name: 'John' };
 *  age = { age: 25 };
 *
 *  mergeObjects(name, age) → { name: 'John', age: 25 }
 *  mergeObjects() → {}
 *  mergeObjects(undefined) → {}
 *  mergeObjects(undefined, name, null, age) → { name: 'John', age: 25 }
 * ```
 */
export const mergeObjects = (...objs: object[]): object => {
    return objs.reduce((obj1, obj2) => { return Object.assign(obj1, obj2) }, {});
};

/**
 * Returns an object filtered by key substring.
 * Since this function works on a single level, if you want to filter a deeply nested object,
 * you'll have to specify the object directly.
 *
 * ```
 *  let obj = {
 *      firstName: 'John',
 *      middleName: 'Jack',
 *      lastName: 'Jillian',
 *      custInfo: {
 *          balance: 100,
 *          spent: 500
 *      },
 *      addressInfo: {
 *          street: 'street',
 *          city: 'city',
 *          state: 'state'
 *      }
 *  }
 *
 *  filterKeysBySubStr(obj, 'name') -> { firstName: 'John', middleName: 'Jack', lastName: 'Jillian' }
 *  filterKeysBySubStr(obj, 'info') -> {
 *      custInfo: {
 *          balance: 100,
 *          spent: 500
 *      },
 *      addressInfo: {
 *          street: 'street',
 *          city: 'city',
 *          state: 'state'
 *      }
 *  }
 *
 *  filterKeysBySubStr(obj, '') -> obj
 *  filterKeysBySubStr('') -> {} // handle missing object
 *  filterKeysBySubStr() -> {} // handle missing parameters
 * ```
 */
export const filterKeysBySubStr = (target: object, filter: string): object => {
    if (!target) { return {}; }
    if (!filter) { return target; }
    return Object.fromEntries(Object.entries(target).filter(entry => {
        const key = entry[0];
        return key.toLowerCase().includes(filter.toLowerCase())
    }));
};

/**
 * Returns an object containing keys filtered by a list of keys.
 * The function will return the same object if no filters are provided.
 *
 * ```
 *  let obj = {
 *      firstName: 'John',
 *      middleName: 'Jack',
 *      lastName: 'Jillian',
 *      custInfo: {
 *          balance: 100,
 *          spent: 500
 *      },
 *      addressInfo: {
 *          street: 'street',
 *          city: 'city',
 *          state: 'state'
 *      }
 *  }
 *
 *  filterByKeys(obj, ['firstName', 'lastName', 'custInfo']) -> {
 *          firstName: 'John',
 *          lastName: 'Jillian',
 *          custInfo: {
 *              balance: 100,
 *              spent: 500
 *          },
 *  });
 * 
 * ```
 */
export const filterByKeys = (target: object = {}, filter: string[] = []): object => {

    if (!filter || !filter.length) { return target; }

    return Object.fromEntries(filter.map(key => {
        return key in target
            // @ts-ignore
            ? [key, target[key]]
            : [key, null];
    }));

};

export const removeFalsyObjValues = (target: object = {}): object => {
    return Object.fromEntries(Object.entries(target).filter(entry => !!entry[1]));
}

/**
 * Converts an Object into a URL query string
 * @param params Object containing query params
 * @returns Query String
 * ```
 *  const target = { name: 'Qarun', age: 25, height: 180 };
 *  convertToQueryString(target) -> '/?name=Qarun&age=25&height=180'
 * ```
 */
export function convertToQueryString(params: object): string;
/**
 * Converts a Map into a URL query string
 * 
 * @param params Map containing query params
 * @returns Query String
 * 
 * ```
 *  const target = new Map();
 *  target.set('name', 'Qarun');
 *  target.set('age', 25);
 *  target.set('height', 180);
 *  convertToQueryString(target) -> '/?name=Qarun&age=25&height=180'
 * ```
 */
export function convertToQueryString(map: Map<string, string>): string;
/**
 * Converts an array of key-value pairs into a URL query string
 * @param params Key-value pair array
 * @returns Query String
 * 
 * ```
 *  const target = [['name', 'Qarun'], ['age', 25], ['height', 180]]
 *  convertToQueryString(target) -> '/?name=Qarun&age=25&height=180'
 * ```
 */
export function convertToQueryString(arrayPairs: Array<[string, string]>): string;
export function convertToQueryString(params: object, map?: Map<string, string>, arrayPairs?: Array<[string, string]>): string {

    const BASE = '/?';

    if (params) {
        if (JSON.stringify(params) === '{}') { return BASE; }
        return `${BASE}${Object.entries(params).map(key => key.join('=')).join('&')}`;
    }

    if (map) {
        if (map.size === 0) { return BASE; }
        return BASE.concat(Array.from(map.entries()).map(e => `${e[0]}=${e[1].toString()}`).join('&'));
    }

    if (arrayPairs) {
        if (arrayPairs.length === 0) { return BASE; }
        return BASE.concat(arrayPairs.map(e => `${e[0]}=${e[1].toString()}`).join('&'));
    }

    if (!params && !map && !arrayPairs) return BASE;
    
}
