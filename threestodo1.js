//1-



// 2-contains

  
  //3-
  class BTNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
  
    min() {
      // Find the node with the minimum value in the BST
      return this._minNode(this.root);
    }
  
    _minNode(currentNode) {
      // Traverse the leftmost path to find the minimum value
      if (currentNode === null) {
        return null; // Empty tree
      }
  
      while (currentNode.left !== null) {
        currentNode = currentNode.left;
      }
  
      return currentNode.val;
    }
  
  }

  //4-
  class BTNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
  
    max() {
      // Find the node with the maximum value in the BST
      return this._maxNode(this.root);
    }
  
    _maxNode(currentNode) {
      // Traverse the rightmost path to find the maximum value
      if (currentNode === null) {
        return null; // Empty tree
      }
  
      while (currentNode.right !== null) {
        currentNode = currentNode.right;
      }
  
      return currentNode.val;
    }
  }
  
  //5-

  class BTNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
  
    size() {
      // Count the nodes using a recursive helper function
      return this._size(this.root);
    }
  
    _size(currentNode) {
      if (currentNode === null) {
        return 0; // Empty subtree
      }
  
      // Count nodes in left and right subtrees, then add 1 for current node
      return this._size(currentNode.left) + this._size(currentNode.right) + 1;
    }
  }

  //6-
  class BTNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      // Check if the root node is null
      return this.root === null;
    }
  }
  
  
  