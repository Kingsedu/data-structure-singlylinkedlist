//concat

const { performance } = require("perf_hooks");
// console.log("hello".concat(" world"));
// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const combined = a.concat(b);
// console.log(combined);
// const

/*
Word Break (Medium)

Course Schedule II (Medium)

Implement Trie (Medium)

Minimum Size Subarray Sum (Medium)

Kth Largest Element in an Array (Medium)

Word Search II (Hard)

Shortest Palindrome (Hard)

4Sum II (Medium)

132 Pattern (Medium)

Minimum Unique Word Abbreviation (Hard)

Shortest Subarray with Sum at Least K (Hard)

Clone Graph (Medium)

LRU Cache (Medium)

Sliding Window Maximum (Hard)

Maximum XOR of Two Numbers in an Array (Medium)

Top K Frequent Elements (Medium)

Longest Increasing Subsequence (Medium)

Number of Ways to Make Change (Hard)

Partition Equal Subset Sum (Medium)

Reconstruct Itinerary (Hard)

Serialize and Deserialize N-ary Tree (Hard)

Minimum Cost to Hire K Workers (Hard)

Find K Pairs with Smallest Sums (Medium)

Encode String with Shortest Length (Hard)

Minimum Moves to Equal Array Elements II (Medium)

Assign Cookies (Medium)

LFU Cache (Hard)

Minimum Number of Increments on Subarrays to Form Target Array (Hard)

Minimum Cost to Cut a Stick (Hard)

Maximize Score After N Operations (Hard)

Number of Good Subarrays (Medium)

Minimum Number of Days to Eat N Oranges (Hard)

K-th Smallest Instructions (Hard)

Minimum Number of Removals to Make Mountain Array (Hard)

Count All Valid Pickup and Delivery Options (Hard)

Number of Good Ways to Split a String (Medium)

Minimum Initial Energy to Finish Tasks (Hard)

Minimum Insertions to Balance a Parentheses String (Medium)

Minimum Swaps to Arrange a Binary Grid (Medium)

Minimum Number of Operations to Move All Balls to Each Box (Medium)

Minimum Number of Days to Disconnect Island (Medium)

Closest Subsequence Sum (Hard)

Maximize Palindrome Length from Subsequences (Hard)

Stone Game VI (Medium)

Minimum Degree of a Connected Trio in a Graph (Hard)

Maximum Score from Removing Stones (Medium)

Minimum Length of String After Deleting Similar Ends (Medium)

Minimum Possible Integer After At Most K Adjacent Swaps On Digits (Hard)

Minimum Operations to Make a Subsequence (Hard)

Maximize Hamming Distance After Swap Operations (Medium)

How to get the most out of these:

Choose 2-3 at a time instead of all 50 at once — you’ll retain more.

Time yourself (say 30–60 minutes each) and try without looking at hints.

Use your stack/webdev/dev background (you know JS/TS, React, architecture) to think about optimality: time/space trade-offs, patterns.

After you’ve attempted one, send me your code or explain your reasoning and we’ll review it together—strengths, pitfalls, improvements. 
*/
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// const t1 = performance.now();
// addUpTo(1_000_000_000);
// const t2 = performance.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// function addShortFormulat(n) {
//   return (n * (n + 1)) / 2;
// }
// // number of operation = 3
// function countUpAndDown(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
// }
// big 0 notation = 0(n) + O(n) = O(2n)
// countUpAndDown(10);

// function printAllPairs(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// pseudocode-- first deal with edge cases,
//

// function toMinutes(timeStr) {
//   const [hr, min] = timeStr.split(":").map(Number);
//   return hr * 60 + min;
// }

// function scheduleEvents(events) {
//   if (events.length === 0) return [];
//   if (!Array.isArray(events)) return "Invalid input";
//   let scheduledEvents = [];
//   let eventStart;
//   let eventEnd;
//   for (let i = 0; i < events.length; i++) {
//     eventStart = toMinutes(events[i].start);
//     eventEnd = toMinutes(events[i].end);
//     scheduledEvents.push({ start: eventStart, end: eventEnd });
//   }

//   for(let i = 0; i < scheduledEvents.length; i++){
//     for(let j = i + 1; j < scheduledEvents.length; j++){
//       if(scheduleEvents[i].start === )
//     }
//   }
//   return scheduledEvents;
// }

// console.log(
//   scheduleEvents([
//     { id: 1, name: "Meeting", start: "09:30", end: "10:15" },
//     { id: 2, name: "Code Review", start: "10:00", end: "11:00" },
//     { id: 3, name: "Standup", start: "09:00", end: "09:30" },
//   ])
// );

// const schEvents = (events) => {
//   if (events.length === 0) return [];
//   if (!Array.isArray(events)) return "Invalid input";

//   let eventsFormatted = events.map((eventFormated) => {
//     return {
//       ...eventFormated,
//       start: toMinutes(eventFormated.start),
//       end: toMinutes(eventFormated.end),
//     };
//   });
//   const arrSort = eventsFormatted.sort((a, b) => a.start - b.start);
//   for (let i = 0; i < arrSort.length - 1; i++) {
//     if (i === 0) {
//       arrSort[i].overlap = false;
//     } else {
//       const prevEvent = arrSort[i - 1];
//       const currEvent = arrSort[i];
//       currEvent.overlap =
//         currEvent.start < prevEvent.end && currEvent.end > prevEvent.start;
//     }
//   }
//   return arrSort;
// };

// console.log(
//   schEvents([
//     { id: 1, name: "Meeting", start: "09:30", end: "10:15" },
//     { id: 2, name: "Code Review", start: "10:00", end: "11:00" },
//     { id: 3, name: "Standup", start: "09:00", end: "09:30" },
//   ])
// );
// const events = [
//   { id: 1, name: "Meeting", start: "09:30", end: "10:15" },
//   { id: 2, name: "Code Review", start: "10:00", end: "11:00" },
//   { id: 3, name: "Standup", start: "09:00", end: "09:30" },
// ];

// const mapEnteries = events.map((event) => [event.id, event]);
// // console.log(mapEnteries);

// const eventMap = new Map(mapEnteries);
// eventMap.set(4, { id: 4, name: "Planning", start: "11:00", end: "12:00" });
// // console.log(eventMap.get(2));
// const deletedItem = eventMap.delete(3);
// console.log("Deleted Item:", deletedItem);
// console.log(eventMap.delete(3));
// for (const [key, value] of eventMap) {
//   console.log(key, value);
// }

function createRateLimiter(maxTokens, refillInterval, refillAmount) {
  const users = new Map();
  return function rateLimiter(userId) {
    const now = Date.now();

    let user = users.get(userId) || {
      tokens: maxTokens,
      lastRefill: now,
    };

    const elapsed = now - user.lastRefill;
    // Calculate how many refill periods passed
    const refillPeriods = Math.floor(elapsed / refillInterval);

    if (refillPeriods > 0) {
      // Refill tokens, capped at maxTokens
      user.tokens = Math.min(
        maxTokens,
        user.tokens + refillAmount * refillPeriods
      );
      user.lastRefill += refillPeriods * refillInterval;
    }

    // Check if user has tokens
    if (user.tokens > 0) {
      user.tokens -= 1;
      users.set(userId, user);
      return true; // allowed
    } else {
      users.set(userId, user);
      return false; // rate limited
    }
  };
}
// first this is a recursive problem

// const anagrams = (words, group = []) => {
//   if (!Array.isArray(words)) return "Invalid input";
//   if (words.length === 0) return [];
//   // trying to use words to check each word,
//   let arrayWord = [];
//   const lastWord = words.pop();
//   // console.log("lastWord:", lastWord);
//   // console.log("words:", words);
//   const lastwordLength = lastWord.length;
//   const checkWords = new Set(lastWord);
//   console.log(checkWords);
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length !== lastwordLength) continue;
//   }
// };
// console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// // function groupAnagrams(words) {
//   const map = new Map();
// }
// const filteredArr = (arr, fn) => {
//   // big - O notation O(n)
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// const firstNonReapeatingChar = (str) => {
//   //dea with edge cases
//   if (typeof str !== "string" || str.length === 0) return null;

//   const objectChar = {};
//   for (let i = 0; i < str.length; i++) {
//     if (objectChar[str[i]]) {
//       objectChar[str[i]] += 1;
//     } else {
//       objectChar[str[i]] = 1;
//     }
//   }

//   const enteries = Object.entries(objectChar);
//   const newMap = new Map(enteries);
//   console.log(newMap);
//   const keys = Object.keys(objectChar).find((key) => objectChar[key] === 1);
//   return str.indexOf(keys);
// };

// console.log(firstNonReapeatingChar("swiss"));

// const newMap = new Map();

// newMap.set("a", 1);
// newMap.set("b", 2);
// newMap.set("c", 3);
// console.log(newMap);
// for (const [key, value] of newMap) {
//   console.log(key, value);
// }
/* 
push - O(1)
pop - O(1)
shift - O(n)
unshift - O(n)  
concat - O(n)
slice - O(n)
splice - O(n)
sort - O(n log n)------> logarithmic time
forEach/map/filter/reduce - O(n)
*/
/* */
// function stringFunction(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += str[i];
//   }
//   console.log(newStr);
//   return newStr;
// }

// stringFunction("hello world");
// const arr = Array.from({ length: 5 }, (_, index) => index);
// console.log(arr);
// const arrString = Array.from("hello");

// const rand = Array.from({ length: 10 }, () => Math.random().toFixed(2));
// console.log(rand);

// const arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr);

const new_map = new Map();
new_map.set("name", "Alice");
new_map.set("age", 30);
new_map.set("city", "New York");
// console.log(new_map);

// for (const [key, value] of new_map) {
//   console.log(`${key}: ${value}`);
// }
// console.log(Array.isArray(new_map));
// console.log(typeof new_map);
// const entries = Array.from(new_map);
// console.log(entries);
// for (const [key, value] of entries) {
//   console.log(`${key}: ${value}`);
// }

// function groupBy(arr, key) {
//   if (!Array.isArray(arr)) return "Invalid input";
//   if (arr.length === 0) return {};
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     let objValue = arr[i];
//     let groupKey = objValue[key];
//     console.log("groupKey:", groupKey);
//     if (result[groupKey]) {
//       result[groupKey].push(objValue);
//     } else {
//       result[groupKey] = [objValue];
//     }
//   }
//   return result;
// }

// const users = [
//   { name: "Alice", age: 25, city: "Lagos" },
//   { name: "Bob", age: 30, city: "Abuja" },
//   { name: "Charlie", age: 25, city: "Lagos" },
//   { name: "David", age: 30, city: "Port Harcourt" },
//   { name: "Eve", age: 30, city: "Abuja" },
// ];

// console.log(groupBy(users, "city"));

// let obj = {};
// obj["key"] = [1];
// obj["key"].push(2);
// console.log(obj);
// const { EventEmitter } = require("node:events");
// class MyEvent extends EventEmitter {}
// const myEvent = new MyEvent();
// // rules for event name, it must have ;
// function eventName(event_name) {
//   if (typeof event_name !== "string" || event_name.length === 0)
//     return "Invalid event name";
//   let validName = event_name.split(".");
//   if (validName.length !== 2) return "invalid event name";
//   const value = validName[0];
//   const action = validName[1];
//   if (action === "*") {
//     return event_name.includes(value);
//   }
// }
// // myEvent.on(events, () => {
// //   console.log("Event triggered");
// // });

// console.log(eventName("user.login.success"));

// const { EventEmitter } = require("node:events");
// const { group } = require("node:console");

// class MyEventEmitter extends EventEmitter {
//   constructor() {
//     super();
//     this.wildcardListeners = new Map();
//   }
//   _hasWildcard(eventName) {
//     return eventName.includes("*");
//   }

//   on(eventName, listerner) {
//     if (this._hasWildcard(eventName)) {
//       if (!this.wildcardListeners.has(eventName)) {
//         this.wildcardListeners.set(eventName, []);
//       }
//     }
//   }
// }
/* 
const { EventEmitter } = require("node:events");

class MyEvent extends EventEmitter {
  constructor() {
    super();
    this.wildcardListeners = new Map(); // To store listeners with wildcards
  }

  // Override 'on' to handle wildcards
  on(eventName, listener) {
    if (this._hasWildcard(eventName)) {
      // Store wildcard listeners separately
      if (!this.wildcardListeners.has(eventName)) {
        this.wildcardListeners.set(eventName, []);
      }
      this.wildcardListeners.get(eventName).push(listener);
      return this;
    } else {
      // Regular event: use parent class on()
      return super.on(eventName, listener);
    }
  }

  // Override 'off' to handle wildcard listeners removal
  off(eventName, listener) {
    if (this._hasWildcard(eventName)) {
      if (!this.wildcardListeners.has(eventName)) return this;
      const listeners = this.wildcardListeners.get(eventName);
      const index = listeners.indexOf(listener);
      if (index !== -1) listeners.splice(index, 1);
      if (listeners.length === 0) this.wildcardListeners.delete(eventName);
      return this;
    } else {
      return super.off(eventName, listener);
    }
  }

  // Override 'emit' to emit to both regular and wildcard listeners
  emit(eventName, ...args) {
    let emitted = super.emit(eventName, ...args); // Emit to regular listeners

    // Emit to all wildcard listeners whose pattern matches eventName
    for (const [pattern, listeners] of this.wildcardListeners.entries()) {
      if (this._matches(pattern, eventName)) {
        for (const listener of listeners) {
          listener(...args);
          emitted = true;
        }
      }
    }
    return emitted;
  }

  // Helper: Check if eventName contains wildcard '*'
  _hasWildcard(eventName) {
    return eventName.includes("*");
  }

  // Helper: Check if pattern with wildcards matches actual eventName
  _matches(pattern, eventName) {
    const patternParts = pattern.split(".");
    const eventParts = eventName.split(".");

    if (patternParts.length !== eventParts.length) return false;

    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i] === "*") continue; // Wildcard matches anything at this level
      if (patternParts[i] !== eventParts[i]) return false;
    }
    return true;
  }
}

// ----------- Usage Example -----------

const myEvent = new MyEvent();

myEvent.on("user.login", () => console.log("User logged in"));
myEvent.on("user.*", () => console.log("User event happened"));
myEvent.on("*", () => console.log("Some top-level event"));

myEvent.emit("user.login");
// Output:
// User logged in
// User event happened
// Some top-level event

myEvent.emit("order.created");
// Output:
// Some top-level event
*/
// if you supply an initial element in the value, it uses it, if not it uses the first element in the value,
// acc = callback(acc, curr)
// acc = 0
/* 
 acc = 0 --------------> first stage,
 acc = 0 + 1 = 1 -------> second stage
 acc = 1 + 2 = 3 --------> third stage
 acc = 3 + 3 = 6 --------> fouth stage

 for(let i = 0; i < arr.length; i++){
 let curr = arr[i]
 acc = acc + curr
 acc += curr
 }
*/
// const arr = [1, 2, 2, 3, 3, 4];
// const sum = arr.reduce((acc, cur, idx) => {
//   return acc + cur;
// }, 0);
// console.log(sum);
// const people = [
//   { name: "John", city: "Lagos" },
//   { name: "Mary", city: "Abuja" },
//   { name: "Ben", city: "Lagos" },
// ];
// const grouped = people.reduce((acc, curr) => {
//   if (!acc[curr.city]) {
//     acc[curr.city] = [];
//   } else {
//     acc[curr.city].push(curr);
//   }
//   return acc;
// }, {});
// console.log(grouped);
/* 
curr = {name: "John"}


*/

// const groupe = people.reduce((acc, curr) => {
//   if (!acc[curr.city]) {
//     acc[curr.city] = [];
//   }
//   acc[curr.city].push(curr);

//   return acc;
// }, {});
// console.log(groupe);
//ANCHOR - using ternaary experssion

const ternaryGrouped = people.reduce((acc, curr) => {
  (acc[curr.city] ||= []).push(curr);

  return acc;
}, {});

// console.log(ternaryGrouped);

// const ternaryGroupedy = people.reduce((acc, curr) => {
//   acc[curr.city] = acc[curr.city] ? [...acc[curr.city], curr] : [curr];
//   return acc;
// }, {});

// const arrSet = [1, 2, 2, 3, 3, 4];
// const set = arrSet.reduce((acc, curr) => {
//   acc.add(curr);
//   return acc;
// }, new Set());

// console.log(set);

function countFrequency(str) {
  if (typeof str !== "string" || str.length === 0) {
    return `invalid argument`;
  }
  const accumulatedObject = str.split("").reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return accumulatedObject;
}

// console.log(countFrequency("missispi"));

function same(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length === arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    let squareKey = key ** 2;
    if (!(squareKey in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[squareKey] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([10, 5, 1, 3, 7, 5, 2], [100, 1, 9, 25, 4, 25, 49]));

function validAnagram(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  if (str1.length !== str2.length) return false;
  let counterObject1 = {};
  let counterObject2 = {};
  for (let str of str1) {
    counterObject1[str] = (counterObject1[str] || 0) + 1;
  }
  for (let str of str2) {
    counterObject2[str] = (counterObject2[str] || 0) + 1;
  }
  for (let key in counterObject1) {
    if (!(key in counterObject2)) {
      return false;
    }
    if (counterObject1[key] !== counterObject2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram(" ", " "));
// console.log(validAnagram("cineman", "icemann"));

function sumZero(arr) {
  /*
  1- check of edge cases, the arr but satisfy that its an array, and the arr length but be greater than 1 
  2- using multiply pointer, you can check, if the add up to they do, you can remove them and put them in an array
  3- repeat the action until the array has been passed through by the multiple pointers,

  */
  if (!Array.isArray(arr)) return undefined;
  if (arr.length <= 1) return undefined;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) return [arr[(left, arr[right])]];
    if (sum > 0) right--;
    else left++;
  }
  return undefined;
}
//REVIEW -  work on this code, it looks possible
// function sumToZero(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length <= 1) return undefined;

//   let left = 0;
//   let right = 1;
//   while (left < arr.length - 1) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) return [arr[left], arr[right]];
//     right++;
//     if (right < arr.length) {
//       continue;
//     }
//     if (right === arr.length) {
//       left++;
//       right++;
//     }
//   }
// }

function countUniqueValue(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;
  let left = 0;
  let right = left + 1;
  // big-o-notation of value o(nlog n)
  // arr.sort((a, b) => a - b);
  let countUnique = 1;
  // big-0-notation of o(n)
  while (left < arr.length - 1) {
    if (arr[left] !== arr[right]) {
      countUnique++;
    }
    left++;
    right++;
  }
  return countUnique;
}

// console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValue([]));
// console.log(countUniqueValue([-2, -1, -1, 0, 1]));

function countUniqueValuesAgain(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// function maxSubarraySum(arr, target) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return arr;
//   if (target > arr.length) return null;
//   let left = 0;
//   let right = target;
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     maxSum += arr[right];
//   }
// }

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function searchIndex(arr, num) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return null;
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

// console.log(searchIndex([1, 2, 3, 4, 5, 6], 4));
// find method returns the number,
// while findIndex returns the index of the number that passes the condition

function search(arr, val) {
  // first this array must be sorted,
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currElement = arr[middle];
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

function sameFrequency(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return false;
  const numStr1 = num1 + "";
  const numStr2 = num2 + "";
  let counter1 = {};
  let counter2 = {};
  for (let val of numStr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of numStr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

function takeShower() {
  return "showering";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work");
}

// console.log(wakeUp());

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  return countDown(num);
}

// countDown(10);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(10));
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(5));
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const linearSearch = (arr, value) => {
  if (!Array.isArray(arr) || arr.length === 0) return -1;
  if (value > arr.length) return -1;
  let i = 0;
  while (i < arr.length) {
    if (value === arr[i]) {
      return i;
    }
    i++;
  }
  return -1;
};
// console.log(linearSearch([1, 2, 3, 4, 8, 9, 4, 3, 5], 5));
function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 8, 9, 4, 3, 5], 5));

function howManyCount(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return 0;
  if (typeof str1 !== "string" || typeof str2 !== "string") return 0;
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      console.log(str1[i], str2[j]);

      if (str2[j] !== str1[i + j]) {
        console.log("Break");
        break;
      }
      if (j === str2.length - 1) {
        count++;
      }
    }
  }
  return count;
}

// console.log(howManyCount("lorie loled", "lol"));

// function bubbleSort(arr) {
//   //edge cases------->
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return [];
//   let noSwap;
//   for (let i = 0; i < arr.length; i++) {
//     // so the inter loop is assuming that every loop the highest number is sinked to th bottom
//     noSwap = true;
//     console.log(arr[i], "this is the index that the inner loop is runing on");
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       console.log(
//         `${arr[j]}, and ${arr[j + 1]}`,
//         "this is what we are comparing"
//       );
//       console.log(arr);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([5, 3, 4, 1, 2]));

/* 
store the first element as the smallest value, you've seen so far
compare it to the next item, if its smaller, the next item becomes the smallest,
*/

// function selectionSort(arr) {
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let idex = 0;
//       let smallestValue = arr[idex]; /// the first assumption
//       if (smallestValue < arr[j + 1]) {
//         smallestValue = arr[j + 1];
//       }
//     }
//   }
// }

// function selectionSort(arr) {
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return [];

//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }
//   return arr;
// }
// we assuming that the first element is already sorted;
// insertion code, pick the second element in the array;
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element, and if it is in the correct order, iterate through the sorted portion

// function insertionSort(arr) {
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return [];

//   for (let i = 0; i < arr.length; i++) {
//     console.log(i, "outer loop index %%%%%%%%%%%%%");
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j] < arr[j - 1]) {
//         //swap;
//         console.log(
//           arr[j],
//           arr[j - 1],
//           "the 2 elements im comparing***********"
//         );
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         console.log(arr, "the array of swapping *****************");
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([3, 1, 5, 4, 2]));

// for (let i = 1; i < arr.length; i++) {
//   let current = arr[i];
//   let j = i - 1;

//   while (j >= 0 && arr[j] > current) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = current;
// }
// // merging by splitting and adding array

function mergerSort(arr1, arr2) {
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
  return result;
}
function splittingFunc(arr) {
  if (arr.length <= 1) return null;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return {
    left,
    right,
  };
}
console.log(splittingFunc([4, 5, 2, 3, 4, 5, 6, 8, 9]));

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
