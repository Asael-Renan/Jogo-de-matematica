import { Match } from "./match"

class Game {
    constructor() {
        this.matchs = {}
    }

    newMatch() {
        const match = new Match();
        this.matchs[match]
    }
}

//...