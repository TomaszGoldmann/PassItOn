import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home.jsx";
import {Login} from "./components/Account/Login.jsx";
import {SignUp} from "./components/Account/SignUp.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import "./scss/main.scss"

function App() {

    return (
        <Router>
            <div className={"flex--end container"}>
                <Navigation/>
            </div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/zaloguj sie"} element={<Login/>}/>
                <Route path={"/zaloz konto"} element={<SignUp/>}/>
            </Routes>
        </Router>
    )
}

export default App
