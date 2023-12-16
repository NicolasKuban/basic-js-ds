const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BSTNode {
  constructor(data) {
    this.data = data;
    this.less = null;
    this.more = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootElement = null
    // this.data = null
    // this.less = null
    // this.more = null
  }
  
  root() {
    return this.rootElement
  }

  add(data) {
    let current = new BSTNode(data)
    
    if (this.rootElement === null) {
      this.rootElement = current
    } else {
      this.getPool(this.rootElement, current)
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    // function hasData(current, data) {
    //   if (current === null) {
    //     return false
    //   } else if (data === current.data) {
    //     return true
    //   } else if (data < current.data) {
    //     return hasData(current.less, data)
    //   } else if (data > current.data) {
    //     return hasData(current.more, data)
    //   }
    // }
    // // let current = this.rootElement
    // return hasData(this.rootElement, data)

    return Boolean(this.find(data))
  }
  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function findData(current, data) {
      if (current === null) {
        return null
      } else if (data === current.data) {
        return current
      } else if (data < current.data) {
        return findData(current.less, data)
      } else if (data > current.data) {
        return findData(current.more, data)
      }
    }
    // let current = this.rootElement
    return findData(this.rootElement, data)

  }

getPool (root, node) {
  // console.log("current:", node)
  // console.log("this:", this)
  // console.log("================")
  // let more = node.more
  // let less = node.less

  // console.log(root.data)
  // console.log(node.data)
    if (node.data < root.data) {
      if (root.less !== null) {
        this.getPool(root.less, node)
      } else {
        root.less = node
      }
    } else if (node.data > root.data) {
      if (root.more !== null) {
        this.getPool(root.more, node)
      } else {
        root.more = node
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.rootElement
    let temp = this.removeNode(current, data)
    this.rootElement = temp

    // function getPool (root, node) {
    //   if (node.data < root.data) {
    //     if (root.less !== null) {
    //       getPool(root.less, node)
    //     } else {
    //       root.less = node
    //     }
    //   } else if (node.data > root.data) {
    //     if (root.more !== null) {
    //       getPool(root.more, node)
    //     } else {
    //       root.more = node
    //     }
    //   }
    // }

    

    
    // let current = this.find(data)
    // let more = current.more
    // current = current.less
    // if (more !== null) {
    //   this.getPool(current, more) 
    // }
    // console.log(current)
  }

  removeNode (node, data) {
    if (node === null) {
      return null
    } else if (data < node.data) {
      node.less = this.removeNode(node.less, data)
      return node
    } else if (data > node.data) {
      node.more = this.removeNode(node.more, data)
      return node
    } else {
      if (node.less === null && node.more === null) {
        return null
      }
      if (node.less === null) {
        return node.more
      }
      if (node.more === null) {
        return node.less
      }
      console.log("current:", node)
      // console.log("this:", this)
      console.log("================")
      let more = node.more
      let less = node.less

      console.log(more)
      console.log(less)
      console.log("================")
      this.getPool(less, more)
      console.log(less)
      console.log("================")
      return less
    }

  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function minData(current) {
      if (current === null) {
        return null
      } else if (current.less === null) {
        return current.data
      } else {
        return minData(current.less)
      }
    }
    // let current = this.rootElement
    return minData(this.rootElement)
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function maxData(current) {
      if (current === null) {
        return null
      } else if (current.more === null) {
        return current.data
      } else {
        return maxData(current.more)
      }
    }
    // let current = this.rootElement
    return maxData(this.rootElement)
  }
}

const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// console.log(tree.has(14)) //, false);
// console.log(tree.has(8)) //, false);
// console.log(tree.has(9)) //, false);
// console.log(tree.has(2)) //, true);
// console.log(tree.has(6)) //, true);
// console.log(tree.has(128)) //, true);
// console.log(tree.has(31)) //, true);
// console.log(tree.has(54)) //, true);
// console.log(tree.has(1)) //, true);

tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
console.log(tree.min()) //, 1);

module.exports = {
  BinarySearchTree
};