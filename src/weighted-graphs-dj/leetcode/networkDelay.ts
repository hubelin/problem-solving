/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

// restate problem - max time to reach all nodes
const networkDelayTime = (times: number[][], N: number, K: number): number => {
  // build graph
  const graph: { [key: string]: any } = {};
  for (let i = 0; i < times.length; i += 1) {
    const [u, v, w] = times[i];
    if (!graph[u]) {
      graph[u] = { [v]: w };
    } else {
      graph[u][v] = w;
    }
  }
  // track cost
  const prevCost: { [key: string]: any } = {};
  const queue = [[K, 0]];
  while (queue.length) {
    const current = queue.shift();
    // set vertex to be the value
    const vertex = current[0];
    const vertexCost = current[1];
    const neighbors = graph[vertex];
    const neighborVertices = Object.keys(neighbors);
    if (neighbors) {
      for (let neighbor of neighborVertices) {
        if (parseInt(neighbor) === K) {
          continue;
        }
        // neighbors[neighbors] gets the weight to reach neighbor
        const newCost = vertexCost + neighbors[neighbor];
        // if we haven't tracked the cost to get to the neighbor yet or the previously tracked is greater than new cost
        if (!prevCost[neighbor] || prevCost[neighbor] > newCost) {
          prevCost[neighbor] = newCost;
          queue.push([parseInt(neighbor), newCost]);
        }
      }
    }
  }
  if (Object.keys(prevCost).length !== N - 1) {
    return -1;
  } else {
    return Math.max(...Object.values(prevCost));
  }
};
