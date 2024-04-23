const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    },
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
window.store = store;
// store is OOP
