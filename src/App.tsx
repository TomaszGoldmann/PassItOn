import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Login} from "./components/Login/Login";
import {SignUp} from "./components/Login/SignUp";
import {Navigation} from "./components/Navigation/Navigation";

function App() {

    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
            </Routes>
        </Router>
    )
}

export default App
