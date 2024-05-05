import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Match } from './game/match.js';

const match = new Match();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    
    match.addPlayer(socket.id);
    console.log(match.players);

    socket.on('choose-name', (data) => {
        console.clear()
        match.players[socket.id].chooseName(data.name);
        console.log(match.players);
    });
    
    socket.on('disconnect', () => {
        console.clear();
        match.removePlayer(socket.id);
        console.log(match.players);
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
