import {Link, useNavigate} from "react-router-dom";
import * as Scroll from "react-scroll";
import {menuItems} from "./MenuSections";
import {useContext} from "react";
import MyContext from "../../Providers/myContext.jsx";

export const Navigation = () => {
    const {user} = useContext(MyContext)
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

    console.log(user)

    return (
        <nav className="nav">
            <ul className="nav__list flex">
                {user && <li className="nav__item">
                    <Link to="/wylogowano" className="nav__item__link login">
                        {user.email}
                    </Link>
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
