class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    while (current && count !== index) {
      count++;
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;

      if (!current.next) {
        this.tail = previous;
      }
    }
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

const list = new LinkedList();

list.append('apple');
list.append('banana');
list.append('cherry');

console.log('Size after append:', list.size());

list.prepend('avocado');
console.log('Size after prepend:', list.size());

const secondNode = list.getAt(1);
console.log('Element at index 1:', secondNode ? secondNode.data : null);

list.removeAt(2);
console.log('Size after removal:', list.size());

console.log('All elements:');
list.print();

console.log('Head:', list.head ? list.head.data : null);
console.log('Tail:', list.tail ? list.tail.data : null);

module.exports = LinkedList;
