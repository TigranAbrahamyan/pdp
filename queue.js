const LinkedList = require('./linked_list');

class Queue {
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
    return this.list.getAt(0);
  }
}

class Queue2 {
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

const queue1 = new Queue();

queue1.push('task1');
queue1.push('task2');
queue1.push('task3');

console.log('First item:', queue1.peek());
console.log('Shifted item:', queue1.shift());
console.log('Next item after shift:', queue1.peek());

const queue2 = new Queue2();

queue2.push('email1');
queue2.push('email2');
queue2.push('email3');

console.log('First email in queue:', queue2.peek());
console.log('Processing email:', queue2.shift());
console.log('Next in queue:', queue2.peek());
