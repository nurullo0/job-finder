import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import "../../index";
import {Login} from "../";
import {Register} from "../";
import {Home} from "../";
import {Navbar} from "../";

const App = () => {
    let activeNav;
    if (localStorage.getItem("token")) {
        activeNav = 'd-none'
    }else{
        activeNav = 'text-end'
    }
    return <div>
        <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
}

export default App;
