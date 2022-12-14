import './App.css';
import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (<div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <Routes>
            <Route path='/dialogItem/*' element={<DialogsContainer/>}/>
            <Route path='/profile/*' element={<ProfileContainer />}/>
            <Route path ='/users' element={<UsersContainer/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/friends' element={<Friends/>}/>
        </Routes>
    </div>);
};

export default App;
