// revision of the Binary Tree Search,
// First - you will get the node, that you want to insert
// Binary Search Tree---> concepts- the left side is always lesser than the right, the right side is greater than the left,
// it doesn't store Duplicate values

class NodeBst {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0; // tto check the first size of the tree
  }
  insertBST(value) {
    const node = new NodeBst(value);
    if (!this.root) {
      this.root = node;
      ++this.size;
      return this;
    }
    let current = this.root;
    // let keepLooping = true;
    // we r coming back to this while loop to avoid, infinity loop
    while (current) {
      if (current.val === value) break;
      // console.log(current.val);
      if (value < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  findMethodBST(num) {
    let current = this.root;
    let isFound = true;
    // edge cases of this findMethod, incase where there is no root, we return null, the tree is empty
    if (current === null) {
      return null;
    }
    while (current && isFound) {
      // if the num is less than the current.val, meaning we are going to the left hand side;
      if (num === current.val) {
        isFound = false;
        return current;
      }
      if (num < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
  // there was a mistake in this code
  // breath_search_first() {
  //   let result = [];
  //   let current = this.root;
  //   let queue = [];
  //   let node;
  //   queue.push(current.val);
  //   while (queue.length && current) {
  //     node = queue.pop();
  //     result.push(node.val);
  //     if (node.left) {
  //       queue.push(node.val);
  //     }
  //     if (node.right) {
  //       queue.push(node.val);
  //     }
  //   }

  //   return result;
  // }

  breath_first_search() {
    let result = [];
    let queue = [];
    let current = this.root;
    let node;
    if (!current) return result;
    queue.push(current);
    console.log(queue);
    while (queue.length) {
      node = queue.shift();
      console.log(node);
      result.push(node.val);
      console.log(result);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  depth_first_search_pre_order() {
    let current = this.root;
    let data = [];
    function tranverse(node) {
      if (!node) return data;
      data.push(node.val);
      if (node.left) tranverse(node.left);
      if (node.right) tranverse(node.right);
    }
    tranverse(current);
    return data;
  }
  depth_first_search_in_order() {
    let current = this.root;
    let data = [];
    function tranverse(node) {
      if (!node) return data;
      if (node.left) tranverse(node.left);
      data.push(node.val);
      if (node.right) tranverse(node.right);
    }
    tranverse(current);
    return data;
  }
  depth_first_search_post_order() {
    let current = this.root;
    let data = [];
    function tranverse(node) {
      if (!node) return data;
      if (node.left) tranverse(node.left);
      if (node.right) tranverse(node.right);
      data.push(node.val);
    }
    tranverse(current);
    return data;
  }
}

const binarySearch = new BinarySearchTree();
// binarySearch.insertBST(11);
// binarySearch.insertBST(10);
// binarySearch.insertBST(25);
// binarySearch.insertBST(7);
// binarySearch.insertBST(8);
// binarySearch.insertBST(15);
// binarySearch.insertBST(20);
// binarySearch.insertBST(4);
// binarySearch.insertBST(5);
// console.log(binarySearch.breath_first_search());
binarySearch.insertBST(10);
binarySearch.insertBST(6);
binarySearch.insertBST(15);
binarySearch.insertBST(3);
binarySearch.insertBST(8);
binarySearch.insertBST(20);

console.log(binarySearch.depth_first_search_pre_order());
console.log(binarySearch.depth_first_search_post_order());

// console.dir(binarySearch, { depth: Infinity, colors: true });
/*
let me explain this post order depth_first_search
if(node.left) transeve(node.left)
transerve(10)----[pause]
transerver(6)-----[pause]
transerve(3)-----[pause]-- return 3 first
transsrve(null)----exit
**********************
[3, ]
transerve(10)--[pause]
transervs(6)---[pause]
transevesv(3)--[running].  returnn 3----> pop of the call stack
****************************
transerve(10)----[pause]
transerve(6)-----[pause]
if(node.right) transesr(8)
transerve(8) -----[running]
****************************
transerve(10)----[pause]
transerve(6)-----[pause]
transerve(8) -----[pause]
transerve(null)-----exist
[3,  6, 8 ]
if(node.right) transerve(node.right)
transevre(10)[pause]
transevr(15) pause
transevr(20) pause
so this the push function changes, it inserts before transerve
[3, 6, 8, 10, 15, 20]
*/
