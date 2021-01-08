// export const giveNumberOrderSuffix = (numberAsString: string | number): string => {
//   if (!numberAsString) { throw new Error('Null or Undefined passed in'); }
//   numberAsString = numberAsString.toString();
//   if (!(/^[0-9]+$/.test(numberAsString))) { throw new Error('A number was not passed in'); }
//   const endValue: string = numberAsString.trim().slice(-1);

//   const suffixMap: { [key: string]: string } = {
//       1: 'st',
//       2: 'nd',
//       3: 'rd'
//   };

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

//   if (suffixMap[endValue] === undefined) { return `${parseInt(numberAsString, 10)}th`; }
//   return `${parseInt(numberAsString, 10)}${suffixMap[endValue]}`;
// };

export const fn = () => 1;