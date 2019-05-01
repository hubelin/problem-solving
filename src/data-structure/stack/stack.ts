interface IStack<T> {
  push(item: T): IStack<T>;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

export class Stack<T> implements IStack<T> {
  items: Array<T>;
  constructor() {
    this.items = [];
  }
  push(item: T): IStack<T> {
    this.items.push(item);
    return this;
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[0];
  }
  isEmpty(): boolean {
    return this.size() === 0;
  }
  size(): number {
    return this.items.length;
  }
}
