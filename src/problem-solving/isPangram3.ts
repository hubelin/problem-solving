/**
 * third approach
 * @function isPangram3
 * @param {string} str
 * @return {boolean} - if all letters in alphabet used in string
 */
interface IAlphabetCount {
  [key: string]: number;
}
export const isPangram3 = (str: string): boolean => {
  if (str.length < 27) return false;
  const alphabetCount: IAlphabetCount = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (char !== ' ') {
      if (!alphabetCount[char]) {
        alphabetCount[char] = 1;
      }
    }
  }
  return Object.keys(alphabetCount).length === 26;
};
