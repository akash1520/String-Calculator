export class Calculator {
    private callCount: number = 0;
    
    add(numbers: string): number {
        this.callCount++;
        if (numbers.startsWith('//')) {
            const [delimiterLine, numbersString] = numbers.split('\n');
            const delimiter = delimiterLine.slice(2);

            const numbersArray = numbersString.split(delimiter).map(Number);
            return this.sumNumbers(numbersString.split(delimiter));
        }
        const numbersArray = numbers.replace(/\n/g, ',').split(',').map(Number);
        return this.sumNumbers(numbers.replace(/\n/g, ',').split(','));
    }

    private sumNumbers(numberStrings: string[]): number {
        const numbersArray = numberStrings.map(Number);
        const negatives = numbersArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
        }
        return numbersArray.reduce((sum, num) => sum + num, 0);
    }

    getCalledCount(): number {
        return this.callCount;
    }
}