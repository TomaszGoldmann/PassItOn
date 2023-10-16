import {Link, useNavigate} from "react-router-dom";
import * as Scroll from "react-scroll";
import {menuItems} from "./MenuSections";
import {useContext} from "react";
import {getAuth, signOut} from "firebase/auth";
import {app} from "../../Firebase/Firebase.jsx";
import {MyContext} from "../../Providers/AccountProvider.jsx";

export const Navigation = () => {
    const {user, setUser} = useContext(MyContext)
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const goToHomeAndScroll = async (id) => { // Dodaj typ string
        console.log(id)
        await navigate("/");
        await scroller.scrollTo(id, {
            duration: 1500,
            smooth: true
        });
    };

    const handleSignOut = () => {
        signOut(getAuth(app)).then(async () => {
            await setUser(null)
            navigate("/wylogowano")
        }).catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <nav className="nav">
            <ul className="nav__list flex">
                {user && <li className="nav__item">
                    <span className="nav__item__link login">
                        {user.email}
                    </span>
                    <span onClick={handleSignOut} className="nav__item__link login">
                        Wyloguj
                    </span>
                </li>}
                <li className="nav__item">
                    <Link to="/logowanie" className="nav__item__link login">
                        Zaloguj
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/rejestracja" className="nav__item__link login">
                        Załóż konto
                    </Link>
                </li>
            </ul>
            <div className={"nav__items"}>
                {menuItems.map(({id, name}) => (
                    <Link
                        key={id}
                        to={`/#${id}`}
                        onClick={() => goToHomeAndScroll(id)}
                        className="nav__item nav__item__link"
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
