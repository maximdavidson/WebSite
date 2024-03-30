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

   let dialogsElements = 
   props.state.dialogData.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);


   let messagesElements = 
   props.state.messagesData.map( (message) => <Message message={message.message}/> );
   

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