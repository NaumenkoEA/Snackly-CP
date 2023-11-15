import './App.css'
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {


    return (<BrowserRouter>
            <div className='wrapper'>
                <Header />
                <Content />
                <Footer />
            </div>

        </BrowserRouter>
    )
}

export default App
