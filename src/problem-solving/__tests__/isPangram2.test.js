import { isPangram2 } from '../isPangram2';
describe('isPangram2', () => {
  it('isPangram2_correct_input', () => {
    expect(isPangram2('the quick brown fox jumps over the lazy dog')).toBe(
      true
    );
  });
  it('isPangram2_almost_correct_input', () => {
    expect(isPangram2('abcdefghijklmnopqrstub')).toBe(false);
  });
  it('isPangram2_small_input', () => {
    expect(isPangram2('n')).toBe(false);
  });
});
