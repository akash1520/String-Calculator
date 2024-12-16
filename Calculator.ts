export class Calculator {
    private callCount: number = 0;
    
    add(numbers: string): number {
        this.callCount++;
        if (numbers.startsWith('//')) {
            const [delimiterLine, numbersString] = numbers.split('\n');
            const delimiterMatches = delimiterLine.match(/\[(.*?)\]/g);
            let delimiter: string;

            if (delimiterMatches) {
                delimiter = delimiterMatches.map(match => 
                    match.replace(/[\[\]]/g, '')
                ).map(delim => delim.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&"))
                 .join('|');
            } else {
                delimiter = delimiterLine.slice(2);
            }

            const numbersArray = numbersString.split(new RegExp(delimiter));
            return this.sumNumbers(numbersArray);
        }
        const numbersArray = numbers.replace(/\n/g, ',').split(',').map(Number);
        return this.sumNumbers(numbers.replace(/\n/g, ',').split(','));
    }

    private sumNumbers(numberStrings: string[]): number {
        const numbersArray = numberStrings.map(Number).filter(num => num <= 1000);;
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