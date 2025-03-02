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
