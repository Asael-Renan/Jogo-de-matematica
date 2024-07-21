import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Room } from './game/room.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const room = new Room();

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
    room.addPlayer(socket.id);
    console.log(room.players);

    socket.on('choose-name', data => {
        console.clear()
        room.players[socket.id].chooseName(data.name);
        console.log(room.players);
        console.log('Emitindo evento host com status:', room.players[socket.id].host);
        socket.emit('host', room.players[socket.id].host);
    });

    socket.on('disconnect', () => {
        console.clear();
        room.removePlayer(socket.id);
        console.log(room.players);
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
