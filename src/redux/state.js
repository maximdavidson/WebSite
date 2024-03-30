 let state = {
   profilePage:{
      postData: [
         {id: 1, message: 'Hello, how are you?', likesCount: 10},
         {id: 2, message: 'Let`s drink a tea!', likesCount: 12},
       ],
   },

   messagesPage: {
      messagesData: [
         {id: 1, message: 'Hello'},
         {id: 2, message: 'How is going?'},
         {id: 3, message: 'What about today?'},
       ],
       dialogData: [
         {id: 1, name: 'Maxim'},
         {id: 2, name: 'Vlad'},
         {id: 3, name: 'Sasha'},
       ],
   },
 }

 export default state