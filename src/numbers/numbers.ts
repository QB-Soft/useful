
/**
 * Returns the order suffix of a given number. Also accounts for negative numbers.
 *
 * ```
 *  getOrderSuffix(1) → "1st"
 *  getOrderSuffix(-12) → "-12th"
 *  getOrderSuffix(213) → "213th"
 * ```
 */
export const getOrderSuffix = (num: number): string => {
  if (!Number.isInteger(num)) { throw new Error(`Cannot pass ${num} into getOrderSuffix Function`); }

  const isNegative = num < 0;
  const posNum = Math.abs(num);
  let finalNum: string;
  const suffixMap: { [key: number]: string } = {
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  const edgeCases = [11, 12, 13];
  const lastTwoDigits = posNum % 100;

  if (edgeCases.includes(lastTwoDigits)) {
    return `${isNegative ? '-' : ''}${posNum}th`
  }

  const lastDigit = posNum % 10;
  const suffix = suffixMap[lastDigit] || suffixMap[lastDigit * -1]
  finalNum = `${isNegative ? '-' : ''}${posNum}`;

  return !suffix
    ? `${finalNum}th`
    : `${finalNum}${suffix}`;
};

/**
 * Returns a number between a lower and upper limit **non-inclusive**. Default limit is 0 - 100 if no parameters are specified.
 * Can also return a float to 2 decimal places if required.
 *
 * ```
 *  generateNumberInRange() → 54
 *  generateNumberInRange(100, 200) → 145
 *  generateNumberInRange(-200, -100, true) → -145.34
 * ```
 */
export const generateNumberInRange = (lowerLimit: number = 0, upperLimit: number = 100, returnFloat: boolean = false): number => {
  const difference = upperLimit - lowerLimit;
  const result = (Math.random() * difference) + lowerLimit;
  return returnFloat ? (Math.round(result * 100) / 100)  : Math.floor(result);
}