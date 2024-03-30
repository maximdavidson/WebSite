import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

let postData = [
  {id: 1, message: 'Hello, how are you?', likesCount: 10},
  {id: 2, message: 'Let`s drink a tea!', likesCount: 12},
]

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

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postData={postData} dialogData={dialogData} messagesData={messagesData}/>
    </BrowserRouter>
  </React.StrictMode>
);
