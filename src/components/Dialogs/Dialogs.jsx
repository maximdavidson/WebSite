import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  let path = "/dialog/ + props.id";
  return (
    <div className={c.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

function Message(props) {
  return <div className={c.message}>{props.message}</div>;
}

function Dialogs(props) {
  let state = props.messagesPage;

  let dialogsElements = state.dialogData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>

      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                placeholder="Enter your message"
                onChange={onNewMessageChange}
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
