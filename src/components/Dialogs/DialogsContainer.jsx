import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

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

function DialogsContainer(props) {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messagesPage={state}
    />
  );
}

export default DialogsContainer;
