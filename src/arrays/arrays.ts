export const selectRandomlyFromArray = (array: any[]) => {
    if (!array) return undefined;
    return array[Math.floor(Math.random() * array.length)];
}