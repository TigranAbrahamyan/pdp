const Singleton = require('.');

describe('Singleton', () => {
  test('getInstance returns the same instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1).toBe(instance2);
  });

  test('sayHello method exists and is callable', () => {
    const instance = Singleton.getInstance();
    expect(typeof instance.sayHello).toBe('function');

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    instance.sayHello();
    expect(logSpy).toHaveBeenCalledWith('Hello from the Singleton instance!');
    logSpy.mockRestore();
  });

  test('throws error on new after getInstance', () => {
    Singleton.getInstance();

    expect(() => {
      new Singleton();
    }).toThrow('Singleton instance already exists. Use Singleton.getInstance() instead of new.');
  });
});
