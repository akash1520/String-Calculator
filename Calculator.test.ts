import * as Calculator from "./index";

test("Calculator class exists", () => {
  expect(Calculator.Calculator).toBeDefined();
});

test("Calculator class has add method", () => {
  expect(new Calculator.Calculator().add).toBeDefined();
})