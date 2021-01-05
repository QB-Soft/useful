import { selectRandomlyFromArray } from '../src/index';

describe('selectRandomlyFromArray', () => {
    it('should undefined if given an empty array', () => {
        expect(selectRandomlyFromArray([])).toBeUndefined();
    });
})