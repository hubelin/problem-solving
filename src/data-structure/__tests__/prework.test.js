import { reverseList } from '../prework';

describe('reverseList', () => {
  it('should reverse list', () => {
    const arr = [1, 2, 3, 4];
    expect(reverseList(arr)).toEqual([4, 3, 2, 1]);
  });
  it('handles an empty list', () => {
    const arr = [];
    expect(reverseList(arr)).toEqual([]);
  });
});
