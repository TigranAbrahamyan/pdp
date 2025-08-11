const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const shortPath = (graph, start, end) => {
  const costs = {};
  const parents = {};
  const processed = [];

  Object.keys(graph).forEach(node => {
    if (node !== start) {
      const value = graph[start][node];
      costs[node] = value || Infinity;
      if (value) {
        parents[node] = start;
      }
    }
  });

  costs[start] = 0;

  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach(neighbor => {
      const newCost = cost + neighbors[neighbor];
      if (newCost < (costs[neighbor] || Infinity)) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    });

    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }

  const path = buildPath(parents, start, end);

  return {
    costs,
    cost: costs[end],
    path,
  };
};

const findNodeLowestCost = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
};

const buildPath = (parents, start, end) => {
  const path = [end];
  let current = end;

  while (current !== start) {
    current = parents[current];
    path.unshift(current);
  }

  return path;
};

const result = shortPath(graph, 'a', 'g');
console.log('Costs:', result.costs);
console.log('Total cost:', result.cost);
console.log('Shortest path from "a" to "g":', result.path.join(' -> '));
