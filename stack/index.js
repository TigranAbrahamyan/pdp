const LinkedList = require('../linked_list');

class StackWithLinkedList {
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
    const peekLast = this.list.getAt(this.list.size() - 1);
    return peekLast?.data;
  }
}

class StackWithArray {
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

const stackWithLinkedList = new StackWithLinkedList();

stackWithLinkedList.push(10);
stackWithLinkedList.push(20);
stackWithLinkedList.push(30);

console.log('*** stack with linkedlist ***');
console.log('Peek:', stackWithLinkedList.peek());
console.log('Pop:', stackWithLinkedList.pop());
console.log('Peek after pop:', stackWithLinkedList.peek());

const stackWithArray = new StackWithArray();

stackWithArray.push('apple');
stackWithArray.push('banana');
stackWithArray.push('cherry');

console.log('\n*** stack with array ***');
console.log('Peek:', stackWithArray.peek());
console.log('Pop:', stackWithArray.pop());
console.log('Peek after pop:', stackWithArray.peek());

module.exports = { StackWithLinkedList, StackWithArray };
