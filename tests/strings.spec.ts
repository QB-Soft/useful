import { toTitleCase } from '../src/strings';

describe('toTitleCase', () => {
    it('should convert a lowercase string to title case', () => {
        expect(toTitleCase('my name is qarun')).toBe('My Name Is Qarun');
    });

    it('should convert an uppercase string to title case', () => {
        expect(toTitleCase('MY NAME IS QARUN')).toBe('My Name Is Qarun');
    });

    it('should convert a string with random cases to title case', () => {
        expect(toTitleCase('mY nAmE Is qarUn')).toBe('My Name Is Qarun');
    });

    it('should return an empty string is argument is falsy', () => {
        // @ts-ignore
        expect(toTitleCase()).toBe('');
    })
});