import { isPangram } from '../isPangram';
describe('isPangram', () => {
  it('isPangram_correct_input', () => {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
  });
  it('isPangram_almost_correct_input', () => {
    expect(isPangram('abcdefghijklmnopqrstub')).toBe(false);
  });
  it('isPangram_small_input', () => {
    expect(isPangram('n')).toBe(false);
  });
});
