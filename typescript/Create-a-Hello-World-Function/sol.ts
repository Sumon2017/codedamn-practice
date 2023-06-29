export const createHelloWorld: Function = function (): Function {
  return function (...args: any): string {
    return "Hello World";
  };
};
