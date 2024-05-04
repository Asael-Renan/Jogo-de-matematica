import { Player } from "./player.js";

export class Match {
    constructor(Rounds) {
        this.rounds = Rounds
        this.players = []
        this.accounts = []
    }

    createAccounts() {
        for (let i = 0; i < this.rounds; i++) {
            new Account()
            //criar classe contas
        }
    }

    addPlayer(playerId) {
        if (this.findPlayer(playerId)) {
            throw new Error('Já existe um player na posição atual')
        }
        const player = new Player(playerId)
        this.players.push(player)
        return player
    }

    removePlayer(playerId) {
        const player = this.findPlayer(playerId)
        if (!player) {
            throw new Error('Não existe jogador com o id: ' + playerId)
        }
        this.players = this.players.filter(player => player.id !== playerId)
        return player
    }

    addPoint(playerId) {
        this.findPlayer(playerId).addPoint()
    }

    findPlayer(playerId) {
        const player = this.players.findIndex(player => player.id === playerId)
        if (player !== -1) return this.players[player]
        else return null
    }
}