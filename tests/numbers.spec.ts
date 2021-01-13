import {generateNumberInRange, getOrderSuffix} from '../src/numbers'

describe('getOrderSuffix', () => {
    it('should work with numbers', () => {
        expect(getOrderSuffix(1)).toBe('1st');
        expect(getOrderSuffix(32)).toBe('32nd');
        expect(getOrderSuffix(23)).toBe('23rd');
    });

    it('should work with negative numbers', () => {
        expect(getOrderSuffix(-1)).toBe('-1st');
        expect(getOrderSuffix(0)).toBe('0th');
        expect(getOrderSuffix(-32)).toBe('-32nd');
        expect(getOrderSuffix(-23)).toBe('-23rd');
    });

    it('should work with 0', () => {
        expect(getOrderSuffix(0)).toBe('0th');
        expect(getOrderSuffix(-0)).toBe('0th');
    });

    it('should handle 11, 12 and 13', () => {
        expect(getOrderSuffix(11)).toBe('11th');
        expect(getOrderSuffix(12)).toBe('12th');
        expect(getOrderSuffix(13)).toBe('13th');

        expect(getOrderSuffix(111)).toBe('111th');
        expect(getOrderSuffix(112)).toBe('112th');
        expect(getOrderSuffix(113)).toBe('113th');

        expect(getOrderSuffix(-11)).toBe('-11th');
        expect(getOrderSuffix(-212)).toBe('-212th');
        expect(getOrderSuffix(-300013)).toBe('-300013th');
    });

    it('should throw an error if an integer number is not passed in', () => {
        expect(() => { getOrderSuffix(undefined) }).toThrowError('Cannot pass undefined into getOrderSuffix Function');
        expect(() => { getOrderSuffix(null) }).toThrowError('Cannot pass null into getOrderSuffix Function')
        expect(() => { getOrderSuffix('pool table' as any); }).toThrowError('Cannot pass pool table into getOrderSuffix Function')
    });
});

describe('generateNumberInRange', () => {
    it('should generate a number within the default range (0 - 100)', () => {
        const number = generateNumberInRange();
        expect(number).toBeDefined();
        expect(number).toBeLessThan(100);
        expect(number).toBeGreaterThan(0);
    });

    it('should generate an integer if specified', () => {
        const number = generateNumberInRange(0, 100, true);
        expect(Number.isInteger(number)).toBe(true);
    });

    it('should work when both limits are negative numbers', () => {
        const number = generateNumberInRange(-200, -100);
        expect(number).toBeGreaterThan(-200);
        expect(number).toBeLessThan(-100);
    });

    it('should work when the lower limit is negative and the upper limit is non-negative', () => {
        const number = generateNumberInRange(-200, 100);
        expect(number).toBeGreaterThan(-200);
        expect(number).toBeLessThan(100);
    });

    it('should work when both limits are the same number', () => {
        expect(generateNumberInRange(100, 100)).toBe(100);
        expect(generateNumberInRange(-100, -100)).toBe(-100);
        expect(generateNumberInRange(100, 100, true)).toBe(100);
    });

});