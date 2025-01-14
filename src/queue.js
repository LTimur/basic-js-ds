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
class Queue {
  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  getUnderlyingList() {
    let currentNode = this.head;
    let linkedList = null;
    let currentListNode = null;
  
    while (currentNode !== this.tail) {
      if (linkedList === null) {
        linkedList = { value: this.storage[currentNode], next: null };
        currentListNode = linkedList;
      } else {
        currentListNode.next = { value: this.storage[currentNode], next: null };
        currentListNode = currentListNode.next;
      }
      currentNode++;
    }
  
    return linkedList;
  }
  
  enqueue(value) {
    this.storage[this.tail] = value
    this.tail++
  }

  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }
}

module.exports = {
  Queue
};
