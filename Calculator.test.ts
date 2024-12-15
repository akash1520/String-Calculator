import * as Calculator from "./index";

describe('Calculator', () => {
    let calculator: Calculator.Calculator;

    beforeEach(() => {
        calculator = new Calculator.Calculator();
    });

    test("Calculator class exists", () => {
        expect(Calculator.Calculator).toBeDefined();
    });

    test("Calculator class has add method", () => {
        expect(calculator.add).toBeDefined();
    });

    describe('Add method', () => {
        test('Accepts a string as an argument', () => {
            expect(() => calculator.add('')).not.toThrow();
            expect(() => calculator.add('1,2')).not.toThrow();
        });

        test('Returns correct sum with correct type', () => {
            expect(calculator.add('1,2')).toBe(3);
            expect(typeof (calculator.add('1,3'))).toBe('number');
        });

        test('Accepts more than two numbers', () => {
            expect(calculator.add('1,2,3')).toBe(6);
        })

        describe('Delimiter support', () => {
            test('Supports new line as delimiter', () => {
                expect(calculator.add('1\n2,3')).toBe(6);
            });
        });
    });
});