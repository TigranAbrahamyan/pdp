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
    let index = this.#hash();

    while (this.table[index] && this.table[index][0] !== key) {
      index++;
    }

    this.table[index] = [key, value];
  }

  get(key) {
    let index = this._hash(key);

    while (this.table[index]) {
      if (this.table[index][0] === key) {
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
}
