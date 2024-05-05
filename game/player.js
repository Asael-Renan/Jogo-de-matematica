export class Player {
    constructor() {
        this.name = '';
        this.points = 0;
    }

    chooseName(playerName) {
        this.name = playerName;
    }

    addPoint() {
        this.points++;
    }
}