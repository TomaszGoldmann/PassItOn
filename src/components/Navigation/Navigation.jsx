import {Link, useNavigate} from "react-router-dom";
import * as Scroll from "react-scroll";
import {menuItems} from "./MenuSections";

export const Navigation = () => {
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

    return (
        <nav className="nav">
            <ul className="nav__list flex">
                <li className="nav__item">
                    <Link to="/zaloguj sie" className="nav__item__link login">
                        Zaloguj
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/zaloz konto" className="nav__item__link login">
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
