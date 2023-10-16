import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home.jsx";
import {Login} from "./components/Account/Login.jsx";
import {SignUp} from "./components/Account/SignUp.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {Logout} from "./components/Account/Logout.jsx";
import "./scss/main.scss"
import {AccountProvider} from "./Providers/AccountProvider.jsx";
import {GiveItAway} from "./components/GiveItAway/GiveItAway.jsx";
import {PrivateRoute} from "./Providers/PrivateRoute.jsx";

function App() {

    return (
        <Router>
            <AccountProvider>
                <div className={"flex--end container"}>
                    <Navigation/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logowanie" element={<Login/>}/>
                    <Route path="/rejestracja" element={<SignUp/>}/>
                    <Route path="/wylogowano" element={<Logout/>}/>
                    <Route path="/oddaj rzeczy" element={<PrivateRoute><GiveItAway/></PrivateRoute>}/>
                </Routes>
            </AccountProvider>
        </Router>)
}

export default App
