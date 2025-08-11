const CustomMap = require('.');

describe('CustomMap', () => {
  let map;

  beforeEach(() => {
    map = new CustomMap();
  });

  test('set and get values', () => {
    map.set('a', 1);
    expect(map.get('a')).toBe(1);
    map.set('b', 2);
    expect(map.get('b')).toBe(2);
  });

  test('get returns undefined for missing keys', () => {
    expect(map.get('missing')).toBeUndefined();
  });

  test('has returns true/false correctly', () => {
    map.set('key1', 'val1');
    expect(map.has('key1')).toBe(true);
    expect(map.has('nope')).toBe(false);
  });

  test('size increments and decrements correctly', () => {
    expect(map.getSize()).toBe(0);
    map.set('x', 10);
    expect(map.getSize()).toBe(1);
    map.set('y', 20);
    expect(map.getSize()).toBe(2);
    map.delete('x');
    expect(map.getSize()).toBe(1);
  });

  test('delete removes key and returns true, returns false if key not found', () => {
    map.set('a', 100);
    expect(map.delete('a')).toBe(true);
    expect(map.delete('a')).toBe(false);
  });

  test('clear empties the map and resets size', () => {
    map.set('a', 1);
    map.set('b', 2);
    expect(map.getSize()).toBe(2);
    map.clear();
    expect(map.getSize()).toBe(0);
    expect(map.get('a')).toBeUndefined();
  });

  test('forEach iterates over all entries', () => {
    map.set('a', 1);
    map.set('b', 2);
    const entries = [];
    map.forEach((key, value) => {
      entries.push([key, value]);
    });
    expect(entries).toContainEqual(['a', 1]);
    expect(entries).toContainEqual(['b', 2]);
    expect(entries.length).toBe(2);
  });

  test('set with existing key does not increase size', () => {
    map.set('a', 1);
    expect(map.getSize()).toBe(1);
    map.set('a', 100);
    expect(map.getSize()).toBe(1);
    expect(map.get('a')).toBe(100);
  });
});
