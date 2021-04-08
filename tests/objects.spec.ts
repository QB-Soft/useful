import {containsEmptyString, filterByKeys, filterKeysBySubStr, mergeObjects} from "../src/objects";

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
})
