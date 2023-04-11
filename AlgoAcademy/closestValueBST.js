// Write a function that takes in a Binary Search Tree and a target integer value and returns the closest value to that target contained in the BST.
// You can assume that there will only be one closest value.
// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satifies the
// BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node
//  to its right; and its children nodes are either valid BST nodes themselves of None / null.


function findClosestValueInBst(tree, target) {
    let closest = tree.value
    let currentNode = tree
    while (currentNode !== null) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value
    }
      if (target < currentNode.value) {
        currentNode = currentNode.left
      } else if (target > currentNode.value) {
        currentNode = currentNode.right
      } else {
        break
      }
    }
    return closest
  }
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
// 
