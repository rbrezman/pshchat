import React, {useState, useEffect, useRef} from 'react';
import Socket from './Socket';
import socket from './Socket';
import '../App.css'

const Chat = ({nombre}) => 
{
const [mensaje, setMensaje] = useState("");
const [mensajes, setMensajes] = useState([]);

useEffect(() => {

    socket.emit('conectado', nombre);

}, [nombre]);

useEffect(() => {

    socket.on('mensajes', mensaje => 
    {
        setMensajes([...mensajes, mensaje]);
    })
    return () => {socket.off()
    };
}, [mensajes]);

    
const divRef = useRef(null);
useEffect((e) => 
{
  e.preventDefault();
  divRef.current.scrollIntoView({behaviour: 'smooth'});
})

 
const submit = (e) => 
{
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    console.log(mensaje);

}

 
return (
    <div>
    <div  className="ChatSection">
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div>{e.nombre}: {e.mensaje}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit} className="messageBox" >
        <textarea
          name=""
          id=""
          cols="60"
          rows="1"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button className="sendButton">Enviar</button>
      </form>
      </div>
    </div>
  );
};

export default Chat;