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

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log('Peek:', stack1.peek());
console.log('Pop:', stack1.pop());
console.log('Peek after pop:', stack1.peek());

const stack2 = new Stack2();

stack2.push('apple');
stack2.push('banana');
stack2.push('cherry');

console.log('Peek:', stack2.peek());
console.log('Pop:', stack2.pop());
console.log('Peek after pop:', stack2.peek());
