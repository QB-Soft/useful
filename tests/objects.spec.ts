import {containsEmptyString, filterByKeys, filterKeysBySubStr, mergeObjects, removeFalsyObjValues, convertToQueryString, removeFalsyObjEntries} from "../src/objects";

describe('containsEmptyString', () => {
    it('should detect if an object has an empty string', () => {
        expect(containsEmptyString({name: ''})).toBe(true);
        expect(containsEmptyString({name: 'John'})).toBe(false);
    });

    it('should return true if given an empty object', () => {
        expect(containsEmptyString({})).toBe(true);
    });

    it('should return undefined if given falsy inputs', () => {
        expect(containsEmptyString(undefined)).toBe(undefined);
        expect(containsEmptyString(null)).toBe(undefined);
    });
});

describe('mergeObjects', () => {
    let name: object, age: object, city: object;
    beforeEach(() => {
        name = { name: 'John' };
        age = { age: 25 };
        city = { city: 'New York' };
    })

    it('should merge two or more objects together', () => {
        expect(mergeObjects(name, age, city)).toEqual({name: 'John', age: 25, city: 'New York'});
    })

    it('should return one object if given one object', () => {
        expect(mergeObjects(name)).toEqual(name);
    });

    it('should return an empty object if given no objects', () => {
        expect(mergeObjects()).toEqual({});
    });

    it('should return an empty object if given falsy inputs', () => {
        expect(mergeObjects(undefined)).toEqual({});
        expect(mergeObjects(null)).toEqual({})
    });

    it('should ignore any falsy parameters', () => {
        expect(mergeObjects(name, undefined, age, null)).toEqual({name: 'John', age: 25});
    })

});

describe('filterKeysBySubStr', () => {
    let target = {
        firstName: 'John',
        middleName: 'Jack',
        lastName: 'Jillian',
        custInfo: {
            balance: 100,
            spent: 500
        },
        addressInfo: {
            street: 'street',
            city: 'city',
            state: 'state'
        }
    }

    it('should filter the keys in an object by a sub-string', () => {
        expect(filterKeysBySubStr(target, 'name')).toEqual({
            firstName: 'John',
            middleName: 'Jack',
            lastName: 'Jillian',
        });

        expect(filterKeysBySubStr(target, 'info')).toEqual({
            custInfo: {
                balance: 100,
                spent: 500
            },
            addressInfo: {
                street: 'street',
                city: 'city',
                state: 'state'
            }
        });

        expect(filterKeysBySubStr(target, 'potato')).toEqual({});

    });

    it('should return the target object if the filter is falsy', () => {
        expect(filterKeysBySubStr(target, '')).toEqual(target);
        expect(filterKeysBySubStr(target, undefined)).toEqual(target);
        expect(filterKeysBySubStr(target, null)).toEqual(target);
    });

    it('should return an empty object if the target object is falsy', () => {
        expect(filterKeysBySubStr(undefined, 'info')).toEqual({});
        expect(filterKeysBySubStr(null, 'info')).toEqual({});
    });
});

describe('filterByKeys', () => {
    let target = {
        firstName: 'John',
        middleName: 'Jack',
        lastName: 'Jillian',
        custInfo: {
            balance: 100,
            spent: 500
        },
        addressInfo: {
            street: 'street',
            city: 'city',
            state: 'state'
        }
    };

    it('should filter the object by a list of keys', () => {
        expect(filterByKeys(target, ['firstName', 'lastName', 'custInfo'])).toEqual({
            firstName: 'John',
            lastName: 'Jillian',
            custInfo: {
                balance: 100,
                spent: 500
            },
        });
    });

    it('should return the same object if no filters are provided', () => {
        expect(filterByKeys(target, [])).toEqual(target);
        expect(filterByKeys(target, undefined)).toEqual(target);
    });
});

describe('removeFalsyObjEntries', () => {
    it('should return an empty array if the parameters are falsy', () => {
        expect(removeFalsyObjEntries(undefined)).toEqual([]);
        expect(removeFalsyObjEntries(null)).toEqual([]);
    });

    it('should remove falsy values in entry key-value pair', () => {
        expect(removeFalsyObjEntries([['name', 'Qarun'], ['age', 25], ['height', undefined]])).toEqual([['name', 'Qarun'], ['age', 25]]);
    });
});

describe('removeFalsyObjValues', () => {
    let target: object;

    beforeEach(() => {
        target = {
            name: 'Qarun',
            age: undefined,
            height: 180
        };
    });

    it('should remove all falsy values from an object', () => {
        expect(removeFalsyObjValues(target)).toEqual({
            name: 'Qarun',
            height: 180
        });
    });

    it('should return an empty object if param is falsy', () => {
        expect(removeFalsyObjValues(undefined)).toEqual({});
    }); 
});

describe('convertToQueryString', () => {
    let target: object;

    beforeEach(() => {
        target = {
            name: 'Qarun',
            age: 25,
            height: 180
        };
    });

    it('should convert an object to query parameters', () => {
        expect(convertToQueryString(target)).toEqual('/?name=Qarun&age=25&height=180');
    });

    it('should convert a map to a query string', () => {
        expect(convertToQueryString(new Map(Object.entries(target)))).toEqual('/?name=Qarun&age=25&height=180');
    });

    it('should ignore falsy values or empty object values', () => {
        // @ts-ignore
        target['name'] = undefined;
        expect(convertToQueryString(target)).toEqual('/?age=25&height=180')
    });

});
