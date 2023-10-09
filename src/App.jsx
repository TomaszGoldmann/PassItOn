import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home.jsx";
import {Login} from "./components/Login/Login.jsx";
import {SignUp} from "./components/Login/SignUp.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";

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
