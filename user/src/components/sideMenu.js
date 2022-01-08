import React from "react";
import Contacts from "./contacts/Contacts";
import { Avatar } from "@material-ui/core";


const SideMenu = ({nombre}) => 
{
    return (
    <div className="sidemenu">
        <div className="sidemenu_header">
            <img src="C:\Users\roman\pshexamchat\user\src\img\psh.jpg"></img>
            <h1>React Chat</h1> 
        </div>
        <div className="sidemenu_user">
                <Avatar/>
                {nombre}
        </div>
        <div className="sidemenu_chats">
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
            <h1>User</h1>
        </div>
    </div>
    );
};

export default SideMenu;