import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hello, how are you?", likesCount: 10 },
        { id: 2, message: "Let`s drink a tea!", likesCount: 12 },
      ],
      newPostText: "Write something)",
    },

    messagesPage: {
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
    },

    sidebar: {},
  },
  _callSubscriber() {
    console.log("HI");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
// store is OOP
