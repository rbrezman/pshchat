import React from "react";
import { Avatar } from "@material-ui/core";
import '../App.css';


const SideMenu = (props) => 
{
const {nombre, joinRoom} = props;


    return (
    <div className="sidemenu">
        <div className="sidemenu_header">
            <img className="sidebar-logo" src="https://i.ibb.co/TtKPBqG/71151958-8306-42f2-95ce-9d339e9d6d7d.jpg"></img>
            <h1 className="sidebar-header">React Chat</h1> 
        </div>
        <div className="sidemenu_user">
                <img className="sidemenu-user-image" src="https://i.ibb.co/hDNXdfx/Foto.png"></img>
                {nombre}
        </div>
        <div className="sidemenu_user_chat"  onClick={()=>joinRoom("Marto S.")}>
                <img className="sidemenu-user-image" src="https://i.ibb.co/TtKPBqG/71151958-8306-42f2-95ce-9d339e9d6d7d.jpg"></img>
                Marto S.
        </div>
        <div className="sidemenu_user_chat"  onClick={()=>joinRoom("Matías B.")}>
                <img className="sidemenu-user-image" src="https://i.ibb.co/hY51xP4/Whats-App-Image-2022-01-10-at-12-52-50-PM.jpg"></img>
                Matías B.
        </div>
        <div className="sidemenu_user_chat"  onClick={()=>joinRoom("Julián G.")}>
                <img className="sidemenu-user-image" src="https://i.ibb.co/bN8c3Mn/Whats-App-Image-2022-01-10-at-12-54-16-PM.jpg"></img>
                Julián G.
        </div>
        <div className="sidemenu_user_chat"  onClick={()=>joinRoom("Alan B.")}>
                <img className="sidemenu-user-image" src="https://i.ibb.co/7QkGTHF/Screenshot-1.png"></img>
                Alan B.
        </div>
    </div>
    );
};

export default SideMenu;