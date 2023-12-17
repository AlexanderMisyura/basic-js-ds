const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, value) {
      if (!node) return new Node(value);

      if (value === node.value) return node;

      if (value < node.data) node.left = addWithin(node.left, value);

      if (value > node.data) node.right = addWithin(node.right, value);

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootNode, data);

    function searchWithin(node, value) {
      if (!node) return false;

      if (value === node.data) return true;

      if (value < node.data) return searchWithin(node.left, value);

      if (value > node.data) return searchWithin(node.right, value);

      return false;
    }
  }

  find(data) {
    return findWithin(this.rootNode, data);

    function findWithin(node, value) {
      if (!node) return null;

      if (value === node.data) return node;

      if (value < node.data) return findWithin(node.left, value);

      if (value > node.data) return findWithin(node.right, value);

      return null;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
