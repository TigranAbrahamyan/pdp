const LinkedList = require('../linked_list');

class QueueWithLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.append(data);
  }

  shift() {
    const first = this.peek();
    this.list.removeAt(0);
    return first;
  }

  peek() {
    const peekFirst = this.list.getAt(0);
    return peekFirst?.data;
  }
}

class QueueWithArray {
  constructor() {
    this.list = [];
  }

  push(data) {
    this.list.push(data);
  }

  shift() {
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }
}

const queueWithLinkedList = new QueueWithLinkedList();

queueWithLinkedList.push('task1');
queueWithLinkedList.push('task2');
queueWithLinkedList.push('task3');

console.log('*** queue with linkedlist ***');
console.log('First item:', queueWithLinkedList.peek());
console.log('Shifted item:', queueWithLinkedList.shift());
console.log('Next item after shift:', queueWithLinkedList.peek());

const queueWithArray = new QueueWithArray();

queueWithArray.push('email1');
queueWithArray.push('email2');
queueWithArray.push('email3');

console.log('\n*** queue with array ***');
console.log('First email in queue:', queueWithArray.peek());
console.log('Processing email:', queueWithArray.shift());
console.log('Next in queue:', queueWithArray.peek());

module.exports = { QueueWithLinkedList, QueueWithArray };
