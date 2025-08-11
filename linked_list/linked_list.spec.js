const LinkedList = require('.');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('append increases size and adds elements at tail', () => {
    list.append('apple');
    list.append('banana');
    list.append('cherry');

    expect(list.size()).toBe(3);
    expect(list.head.data).toBe('apple');
    expect(list.tail.data).toBe('cherry');
  });

  test('prepend increases size and adds element at head', () => {
    list.append('apple');
    list.append('banana');
    list.append('cherry');

    list.prepend('avocado');

    expect(list.size()).toBe(4);
    expect(list.head.data).toBe('avocado');
    expect(list.getAt(1).data).toBe('apple');
  });

  test('getAt returns correct node by index', () => {
    list.append('apple');
    list.append('banana');
    list.append('cherry');
    list.prepend('avocado');

    const node = list.getAt(1);
    expect(node).not.toBeNull();
    expect(node.data).toBe('apple');
  });

  test('removeAt removes correct element and updates size', () => {
    list.append('apple');
    list.append('banana');
    list.append('cherry');
    list.prepend('avocado');

    list.removeAt(2);

    expect(list.size()).toBe(3);

    expect(list.getAt(0).data).toBe('avocado');
    expect(list.getAt(1).data).toBe('apple');
    expect(list.getAt(2).data).toBe('cherry');
  });

  test('print logs all elements in order', () => {
    list.append('apple');
    list.append('banana');
    list.append('cherry');
    list.prepend('avocado');

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    list.print();

    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'avocado');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'apple');
    expect(logSpy).toHaveBeenNthCalledWith(3, 'banana');
    expect(logSpy).toHaveBeenNthCalledWith(4, 'cherry');

    logSpy.mockRestore();
  });

  test('head and tail data are correct after operations', () => {
    list.append('apple');
    list.append('banana');
    list.append('cherry');
    list.prepend('avocado');

    expect(list.head.data).toBe('avocado');
    expect(list.tail.data).toBe('cherry');

    list.removeAt(3); // remove tail 'cherry'
    expect(list.tail.data).toBe('banana');

    list.removeAt(0); // remove head 'avocado'
    expect(list.head.data).toBe('apple');
  });
});
