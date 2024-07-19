import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Match } from './game/match.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const match = new Match();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(express.static('public'));

app.get('/host', (req, res) => {
    res.sendFile(__dirname + '/public/host.html');
});

io.on('connection', (socket) => {

    console.clear()
    match.addPlayer(socket.id);
    console.log(match.players);

    socket.on('choose-name', data => {
        console.clear()
        match.players[socket.id].chooseName(data.name);
        console.log(match.players);
        console.log('Emitindo evento host com status:', match.players[socket.id].host);
        socket.emit('host', match.players[socket.id].host);
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
