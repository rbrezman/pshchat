import React, {useState, useEffect, useRef} from 'react';
import socket from './socket';



const Chat = () => 
{
const [mensaje, setMensaje] = useState("");
const [mensajes, setMensajes] = useState([]);

useEffect(() => {

    socket.on('mensajes', mensaje => 
    {
        setMensajes([...mensajes, mensaje]);
    })
    socket.emit('conectado');

    return () => {socket.off()}
}, [mensajes])

// useEffect(() => {

//     socket.emit('conectado');

// })
 
const submit = (e) => 
{
    e.preventDefault();
    socket.emit('mensaje', mensaje);
    console.log(e.mensaje);
}

 
return (

        <div>
            <div>
                {mensajes.map((e, i) =>  <div key = {i}>{e.mensaje}</div>)}
            </div>
        <form onSubmit={submit} className="chat" style={{height: '100vh'}}>
            <label htmlFor="">Escriba su mensaje</label>
            <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={e=> setMensaje(e.target.value)}>
            Escriba su mensaje
            </textarea>
            <button>Enviar</button>
        </form>
        </div>

)
    




}
export default Chat;