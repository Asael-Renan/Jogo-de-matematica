import { Player } from "./player.js";
import { Round } from "./round.js";

export class Match {
    constructor(Rounds = 10) {
        this.TotalRounds = Rounds;
        this.atualRound = null
        this.maxPlayersNumber = 2
        this.players = {};
        this.rounds = [];
        this.started = false;
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

    create(min, max) {
        for (let i = 0; i < this.rounds; i++) {
            const round = new Round(min, max);
            this.rounds.push(round);
        }
    }

    addPlayer(playerId) {
        if (this.players[playerId]) {
            throw new Error('Já existe o jogador: ' + playerId);
        }
        if (Object.keys(this.players).length >= this.maxPlayersNumber) {
            throw new Error('Número maximo de jogadores excedido.');
        }
        if (this.started) {
            throw new Error('A partida está em andamento.')
        }

        const player = new Player();
        this.players[playerId] = player;
        return player;
    }

    removePlayer(playerId) {
        const player = this.players[playerId];
        if (!player) {
            throw new Error('Não existe o jogador: ' + playerId);
        }
        delete this.players[playerId];
        return player;
    }
}