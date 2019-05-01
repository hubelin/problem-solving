import { isPangram3 } from '../isPangram3';
describe('isPangram3', () => {
  it('isPangram3_correct_input', () => {
    expect(isPangram3('the quick brown fox jumps over the lazy dog')).toBe(
      true
    );
  });
  it('isPangram3_almost_correct_input', () => {
    expect(isPangram3('abcdefghijklmnopqrstub')).toBe(false);
  });
  it('isPangram3_small_input', () => {
    expect(isPangram3('n')).toBe(false);
  });
});
