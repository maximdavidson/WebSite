import React from "react";
import c from'./Header.module.css';

function Header() {
   return(
      <header className={c.header}>
         <h1 className={c.header_title}>UFriends</h1>
      </header>
   )
}

export default Header