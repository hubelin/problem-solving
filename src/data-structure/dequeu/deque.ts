interface IDeque<T> {
  addFront(item: T): IDeque<T>;
  addRear(item: T): IDeque<T>;
  removeFront(): T | undefined;
  removeRear(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}
