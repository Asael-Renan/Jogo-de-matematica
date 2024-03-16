import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Um usuário conectou-se');

    socket.on('disconnect', () => {
        console.log('Um usuário desconectou-se');
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}`);
});
