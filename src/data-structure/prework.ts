import { Stack } from './stack/stack';

export const reverseList = <T>(arr: T[]): T | undefined[] => {
  if (arr.length < 1) return [];
  const stack = new Stack();
  const result: T | undefined[] = [];
  for (let ele of arr) {
    stack.push(ele);
  }
  for (let i = 0; i < arr.length; i += 1) {
    const test: any = stack.pop();
    result.push(test);
  }
  return result;
};

class Queue {}
