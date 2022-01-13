import React, {useState, useEffect, useRef} from 'react';
import '../App.css'
import SideMenu from './SideMenu';
import Conversation from '../Conversation';
import io from 'socket.io-client';
import { getLocalStorage, setLocalStorage } from '../Storage';

const socket = io("//localhost:3001");

const Chat = ({nombre}) => 
{
const [mensaje, setMensaje] = useState("");
const [room, setRoom] = useState(null);
const [data, setData] = useState([]);
const [roomSelected, setRoomSelected] = useState(false);



useEffect(() => {
    socket.emit('conectado', nombre);
}, [nombre]);



const joinRoom = (data) => 
{
  setRoom(data);
  socket.emit("join_room", data);
  console.log(data);
  const Arr = getLocalStorage('room' + data) ?? [];
  setData(Arr);   
  setRoomSelected(true);
}



 
return (
    <div className='App'>
     
      <SideMenu joinRoom={joinRoom} nombre = {nombre}/>
      {roomSelected ? (
                    <Conversation nombre={nombre} mensaje={mensaje} setMensaje = {setMensaje} room={room} socket = {socket} data = {data} />
                ): (
                    <h3 className='userSelect'>Seleccione algun usuario para chatear</h3>
                )}
      
</div>
  );
};

export default Chat;