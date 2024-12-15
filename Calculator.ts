export class Calculator {
    add(numbers: string): number {
        if (numbers.startsWith('//')) {
            const [delimiterLine, numbersString] = numbers.split('\n');
            const delimiter = delimiterLine.slice(2);

            const numbersArray = numbersString.split(delimiter).map(Number);
            return numbersArray.reduce((sum, num) => sum + num, 0);
        }
        const numbersArray = numbers.replace(/\n/g, ',').split(',').map(Number);
        return numbersArray.reduce((sum, num) => sum + num, 0);
    }
}