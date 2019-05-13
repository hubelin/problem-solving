import { solve } from '../surroundedRegion';

describe('surroundingRegion', () => {
  it('correctly outputs result', () => {
    const board = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X']
    ];
    const result = [
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']
    ];
    expect(solve(board)).toEqual(result);
  });
});
