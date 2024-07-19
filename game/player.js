export class Player {
    constructor() {
        this.name = '';
        this.time = 0;
        this.host = false
        this.rounds = []
    }

    chooseName(playerName) {
        this.name = playerName;
    }

    sumPoints() {
        this.time = 0;
        for (let roundTime of this.rounds) {
            this.time += roundTime;
        }
    }

    addPoint(time) {
        this.rounds.push(time);
        this.sumPoints();
    }
}