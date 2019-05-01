import { Stack } from '../stack';

describe('Stack', () => {
  it('stack is defined', () => {
    expect(Stack).toBeDefined();
  });
  it('new stack has size of 0', () => {
    let s = new Stack();
    expect(s.size()).toBe(0);
  });
});
