const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);

io.on('connection', socket => 
{

    socket.on('conectado', () => 
        {
            console.log('Usuario conectado');
        });
    
    socket.on('mensaje', (mensaje) => 
    { 
        io.emit("mensajes", {mensaje});
    })
    socket.on('disconnect', {server: "Servidor", mensaje: "Ha abandonado la sala"});
});

server.listen(3000, () => console.log("Servidor inicializado"));