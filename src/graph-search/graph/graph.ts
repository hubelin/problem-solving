interface IGraph {
  addVertex(vertex: any): void;
  addEdge(vertex1: any, vertex2: any): void;
  hasCycle(): boolean;
  hasCycleHelper(node: any, visited: Set<any>, recStack: Set<any>): boolean;
}

export class Graph implements IGraph {
  private adjacencyList: { [key: string]: any[] };
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: any): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1: any, vertex2: any): void {
    this.adjacencyList[vertex1].push(vertex2);
  }
  depthFirstSearch(start: any) {
    /**
     * use a stack and set the starting vertex as visited. while something is in the stack, pop off the stack and loop through it's neighbors. if the neighbors are not visited, set it to true and push it to the stack
     */
    const stack = [start];
    const result = [];
    const visited: { [k: string]: any } = {};
    let currentVertex;
    // set starting vertex to visited
    visited[start] = true;
    // while there is still remaining vertexes
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      for (let i = 0; i < this.adjacencyList[currentVertex].length; i += 1) {
        let neighbor = this.adjacencyList[currentVertex][i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
  breadthFirst(start: any) {
    /**
     * use a queue and set the starting vertex as true. set the currVertex to the first element shifted out. loop through it's neighbors and if it's not visited, push it to the queue
     */
    const queue = [start];
    const result = [];
    const visited: { [k: string]: any } = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      for (let i = 0; i < this.adjacencyList[currentVertex].length; i += 1) {
        let neighbor = this.adjacencyList[currentVertex][i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
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
  hasCycleHelper(node: any, visited: Set<any>, recStack: Set<any>): boolean {
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;
    visited.add(node);
    recStack.add(node);
    const neighbors = this.adjacencyList[node] || [];
    // recursively call to see if neighbors have cycle
    for (let i = 0; i < neighbors.length; i += 1) {
      if (this.hasCycleHelper(neighbors[i], visited, recStack)) {
        return true;
      }
    }
    recStack.delete(node);
    return false;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
