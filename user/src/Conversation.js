import React, {useState, useEffect, useRef} from 'react';
import { getLocalStorage, setLocalStorage } from './Storage';
import './App.css';


function Conversation(props) {
    
    const {nombre, mensaje, setMensaje, room, socket, data} = props;


    const divRef = useRef(null);
useEffect(() => 
{
  divRef.current.scrollIntoView({behaviour: 'smooth'});
})

const sendMessage = async () =>
{
    if(mensaje !== "")
    {
        const object = {
            room: room,
            author: nombre,
            message: mensaje,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        };

        await socket.emit("send_message", object);

        data.push(object);
        setLocalStorage('room' + object.room, data);
        setMensaje("");

    }
}

    return (
        <div>
         <div className='rightSide'>
                
           <div className="user-header">
               <h3 className="user-name">{room}</h3>
           </div> 
       <div className="chat">   
       {
           data.map(
               (e, i) => 
                   (
                       <div className="chat-globe" key={i}>
                           <div>
                               <h3 className="name-globe">{e.author}</h3>
                               <p className="text-globe">{e.message}</p> 
                           </div>
                       </div>
                   )
               )
       } 
       <div ref={divRef}></div> 
       </div>

<div className="chat-container"  >
 <input className='textBox' placeholder="Escribe un mensaje"
   name=""
   id=""
   cols="60"
   rows=""
   value={mensaje}
   onChange={(e) => setMensaje(e.target.value)}
 ></input>
 <button className="sendButton" onClick={() => sendMessage()}>Enviar</button>
</div>
</div>
        </div> 
    )
}

export default Conversation;
