interface IQueue<T> {
  enqueue(item: T): IQueue<T>;
  dequeue(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}
