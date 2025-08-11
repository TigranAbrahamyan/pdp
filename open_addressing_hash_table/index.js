class HashTable {
  constructor() {
    this.table = [];
  }

  #hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash;
  }

  set(key, value) {
    let index = this.#hash(key);

    while (this.table[index] && this.table[index][0] !== key) {
      index++;
    }

    this.table[index] = [key, value];
  }

  get(key) {
    let index = this.#hash(key);

    while (this.table[index]) {
      if (this.table[index] !== 'DELETED' && this.table[index][0] === key) {
        return this.table[index][1];
      }

      index++;
    }

    return undefined;
  }

  delete(key) {
    let index = this.#hash(key);

    while (this.table[index]) {
      if (this.table[index][0] === key) {
        this.table[index] = null;
        return true;
      }

      index++;
    }

    return false;
  }

  delete(key) {
    let index = this.#hash(key);

    while (this.table[index]) {
      if (this.table[index] !== 'DELETED' && this.table[index][0] === key) {
        this.table[index] = 'DELETED';
        return true;
      }

      index++;
    }

    return false;
  }
}

const hash = new HashTable();

hash.set('name', 'Alice');
hash.set('age', 30);
hash.set('city', 'New-york');

console.log('Name:', hash.get('name'));
console.log('Age:', hash.get('age'));
console.log('City:', hash.get('city'));

hash.set('age', 31);
console.log('Updated Age:', hash.get('age'));

console.log('Delete city:', hash.delete('city'));
console.log('City after deletion:', hash.get('city'));

console.log('Delete unknown key:', hash.delete('nonexistent'));

module.exports = HashTable;
