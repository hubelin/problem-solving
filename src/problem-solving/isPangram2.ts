/**
 * second approach
 * @function isPangram2
 * @param str {string}
 * @return {boolean} - if all letters in alphabet used in string
 */

export const isPangram2 = (str: string): boolean => {
  if (str.length < 27) return false;
  const seenWords = new Set();
  const alphabets: Array<boolean | string> = [
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
  for (let char of str) {
    if (char !== ' ') {
      if (seenWords.has(char)) {
        continue;
      } else {
        const charIdx = alphabets.indexOf(char);
        seenWords.add(char);
        alphabets[charIdx] = true;
      }
    }
  }
  return alphabets.every(ele => ele === true);
};
