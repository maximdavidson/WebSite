import React from "react";
import c from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

function Dialogs(){
   return(
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>
            <div className={c.dialog}>
               <NavLink to='/dialogs/1'>Maxim</NavLink> 
            </div>
            <div className={c.dialog}>
               <NavLink to='/dialogs/2'>Vlad</NavLink> 
            </div>
            <div className={c.dialog}>
               <NavLink to='/dialogs/3'>Sasha</NavLink>
            </div>
         </div>

         <div className={c.messages}>
            <div className={c.message}>
               Hello
            </div>
            <div className={c.message}>
               How is going?
            </div>
            <div className={c.message}>
               What about today?
            </div>
         </div>
      </div>
   )
}

export default Dialogs