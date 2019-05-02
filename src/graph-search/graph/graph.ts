class Vertex<T> {
  constructor(public key: T) {
    this.key = key;
    this.neighbors = {};
  }
}

interface IGraph<T> {
  addVertex(vertex: T): IGraph<T>;
  addEdge(vertex1: T, vertex2: T): IGraph<T>;
  getVertex(key: T): T;
  getVertices(): T;
}

export class Graph<T> implements IGraph<T> {
  addVertex(vertex: T): IGraph<T>;
  addEdge(vertex1: T, vertex2: T): IGraph<T>;
  getVertex(key: T): T;
  getVertices(): Array<T>;
}
