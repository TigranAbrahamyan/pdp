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
