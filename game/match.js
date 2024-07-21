import { Round } from "./round.js";

export class Match {
    constructor(Rounds = 10) {
        this.TotalRounds = Rounds;
        this.atualRound = null
        this.rounds = [];
        this.started = false;
    }

    create(min, max) {
        for (let i = 0; i < this.rounds; i++) {
            const round = new Round(min, max);
            this.rounds.push(round);
        }
    }

    start() {
        this.started = true
    }

    async runing() {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        for (let i = 1; i <= this.time; i++) {
            await delay(1000)
        }
        nextRound()
    }

    nextRound() {

    }
}