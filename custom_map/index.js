class CustomMap {
  constructor() {
    this.data = {};
    this.size = 0;
  }

  set(key, value) {
    if (!this.data.hasOwnProperty(key)) {
      this.size++;
    }

    this.data[key] = value;
  }

  get(key) {
    return this.data.hasOwnProperty(key) ? this.data[key] : undefined;
  }

  delete(key) {
    if (this.data.hasOwnProperty(key)) {
      delete this.data[key];
      this.size--;
      return true;
    }

    return false;
  }

  has(key) {
    return this.data.hasOwnProperty(key);
  }

  clear() {
    this.data = {};
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  forEach(callback) {
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        callback(key, this.data[key]);
      }
    }
  }
}

const myMap = new CustomMap();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a'));
console.log(myMap.has('b'));
console.log(myMap.getSize());
myMap.forEach((key, value) => console.log(key, value));
myMap.delete('a');
console.log(myMap.getSize());
myMap.clear();
console.log(myMap.getSize());

module.exports = CustomMap;
