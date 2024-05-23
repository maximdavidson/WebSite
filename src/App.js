import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/dialogs" element={<Dialogs store={props.store} />} />
          {/* <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
