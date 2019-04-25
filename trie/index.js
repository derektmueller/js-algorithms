
function Node() {
  this.children = {};
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;

    for(let letter of word) {
      if(curr.children[letter]) {
        curr = curr.children[letter];
      } else {
        let newNode = new Node();
        curr.children[letter] = newNode;
        curr = newNode;
      }
    }

    if(!curr.children["*"]) curr.children["*"] = new Node();
  }

  isPrefix(str) {
    let curr = this.root;

    for(let letter of str) {
      if(curr.children[letter]) {
        curr = curr.children[letter];
      } else {
        return false;
      }
    }

    return !!Object.keys(curr.children).length;
  }
}

module.exports = {
  Node,
  Trie
}


