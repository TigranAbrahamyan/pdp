const { QueueWithLinkedList, QueueWithArray } = require('.');

describe('QueueWithLinkedList', () => {
  let queue;

  beforeEach(() => {
    queue = new QueueWithLinkedList();
  });

  test('push and peek', () => {
    queue.push('task1');
    expect(queue.peek()).toBe('task1');
    queue.push('task2');
    expect(queue.peek()).toBe('task1');
  });

  test('push, shift and peek', () => {
    queue.push('task1');
    queue.push('task2');
    queue.push('task3');

    expect(queue.peek()).toBe('task1');
    expect(queue.shift()).toBe('task1');
    expect(queue.peek()).toBe('task2');
    expect(queue.shift()).toBe('task2');
    expect(queue.shift()).toBe('task3');
    expect(queue.peek()).toBeUndefined();
  });

  test('shift on empty queue returns undefined', () => {
    expect(queue.shift()).toBeUndefined();
  });

  test('peek on empty queue returns undefined', () => {
    expect(queue.peek()).toBeUndefined();
  });
});

describe('QueueWithArray', () => {
  let queue;

  beforeEach(() => {
    queue = new QueueWithArray();
  });

  test('push and peek', () => {
    queue.push('email1');
    expect(queue.peek()).toBe('email1');
    queue.push('email2');
    expect(queue.peek()).toBe('email1');
  });

  test('push, shift and peek', () => {
    queue.push('email1');
    queue.push('email2');
    queue.push('email3');

    expect(queue.peek()).toBe('email1');
    expect(queue.shift()).toBe('email1');
    expect(queue.peek()).toBe('email2');
    expect(queue.shift()).toBe('email2');
    expect(queue.shift()).toBe('email3');
    expect(queue.peek()).toBeUndefined();
  });

  test('shift on empty queue returns undefined', () => {
    expect(queue.shift()).toBeUndefined();
  });

  test('peek on empty queue returns undefined', () => {
    expect(queue.peek()).toBeUndefined();
  });
});
