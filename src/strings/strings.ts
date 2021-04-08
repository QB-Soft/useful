export const toTitleCase = (str: string): string => {
    if (!str) { return ''; }
    
    return str
        .split(' ')
        .map(wrd => { return wrd.slice(0, 1).toUpperCase().concat(wrd.slice(1).toLowerCase()); })
        .join(' ');
}