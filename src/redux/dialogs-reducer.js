const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How is going?" },
    { id: 3, message: "What about today?" },
  ],
  dialogData: [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Vlad" },
    { id: 3, name: "Sasha" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 4, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogReducer;
