import { selectRandomlyFromArray } from '../src/arrays';

describe('selectRandomlyFromArray', () => {
    it('should return undefined if given an empty array', () => {
        expect(selectRandomlyFromArray([])).toBeUndefined();
    });

    it('should return undefined if given no parameters', () => {
        expect(selectRandomlyFromArray(undefined)).toBeUndefined();
    })
})