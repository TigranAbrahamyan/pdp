class Singleton {
  static #instance;

  constructor() {
    if (Singleton.#instance) {
      throw new Error("Use Singleton.getInstance()");
    }
    Singleton.#instance = this;
  }

  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
}
