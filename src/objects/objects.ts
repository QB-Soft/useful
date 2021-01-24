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
 * Only works on top level for now
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
 * Only works on top level for now
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
