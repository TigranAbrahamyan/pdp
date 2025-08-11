const { StackWithLinkedList, StackWithArray } = require('.');

describe('StackWithLinkedList', () => {
  let stack;

  beforeEach(() => {
    stack = new StackWithLinkedList();
  });

  test('push and peek', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test('push, pop and peek', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.peek()).toBe(30);
    expect(stack.pop()).toBe(30);
    expect(stack.peek()).toBe(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  test('pop on empty stack returns undefined', () => {
    expect(stack.pop()).toBeUndefined();
  });

  test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
  });
});

describe('StackWithArray', () => {
  let stack;

  beforeEach(() => {
    stack = new StackWithArray();
  });

  test('push and peek', () => {
    stack.push('apple');
    expect(stack.peek()).toBe('apple');
    stack.push('banana');
    expect(stack.peek()).toBe('banana');
  });

  test('push, pop and peek', () => {
    stack.push('apple');
    stack.push('banana');
    stack.push('cherry');

    expect(stack.peek()).toBe('cherry');
    expect(stack.pop()).toBe('cherry');
    expect(stack.peek()).toBe('banana');
    expect(stack.pop()).toBe('banana');
    expect(stack.pop()).toBe('apple');
  });

  test('pop on empty stack returns undefined', () => {
    expect(stack.pop()).toBeUndefined();
  });

  test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
  });
});
