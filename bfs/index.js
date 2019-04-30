
const {Queue} = require('../queue');

function bfs(source, visit) {
  if(source === null) return;

  const queue = new Queue,
    visited = new Set;

  queue.enqueue(source);

  while(!queue.isEmpty()) {
    const node = queue.dequeue();
    visit(node);

    visited.add(node);

    for(let neighbor of node.neighbors) {
      if(!visited.has(neighbor)) {
        queue.enqueue(neighbor);
      }
    }
  }
}

module.exports = {
  bfs
};

