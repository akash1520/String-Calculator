import * as Calculator from "./index";

test("Calculator class exists", () => {
  expect(Calculator.Calculator).toBeDefined();
});

test("Calculator class has add method", () => {
  expect(new Calculator.Calculator().add).toBeDefined();
})

test('Add method accepts a string as an argument', () => {
  const calculator = new Calculator.Calculator();
  expect(() => calculator.add('')).not.toThrow();
  expect(() => calculator.add('1,2')).not.toThrow();
});
