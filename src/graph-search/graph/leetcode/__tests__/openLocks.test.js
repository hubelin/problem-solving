import { openLock } from '../openLock';

describe('openLock', () => {
  it('function exists', () => {
    expect(openLock).toBeDefined();
  });
  it('renders correct output', () => {
    const deadends = ['0201', '0101', '0102', '1212', '2002'],
      target = '0202';
    expect(openLock(deadends, target)).toBe(6);
  });
});
