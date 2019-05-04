
const {Queue} = require('../queue');

function topologicalSort(graph) {
  const queue = new Queue, 
    sort = [],
    indegrees = new Map;

  for(let node of graph.nodes) {
    indegrees.set(node, 0);
  }

  for(let node of graph.nodes) {
    for(let neighbors of node.neighbors) {
      indegrees.set(neighbors, indegrees.get(neighbors) + 1);
    }
  }

  for(let node of graph.nodes) {
    if(indegrees.get(node) === 0) {
      queue.enqueue(node);
      sort.push(node);
    }
  }

  while(!queue.isEmpty()) {
    const node = queue.dequeue();

    for(let neighbor of node.neighbors) {
      indegrees.set(neighbor, indegrees.get(neighbor) - 1);

      if(indegrees.get(neighbor) === 0) {
        queue.enqueue(neighbor);
        sort.push(neighbor);
      }
    }
  }

  if(graph.nodes.length === sort.length) {
    return sort;
  }

  return null;
}

module.exports = {
  topologicalSort
};

