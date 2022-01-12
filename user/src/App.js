import React, { useState, useEffect } from 'react';
import './App.css';
import Chat from './components/Chat';
import SideMenu from './components/SideMenu';
import { clearLocalStorage } from './Storage';






function App() {

  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  useEffect(() => 
  {
      clearLocalStorage();
  })
  
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
        <div className="form-container">
          <form className="login" onSubmit={registrar}>
            <img className="login-logo" src="https://i.ibb.co/TtKPBqG/71151958-8306-42f2-95ce-9d339e9d6d7d.jpg"></img>
            <header className="login-title">¡Bienvenido al chat de PSH!</header>
            <div>
              <input className="login-input" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ingrese su nombre"></input>
              <button className="login-button">Chatear</button>
            </div>
          </form>
          
        </div>
       
      }

      {
         registrado &&
         <Chat nombre = {nombre} />
        
      }
 
    </div>
);
}

export default App;
