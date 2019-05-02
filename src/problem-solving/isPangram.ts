/**
 * first approach
 * @function isPangram
 * @param {string} str
 * @return {boolean} - if all letters in alphabet used in string
 */

export const isPangram = (str: string): boolean => {
  //guard clause
  if (str.length < 27) return false;
  const alphabets: Array<string> = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const alphabetSet = new Set(alphabets);
  const splitStr = str.split('');
  for (let char of splitStr) {
    if (alphabetSet.has(char.toLowerCase())) {
      alphabetSet.delete(char);
    }
  }
  return alphabetSet.size === 0;
};
