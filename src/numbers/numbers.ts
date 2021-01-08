
/**
 * Returns the order suffix of a given number. Eg. 1 -> "1st", 23 -> "23rd". Also accounts for negative numbers
 * @param { string | number } num Given number
 * @returns { string } The number with order suffix
 */
export const getOrderSuffix = (num: string | number): string => {
  if (!num) { throw new Error('Null or Undefined passed in'); }
  num = num.toString();
  if (!(/^[0-9]+$/.test(num))) { throw new Error('A number was not passed in'); }
  const endValue: string = num.trim().slice(-1);

  const suffixMap: { [key: string]: string } = {
      1: 'st',
      2: 'nd',
      3: 'rd'
  };

//   const edgeCases = [11, 12, 13];

//   const lastTwoDigits = value % 100;
    
//     if (this.edgeCases.includes(lastTwoDigits)) {
//       return `${value}th`
//     }

//     const lastDigit = value % 10;
//     const suffix = this.suffixMap[lastDigit];

//     return !suffix
//       ? `${value}th`
//       : `${value}${suffix}`;
//   }

  if (suffixMap[endValue] === undefined) { return `${parseInt(num, 10)}th`; }
  return `${parseInt(num, 10)}${suffixMap[endValue]}`;
};

export const fn = () => 1;