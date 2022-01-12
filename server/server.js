const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
app.use(cors());

const { Server } = require("socket.io");
const io = new Server(server, 
  {
   cors: 
   {
     origin:"http://localhost:3000",
     methods: ["GET", "POST"],
   } ,
  })

io.on('connection', socket => 
{


        socket.on('conectado', (data) => 
        {
            console.log('Usuario conectado');
        });
        socket.on("join_room", (data) => 
        {
          socket.join(data);
        })

        socket.on('send_message', (object) => {
            socket.to(object.room).emit("receive_messages", object);
            console.log(object);
          });

        socket.on("disconnect", () => {
            socket.emit("mensajes", {
              server: "Server",

            });
          });
        });


server.listen(3001, () => console.log("Servidor inicializado"));