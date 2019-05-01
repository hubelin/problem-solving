import { evalRPN } from '../leetcode/evalRPN';

describe('evalRPN', () => {
  it('evals arithmetic expression in reverse polish notation', () => {
    //Explanation: ((2 + 1) * 3) = 9
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
    //Explanation: (4 + (13 / 5)) = 6
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    expect(
      evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+'
      ])
    ).toBe(22);
  });
});
