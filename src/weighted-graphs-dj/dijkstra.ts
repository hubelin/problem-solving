class PriorityQueue {
  public values: any[];
  constructor() {
    this.values = [];
  }
  enqueue(val: any, priority: any) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  public adjacencyList: { [key: string]: any };
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1: any, vertex2: any, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start: any, finish: any) {
    const nodes = new PriorityQueue();
    const distances: { [key: string]: any } = {};
    const previous: { [key: string]: any } = {};
    let path = [];
    let smallest = null;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // return path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return [...smallest, ...path].reverse();
  }
}
