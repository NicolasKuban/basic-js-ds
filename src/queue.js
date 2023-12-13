const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
*/
class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  getUnderlyingList() {
    return this.first
  }

  enqueue(value) {
    let node = new Node(value)

    if (this.first) {
      this.last.next = node
      this.last = node
    } else {
      this.first = node
      this.last = node
    }
    this.length += 1
  }

  dequeue() {
    let value = this.first.value
    this.first = this.first.next
    this.length -= 1
    return value
  }
}

// let queue = new Queue();
// console.log(queue.enqueue(1)); // adds the element to the queue
// console.log(queue.head)
// console.log(queue.enqueue(3)); // adds the element to the queue
// // console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }



module.exports = {
  Queue
};
