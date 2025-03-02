const LinkedList = require('./linked_list');

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.append(data);
  }

  pop() {
    const last = this.peek();
    this.list.removeAt(this.list.size() - 1);
    return last;
  }

  peek() {
    console.log(this.list.size());
    return this.list.getAt(this.list.size() - 1);
  }
}

class Stack2 {
  constructor() {
    this.list = [];
  }

  push(data) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list[this.list.length - 1];
  }
}
