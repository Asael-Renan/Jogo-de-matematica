export class Player {
    constructor(playerId) {
        this.id = playerId
        this.name = ''
        this.points = 0
    }

    choseName(playerName) {
        this.name = playerName
    }

    addPoint() {
        this.points++
    }
}