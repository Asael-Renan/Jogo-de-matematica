import { Account } from "./account.js"

export class Round {
    constructor(Min, Max, Time = 5) {
        this.account = new Account(Min, Max)
        this.time = Time
        this.startTime = 0
        this.endTime = this.time
    }

    start() {
        this.startTime = performance.now();
    }

    atualTime() {
        this.end()
        return this.endTime - this.startTime;
    }

    end() {
        this.endTime = performance.now();
    }
}