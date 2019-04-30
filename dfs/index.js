
const {Stack} = require('../stack');

function dfs(source, visit) {
  if(source === null) return;

  const stack = new Stack,
    visited = new Set;

  stack.push(source);

  while(!stack.isEmpty()) {
    const node = stack.pop();
    visit(node);

    visited.add(node);

    for(let neighbor of node.neighbors) {
      if(!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

module.exports = {
  dfs
};

