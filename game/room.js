import { Player } from "./player.js";

export class Room {
    constructor(Host, maxPlayers = 5) {
        this.host = Host
        this.maxPlayers = maxPlayers
        this.players = [];
    }

    addPlayer(playerName) {
        if (this.players[playerName]) {
            throw new Error('Já existe o jogador: ' + playerName);
        }
        if (Object.keys(this.players).length >= this.maxPlayers) {
            throw new Error('Número maximo de jogadores excedido.');
        }
        if (this.started) {
            throw new Error('A partida está em andamento.')
        }

        const player = new Player();
        this.players[playerName] = player;
        return player;
    }

    removePlayer(playerName) {
        const player = this.players[playerName];
        if (!player) {
            throw new Error('Não existe o jogador: ' + playerName);
        }
        delete this.players[playerName];
        return player;
    }
}