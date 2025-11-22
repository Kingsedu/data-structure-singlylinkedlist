// doing the double linked list, the difference is that it has a previous
const util = require("node:util");
class Node {
  constructor(num) {
    this.num = num;
    this.previous = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val); // creating a new node
    if (this.length === 0) {
      // checking if the length is 0
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      this.tail.next = newNode;
      newNode.previous = oldTail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let removedTail = this.tail;
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return removedTail;
    }
    let newTail = removedTail.previous;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return removedTail;
  }
  shift() {
    if (this.length === 0) return null;
    let removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      newHead.previous = null;
      removedHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return removedHead;
  }
  unshift(val) {
    const new_Head = new Node(val);
    let oldHead = this.head;
    if (this.length === 0) {
      this.head = new_Head;
      this.tail = new_Head;
    } else {
      oldHead.previous = new_Head;
      new_Head.next = oldHead;
      this.head = new_Head;
    }
    this.length++;
    return this;
  }
  //FIXME -
  get(index, num) {
    const numberLength = this.length;
    let count = 0;
    //takes an index and a number and returns the node at that index
    if (index < 0 || index > this.length) return null;
    if (index <= numberLength / 2) {
      let current = this.head;
      let stop = true;
      while (current && stop) {
        if (current.num !== num) {
          current = current.next;
          count++;
        } else {
          stop = !stop;
        }
      }
      return current;
    }
    if (index >= numberLength / 2) {
      let prev = this.tail;
      let stop = true;
      while (prev && stop) {
        if (prev.num !== num) {
          prev = prev.previous;
          count++;
        } else {
          stop = false;
        }
      }
      return prev;
    }
  }

  get_method(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;

      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.previous;
        count--;
      }
      return current;
    }
  }

  set(index, val) {
    let foundNode = this.get_method(index);
    if (foundNode !== null) {
      foundNode.num = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const newNode = new Node(val);
    let beforeNode = this.get_method(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    let removeNode;
    removeNode = this.get_method(0);
    if (!removeNode) return undefined;
    if (this.l)
      if (this.length === 1) {
        removeNode = this.pop();
        this.head = null;
        this.tail = null;
      } else {
        let beforeNode = removeNode.previous;
        let afterNode = removeNode.next;
        removeNode.previous = null;
        removeNode.next = null;
        beforeNode.next = afterNode;
        afterNode.previous = beforeNode;
      }

    return removeNode;
  }
}

// const doubleLinked = new DoubleLinkedList();
// doubleLinked.push("C");
// doubleLinked.push("H");
// doubleLinked.push("I");
// console.log("the removed tail", doubleLinked.pop());
// console.dir(doubleLinked, { depth: null, color: true });

//**************************STACKS AND QUEUES ****************/
//LINK -  STACK-- its follows a principle of LIFO-- data structure
// the last element added to the stack will be the first element removed from the stack
// building a stack,

class StackNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    const new_stack_node = new StackNode(val);
    if (this.length === 0) {
      this.first = new_stack_node;
      this.last = new_stack_node;
    } else {
      let firstFirstly = this.first;
      this.first = new_stack_node;
      this.first.next = firstFirstly;
    }
    return this.length++;
  }

  push_method(val) {
    const new_stack_node = new StackNode(val);
    if (this.length === 0) {
      this.first = new_stack_node;
      this.last = new_stack_node;
    } else {
      this.first.next = new_stack_node;
      this.first = new_stack_node;
    }
    return this.length++;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const stack = new Stack();
// stack.push_method("The");
// stack.push_method("Tech");
// stack.push_method("Billionaire");
// stack.push_method("in the making");
// stack.push_method("********");
// console.dir(stack, { depth: null, color: true });
/* 
the last
    |
    [the amount]-------- the first
    when the length === 0 val = "The"
    *********** *
    the last
    |
    [The]-------- the first

     *********** *
    last
    |
    [Good]<------[the] <------first
*/
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const new_node = new QueueNode(val);
    if (this.size === 0) {
      this.first = new_node;
      this.last = new_node;
    } else {
      let temp = this.last;
      temp.next = new_node;
      this.last = new_node;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return temp;
    }
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

// const queue = new Queue();
// queue.push("C");
// queue.push("H");
// queue.push("I");
// queue.push("N");
// queue.push("E");
// queue.push("D");
// console.log(queue.pop());
// console.dir(queue, { depth: null, color: true });

class NodeBst {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert_method(val) {
    const new_node = new NodeBst(val);
    if (!this.root) {
      this.root = new_node;
      return this;
    } else {
      let current = this.root;
      let keepMoving = true;
      while (keepMoving && current) {
        if (val === current.value) keepMoving = false;
        if (val < current.value) {
          if (current.left === null) {
            current.left = new_node;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = new_node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find_method(val) {
    let keepMoving = true;
    let current = this.root;
    while (keepMoving && current) {
      if (val < current.value) {
        current = current.left;
      } else if (val === current.value) {
        keepMoving = false;
        return current;
      } else {
        current = current.right;
      }
    }
    return null; // fall of the tree is notthing is found
  }

  breath_first_search() {
    let data = [];
    let queue = [];
    let node = this.root;
    //* pushing in the node to the queue, first,
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // travesing doen until, the end of the tree
  //Pre-Order--- visiting from the top, left, left becomes top,
  depth_first_search_pre_order() {
    let current = this.root;
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  depth_first_search_post_order() {
    let current = this.root;
    let data = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  depth_first_search_in_order() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      data.push(node.value);
      traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();
// tree.insert_method(20);
// tree.insert_method(15);
// tree.insert_method(25);
// tree.insert_method(10);
// tree.insert_method(5);
// tree.insert_method(22);
// tree.insert_method(10);
// tree.insert_method(10);
// tree.insert_method(6);
// tree.insert_method(3);
// tree.insert_method(8);
// tree.insert_method(15);
// tree.insert_method(20);

// console.log(tree.find_method(22));
// console.log(tree.breath_first_search());
// console.log(tree.depth_first_search_pre_order());
// console.log(tree.depth_first_search_post_order());
// console.log(tree.depth_first_search_in_order());
// console.log(tree.depth_first_search_pre_order());
// console.dir(tree, { depth: Infinity, colors: true });
// console.log(
//   util.inspect(tree, { showHidden: false, depth: null, colors: true })
// );

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let patentIdx = Math.floor((idx - 1) / 2);
      let temp = this.values[idx];
      let parentValue = this.values[patentIdx];
      if (temp <= parentValue) break;
      this.values[idx] = this.values[patentIdx];
      this.values[patentIdx] = temp;
      idx = patentIdx;
    }
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
  extract_max() {
    console.log(this.values);
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      // console.log(this.values);
      this.values[0] = end;
      // console.log(this.values);
      // sink Down
      this.sinkDown();
    }

    return max;
  }
}

const maxHeap = new MaxBinaryHeap();
console.log(maxHeap.insert(55));
console.log(maxHeap.insert(60));
// console.log(maxHeap.insert(40));
// console.log(maxHeap.extract_max());

// function bubbleUp(arr) {
//   let idx = arr.length - 1;
//   let patentIdx = Math.floor((idx - 1) / 2);
//   let temp = arr[idx];
//   let parentValue = arr[patentIdx];
//   if (temp > parentValue) {
//     arr[idx] = arr[patentIdx];
//     arr[patentIdx] = temp;
//     idx = patentIdx;
//   }
//   return arr;
// }

// console.log(bubbleUp([41, 39, 33, 18, 27, 12, 55]));
