import React from "react";
import c from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

function DialogItem(props){
   let path = '/dialog/ + props.id'
   return(
      <div className={c.dialog}>
         <NavLink to={path}>{props.name}</NavLink> 
      </div>
   )
}

function Message(props){
   return(
      <div className={c.message}>
         {props.message}
      </div>
   )
}

function Dialogs(props){

   let dialogData = [
      {id: 1, name: 'Maxim'},
      {id: 2, name: 'Vlad'},
      {id: 3, name: 'Sasha'},
   ]

   let messagesData = [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How is going?'},
      {id: 3, message: 'What about today?'},
   ]

   let dialogsElements = dialogData
   .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);


   let messagesElements = messagesData
   .map( (message) => <Message message={message.message}/> );
   

   return(
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>

         {dialogsElements}

         </div>

         <div className={c.messages}>

         {messagesElements}

         </div>
      </div>
   )
}

export default Dialogs