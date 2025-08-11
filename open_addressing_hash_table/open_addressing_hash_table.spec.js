const HashTable = require('.');

describe('OpenAddressingHashTable', () => {
  let hash;

  beforeEach(() => {
    hash = new HashTable();
  });

  test('set and get key-value pairs', () => {
    hash.set('name', 'Alice');
    hash.set('age', 30);
    hash.set('city', 'New-york');

    expect(hash.get('name')).toBe('Alice');
    expect(hash.get('age')).toBe(30);
    expect(hash.get('city')).toBe('New-york');
  });

  test('get returns undefined for missing keys', () => {
    expect(hash.get('unknown')).toBeUndefined();
  });

  test('set updates existing key value', () => {
    hash.set('age', 30);
    expect(hash.get('age')).toBe(30);

    hash.set('age', 31);
    expect(hash.get('age')).toBe(31);
  });

  test('delete removes key and returns true', () => {
    hash.set('city', 'New-york');
    expect(hash.delete('city')).toBe(true);
    expect(hash.get('city')).toBeUndefined();
  });

  test('delete returns false for non-existing key', () => {
    expect(hash.delete('nonexistent')).toBe(false);
  });

  test('handles collisions correctly', () => {
    hash.set('ab', 'first');
    hash.set('ba', 'second');

    expect(hash.get('ab')).toBe('first');
    expect(hash.get('ba')).toBe('second');

    hash.delete('ab');
    expect(hash.get('ab')).toBeUndefined();
    expect(hash.get('ba')).toBe('second');

    hash.delete('ba');
    expect(hash.get('ba')).toBeUndefined();
  });
});
