class Singleton {
  static #instance;

  constructor() {
    if (Singleton.#instance) {
      throw new Error('Singleton instance already exists. Use Singleton.getInstance() instead of new.');
    }
    Singleton.#instance = this;
  }

  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }

  sayHello() {
    console.log('Hello from the Singleton instance!');
  }
}

const instance1 = Singleton.getInstance();
instance1.sayHello();

const instance2 = Singleton.getInstance();
console.log('Same instances:', instance1 === instance2);

try {
  const instance = new Singleton(); // This will throw an error
  console.log('Create instance with "new" keyword')
} catch (error) {
  console.error('Direct error:', error.message);
}

module.exports = Singleton;
