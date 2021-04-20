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

/**
 * Filters out falsy values from Object entries. 
 * This function is intended to be used with Object entries, that is, 
 * an array of key-value pairs. The returned object can then be 
 * re-constructed using Object.fromEntries.
 * 
 * ```
 *  removeFalsyObjEntries([['name', 'Qarun'], ['age', 25], ['height', undefined]]) -> [['name', 'Qarun'], ['age', 25]]
 * ```
 * @param entries Object entries of a Array<[key, value]> format
 * @returns Filtered Object entries with truthy values
 */
export const removeFalsyObjEntries = (entries: Array<[any, any]> = []): Array<[any, any]> => {
    entries = !!entries ? entries : [];
    return entries.filter(entry => !!entry[1]);
} 

export const removeFalsyObjValues = (target: object = {}): object => {
    return Object.fromEntries(removeFalsyObjEntries(Object.entries(target)));
}


/**
 * Converts an Object, Map or Key-value list into a URL query string
 * @param params Object containing query params
 * @returns Query String
 * ```
 *  let target = { name: 'Qarun', age: 25, height: 180 };
 *  convertToQueryString(target) -> '/?name=Qarun&age=25&height=180'
 * 
 *  target = new Map();
 *  target.set('name', 'Qarun');
 *  target.set('age', 25);
 *  target.set('height', 180);
 *  convertToQueryString(target) -> '/?name=Qarun&age=25&height=180'
 * 
 *  target = [['name', 'Qarun'], ['age', 25], ['height', 180]]
 *  convertToQueryString(target) -> '/?name=Qarun&age=25&height=180'
 * 
 * ```
 */
export function convertToQueryString(params: object | Map<string, string> | Array<[string, string]>): string {

    const BASE = '/?';

    if (Array.isArray(params)) {
        if (params.length === 0) { return BASE; }
        return BASE.concat(removeFalsyObjEntries(params).map(e => `${e[0]}=${e[1].toString()}`).join('&'));
    }

    if (params instanceof Map) {
        if (params.size === 0) { return BASE; }
        return BASE.concat(removeFalsyObjEntries(Array.from(params.entries())).map(e => `${e[0]}=${e[1].toString()}`).join('&'));
    }

    if (typeof params === 'object') {
        if (JSON.stringify(params) === '{}') { return BASE; }
        return `${BASE}${removeFalsyObjEntries(Object.entries(params)).map(key => key.join('=')).join('&')}`;
    }

    return BASE;

}
