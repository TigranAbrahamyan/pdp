const BinaryTree = require('.');

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test('insert nodes and check root', () => {
    tree.insert(15);
    expect(tree.getRootNode().value).toBe(15);

    tree.insert(10);
    tree.insert(20);

    expect(tree.getRootNode().left.value).toBe(10);
    expect(tree.getRootNode().right.value).toBe(20);
  });

  test('inOrderTraverse returns values in ascending order', () => {
    [15, 25, 10, 7, 22, 17, 13].forEach(v => tree.insert(v));
    const result = [];
    tree.inOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([7, 10, 13, 15, 17, 22, 25]);
  });

  test('preOrderTraverse returns values in correct order', () => {
    [15, 25, 10, 7, 22, 17, 13].forEach(v => tree.insert(v));
    const result = [];
    tree.preOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([15, 10, 7, 13, 25, 22, 17]);
  });

  test('postOrderTraverse returns values in correct order', () => {
    [15, 25, 10, 7, 22, 17, 13].forEach(v => tree.insert(v));
    const result = [];
    tree.postOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([7, 13, 10, 17, 22, 25, 15]);
  });

  test('findMinNode returns leftmost node', () => {
    [15, 25, 10, 7, 22].forEach(v => tree.insert(v));
    const minNode = tree.findMinNode(tree.getRootNode());
    expect(minNode.value).toBe(7);
  });

  test('remove leaf node', () => {
    [15, 25, 10, 7, 22].forEach(v => tree.insert(v));
    tree.remove(7);
    const result = [];
    tree.inOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([10, 15, 22, 25]);
  });

  test('remove node with one child', () => {
    [15, 25, 10, 7, 22].forEach(v => tree.insert(v));
    tree.remove(10);
    const result = [];
    tree.inOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([7, 15, 22, 25]);
  });

  test('remove node with two children', () => {
    [15, 25, 10, 7, 22, 17].forEach(v => tree.insert(v));
    tree.remove(15);
    const result = [];
    tree.inOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([7, 10, 17, 22, 25]);
  });

  test('remove non-existing node does nothing', () => {
    [15, 25, 10].forEach(v => tree.insert(v));
    tree.remove(999);
    const result = [];
    tree.inOrderTraverse(tree.getRootNode(), v => result.push(v));
    expect(result).toEqual([10, 15, 25]);
  });
});
