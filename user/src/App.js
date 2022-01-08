import React, { useState } from 'react';
import './App.css';
import Socket from './components/Socket';
import Chat from './components/Chat';
import SideMenu from './components/SideMenu';
import Contacts from './components/contacts/Contacts';



function App() {

  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);
  
const registrar = (e) => 
{
  e.preventDefault();
  if(nombre !== "")
  {
    setRegistrado(true);
  }
}

  return (
    
    <div className="App" >
       
      {
        !registrado &&
        <form className="login" onSubmit={registrar}>
          <header>¡Bienvenido al chat de PSH!</header>
          <div>
          <label htmlFor="">Ingrese su nombre</label>
          </div>
          <input value={nombre} onChange={e => setNombre(e.target.value)}></input>
          <button>Chatear</button>
        </form>
       
      }

      {
          registrado && <Chat nombre = {nombre}/> 
        
      }
 
    </div>
);
}

export default App;
