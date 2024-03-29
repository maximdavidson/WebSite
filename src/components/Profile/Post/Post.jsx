import React from "react";
import c from './Post.module.css'

function Post(props) {
   return(
      <div className={c.item}>
         {props.message}
         <div>
            <span>
               like {props.likesCount}
            </span>
         </div>
      </div>
   )
}

export default Post