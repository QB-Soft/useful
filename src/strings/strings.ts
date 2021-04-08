/**
 * A function that takes in a string and returns title case
 * ```
 *  toTitleCase('my name is qarun') -> 'My Name Is Qarun'
 *  toTitleCase('MY NAME IS QARUN') -> 'My Name Is Qarun'
 *  toTitleCase('My nAMe Is QaruN') -> 'My Name Is Qarun'
 *  toTitleCase('') -> ''
 * toTitleCase(undefined) -> ''
 * ```
 * @param str Input string
 * @returns Title-cased String
 */
export const toTitleCase = (str: string): string => {
    if (!str) { return ''; }
    
    return str
        .split(' ')
        .map(wrd => { return wrd.slice(0, 1).toUpperCase().concat(wrd.slice(1).toLowerCase()); })
        .join(' ');
}