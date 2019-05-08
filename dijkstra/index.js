
const {PriorityQueue} = require('../priority-queue');

function dijkstra(nodes, source, weights) {
  function compare(a, b) {
    return distances.get(a) < distances.get(b);
  }

  const parents = new Map,
    distances = nodes.reduce(
      (acc, a) => acc.set(a, a === source ? 0 : Infinity), new Map),
    nearest = new PriorityQueue({
      array: nodes, 
      compare: compare,
      mapValuesToIndexes: true});

  parents.set(source, null);

  console.log(distances.values());

  while(!nearest.isEmpty()) {
    const node = nearest.extract();
    console.log(node.value);

    if(distances.get(node) === Infinity) {
      break;
    }

    for(let neighbor of node.neighbors) {
      const newDist = distances.get(node) 
        + weights.get(node).get(neighbor);
      if(newDist < distances.get(neighbor)) {
        distances.set(neighbor, newDist);
        nearest.updateKeyByValue(neighbor, newDist);
        parents.set(neighbor, node);
      }
    }
  }

  return [parents, distances];
}

module.exports = {
  default: dijkstra,
  dijkstra,
}
