
const {Queue} = require('../queue');

function bfs(
  queue, visited, parents, depth, currDepth, otherFrontier) {

  while(!queue.isEmpty() && depth.get(queue.first()) === currDepth) {
    const node = queue.dequeue();

    if(otherFrontier.has(node)) {
      return node;
    }

    visited.add(node);

    for(let neighbor of node.neighbors) {
      if(!visited.has(neighbor)) {
        parents.set(neighbor, node);
        depth.set(neighbor, currDepth + 1);
        queue.enqueue(neighbor);
      }
    }
  }

  return null;
}

function getPath(source, target, node, parents1, parents2) {
  if(source === target) return [source];
  if(source === node || target === node) return [source, target];

  const path = [];
  let curr = node;

  while(parents1.has(curr)) {
    path.push(curr);
    curr = parents1.get(curr);
  }

  path.push(source);
  path.reverse();

  curr = parents2.get(curr);

  while(parents2.has(curr)) {
    path.push(curr);
    curr = parents2.get(curr);
  }

  path.push(target);

  return path;
}

function bidirectionalSearch(source, target) {
  const q1 = new Queue(),
    q2 = new Queue(),
    visited1 = new Set(),
    visited2 = new Set(),
    parents1 = new Map(),
    parents2 = new Map(),
    depth1 = new Map(),
    depth2 = new Map();

  let currDepth = 0;
  depth1.set(source, currDepth);
  depth2.set(target, currDepth);

  q1.enqueue(source);
  q2.enqueue(target);

  while(!q1.isEmpty() && !q2.isEmpty()) {
    let intersection = 
      bfs(q1, visited1, parents1, depth1, currDepth, visited2);

    if(!intersection) {
      intersection = 
        bfs(q2, visited2, parents2, depth2, currDepth, visited1);
    }

    if(intersection) {
      return getPath(
          source, target, intersection, parents1, parents2);
    }

    currDepth++;
  }

  return [];
}

module.exports = {
  bidirectionalSearch
};

