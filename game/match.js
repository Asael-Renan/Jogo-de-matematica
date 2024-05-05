import { Player } from "./player.js";
import { Account } from "./account.js";

export class Match {
    constructor(Rounds = 10, minNumber = 0, maxNumber = 20) {
        this.rounds = Rounds;
        this.players = {};
        this.accounts = [];
        this.createAccounts(minNumber, maxNumber);
    }

    createAccounts(min, max) {
        for (let i = 0; i < this.rounds; i++) {
            const account = new Account(min, max);
            this.accounts.push(account);
        }
    }

    addPlayer(playerId) {
        if (this.players[playerId]) {
            throw new Error('Já existe o jogador: ' + playerId);
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