const { Node } = require('../extensions/list-tree.js');

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

  remove(data) {
    this.rootNode = removeWithin(this.rootNode, data);

    function removeWithin(node, value) {
      if (!node) return;

      if (value === node.data) {
        if (!node.left && !node.right) return null;

        if (!node.left) return (node = node.right), node;

        if (!node.right) return (node = node.left), node;

        let replacementNode = node.left;
        while (replacementNode.right) {
          replacementNode = replacementNode.right;
        }

        node.data = replacementNode.data;
        node.left = removeWithin(node.left, replacementNode.data);

        return node;
      }

      if (value < node.data)
        return (node.left = removeWithin(node.left, data)), node;

      if (value > node.data)
        return (node.right = removeWithin(node.right, data)), node;
    }
  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
