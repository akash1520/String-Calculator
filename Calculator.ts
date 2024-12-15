export class Calculator {
    add(numbers: string): number {
        const numbersArray = numbers.replace(/\n/g, ',').split(',').map(Number);
        return numbersArray.reduce((sum, num) => sum + num, 0);
    }
}