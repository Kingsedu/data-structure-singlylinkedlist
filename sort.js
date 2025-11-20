console.log("ITS STARTED HERE");
// the merge sort, the 2 arrays must be sorted before working
function merger(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
function splitting(arr) {
  console.log("begin here");
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = splitting(arr.slice(0, mid));
  let right = splitting(arr.slice(mid));
  return merger(left, right);
}
// console.log(splitting([4, 5, 2, 3, 4, 5, 6, 8, 9]));
// console.log(merger([1, 10, 50], [2, 14, 99, 100]));
// console.log(merger([4, 5, 2, 3], [4, 5, 6, 8, 9]));

function quickSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  if (arr.length <= 1) return arr;
  let lastItem = arr.pop();
  let arrLeft = [];
  let arrRight = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lastItem) {
      arrLeft.push(arr[i]);
    } else {
      arrRight.push(arr[i]);
    }
  }
  console.log(arrLeft);
  console.log(arrRight);
  return [...quickSort(arrLeft), lastItem, ...quickSort(arrRight)];
}
// console.log(quickSort([2, 1, 3, 5, 6, 4]));

function insertionSorting(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return undefined;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(insertionSorting([2, 1, 3, 5, 6, 4]));

const objectValue = {
  chinedu: 23,
  neddy: 45,
};

// objectValue.chinedu = 78;
// console.log(objectValue);

// const getDigit = (num, target) => {
//   let numString = num + "";
//   return numString.split("")[target];
// };

// console.log(getDigit(1234, 0));

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// 7232
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const nodeVal = new Node(val);
    if (this.length === 0) {
      this.head = nodeVal;
      this.tail = this.head;
    } else {
      this.tail.next = nodeVal;
      this.tail = nodeVal;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let value = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    const newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get_method(val) {
    if (this.length === 0) return null;
  }
}
// const singlyLinked = new SinglyLinkedList();
// singlyLinked.push("C");
// singlyLinked.push("H");
// singlyLinked.push("I");
// singlyLinked.push("N");

// console.dir(singlyLinked, { depth: null, color: true });
// console.log(singlyLinked.pop());
// console.log(singlyLinked.shift());
// console.log(singlyLinked.unshift("O"));
// console.dir(singlyLinked, { depth: null, color: true });

// function anas() {
//   dev();

//   function dev() {
//     console.log(age);
//   }
// }
// var age = 10;

// anas();

//----dev()

//ANCHOR -
/* 
this.head--|
           |
      [new Node]-----next--null
this.tail---|
*/
/* this.tail.next ----> nodeVal
  this.tail ------> nodeVal*/
class NodePractise {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const new_node = new NodePractise(val);
    // console.log(new_node);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      Boolean(this.head);
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }
  shift_method() {
    if (this.length === 0) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    if (this.length === 0) {
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  unshift_method(val) {
    const new_node = new NodePractise(val);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      const temp = this.head; // temporary storing the head
      this.head = new_node; // this line is correct,
      new_node.next = temp;
    }
    this.length++;
    return this;
  }
  get_method(val) {
    if (val > this.length || val < 0) return undefined;
    let current = this.head;
    let count = 0;
    while (count < val) {
      current = current.next;
      count++;
    }
    return current;
  }

  set_method(index, val) {
    const node = this.get_method(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
      if (current === null) {
        console.log("current, actually hit the end of the node", current);
      }
    }
  }

  pop_method() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      const tempVal = this.head;
      this.head = null;
      this.tail = null;
      return tempVal;
    }
    let current = this.head;
    let preValue = current;
    while (current.next) {
      preValue = current;
      current = current.next;
    }
    console.log("this is the current", current);
    console.log("this is the prevalue", preValue);
    let temp = preValue;
    this.tail = temp;
    temp.next = null;
    this.length--;
    return current;
  }
  find_method(val) {
    if (this.length === 0) return undefined;
    let current = this.head;
    // if (this.length === 1) {
    //   if (current.val === val) {
    //     return current;
    //   }
    // }
    while (current) {
      if (current.val === val) {
        return current;
      } else {
        current = current.next;
      }
    }
    console.log(current);

    return null;
  }
  insert_method(value, index) {
    const newValue = new NodePractise(value);
    if (index >= this.length) {
      return this.push(value);
    }
    if (index <= 0) {
      return this.unshift_method(value);
    }
    let count = 0;
    let current = this.head;
    let prevalue = null;
    while (current && count < index) {
      prevalue = current;
      console.log(count);
      current = current.next;
      count++;
    }
    prevalue.next = newValue;
    newValue.next = current;
    console.log("this is the prevalue", prevalue);

    console.log("this is the current", current);
    this.length++;
    return this;

    // console.log(count);
    /* let tempStore = prevalue;
    tempStore.next = null;
    prevalue = newValue;
    newValue.next = current;
    this.length++;
    return this; */
  }

  remove_method(num) {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    if (this.length === 1) {
      if (current.val === num) {
        this.head = null;
        this.tail = null;
        return current;
      }
    }
    let checkValue = true;
    let previous = current;
    while (current && checkValue) {
      if (current.val === num) {
        checkValue = false;
      }
      previous = current;
      current = current.next;
    }
    console.log("This is the previous", previous);
    console.log("This is the current ", current);
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift_method();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get_method(index - 1);
    let removed = previousNode.next;
    this.length--;
    return removed;
  }

  reverse_link_method() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
const practise = new SinglyLinked();
// console.dir(practise, { depth: null, color: true });
practise.push("C");
practise.push("H");
practise.push("I");
practise.push("N");
// console.log(practise.shift_method());
practise.unshift_method("1");
practise.unshift_method("0");
// console.log(practise.traverse());
// console.log(practise.pop_method());
// console.log(practise.find_method("I"));
// console.log(practise.insert_method("*", 2));
// console.log(practise.remove_method("I"));
console.log(practise.get_method(0));
// console.dir(practise, { depth: null, color: true });
