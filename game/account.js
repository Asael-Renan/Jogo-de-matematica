export class Account {
    constructor(minNumber, maxNumber) {
        this.min = minNumber;
        this.max = maxNumber;
        this.firstNumber = this.randomNumber();
        this.sign = this.randomSign();
        this.secondNumber = this.randomNumber();
    }

    randomNumber() {
        return Math.floor((Math.random() * (this.max - this.min + 1))) + this.min;
    }

    randomSign() {
        const signs = ['+', '-', 'x', ':'];
        return signs[Math.floor(Math.random() * signs.length)];
    }

    calculateResult() {
        let result;
        switch (this.sign) {
            case '+': result = this.firstNumber + this.secondNumber; break;
            case '-': result = this.firstNumber - this.secondNumber; break;
            case 'x': result = this.firstNumber * this.secondNumber; break;
            case ':': result = this.firstNumber / this.secondNumber; break;
        }
        return + result.toFixed(1);
    }

    toString() {
        return `${this.firstNumber} ${this.sign} ${this.secondNumber}`;
    }
}