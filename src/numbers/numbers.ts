
/**
 * Returns the order suffix of a given number. Eg. 1 -> "1st", 23 -> "23rd". Also accounts for negative numbers.
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