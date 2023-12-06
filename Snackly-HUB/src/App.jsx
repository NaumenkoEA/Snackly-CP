import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu.jsx";
import Story from "./components/Story/Story.jsx";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/Authorization/LoginForm/LoginForm.jsx";

import RegistrationForm from "./components/Authorization/RegistForm/RegistrationForm.jsx";

function App() {
    return (<BrowserRouter>
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/story' element={<Story/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/login' element={<LoginForm/>}/>
                    <Route path='/regis' element={<RegistrationForm/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
