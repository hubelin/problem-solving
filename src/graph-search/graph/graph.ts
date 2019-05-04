interface IGraph {
  addVertex(vertex: string): void;
  addEdge(vertex1: string, vertex2: string): void;
  hasCycle(): boolean;
  hasCycleHelper(
    node: string,
    visited: Set<string>,
    recStack: Set<string>
  ): boolean;
}

export class Graph implements IGraph {
  private adjacencyList: { [key: string]: string[] };
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
  }
  hasCycle(): boolean {
    const visited = new Set();
    const recStack = new Set();
    const vertices = Object.keys(this.adjacencyList);
    for (let i = 0; i < vertices.length; i += 1) {
      if (this.hasCycleHelper(vertices[i], visited, recStack)) {
        return true;
      }
    }
    return false;
  }
  hasCycleHelper(
    node: string,
    visited: Set<string>,
    recStack: Set<string>
  ): boolean {
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;
  }
}
