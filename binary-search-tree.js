class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    
    if (!this.root) this.root = newNode;
    else {
      let curr = this.root;
      while (curr) {
        if (val > curr.val) {
          if (curr.right) curr = curr.right;
          else {
            curr.right = newNode;
            break;
          }
        } else {
            if (curr.left) curr = curr.left;
            else {
              curr.left = newNode;
              break;
            }
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr=this.root) {
    if (!this.root) {
      this.root = new Node(val);
    } else if (val > curr.val) {
      if (curr.right) this.insertRecursively(val, curr.right);
      else curr.right = new Node(val);
    } else {
      if (curr.left) this.insertRecursively(val, curr.left);
      else curr.left = new Node(val);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root;
    while (curr) {
      if (val > curr.val) curr = curr.right;
      else if (val < curr.val) curr = curr.left;
      else return curr;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr=this.root) {
    if (!curr) return undefined;
    else if (val > curr.val) return this.findRecursively(val, curr.right);
    else if (val < curr.val) return this.findRecursively(val, curr.left);
    else return curr;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(curr=this.root, output=[]) {
    output.push(curr.val);
    if (curr.left) this.dfsPreOrder(curr.left, output);
    if (curr.right) this.dfsPreOrder(curr.right, output);
    return output;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(curr=this.root, output=[]) {
    if (curr.left) this.dfsInOrder(curr.left, output);
    output.push(curr.val);
    if (curr.right) this.dfsInOrder(curr.right, output);
    return output;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(curr=this.root, output=[]) {
    if (curr.left) this.dfsPostOrder(curr.left, output);
    if (curr.right) this.dfsPostOrder(curr.right, output);
    output.push(curr.val);
    return output;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root],
      stack = [];
    while (queue.length) {
      let curr = queue.shift();
      stack.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return stack;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
