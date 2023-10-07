import { Link, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import { menuItems } from "./MenuSections";

export const Navigation = () => {
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const goToHomeAndScroll = async (id: string) => { // Dodaj typ string
        await navigate("/");
        await scroller.scrollTo(id, {
            duration: 1500,
            smooth: true
        });
    };

    return (
        <nav style={{position: "fixed"}}>
            <ul className={"flex"}>
                <li>
                    <Link to="/login">Zaloguj</Link>
                </li>
                <li>
                    <Link to="/signup">Załóż konto</Link>
                </li>
            </ul>
            {menuItems.map(({ id, name }) => (
                <a key={id} href={`/#${id}`} onClick={() => goToHomeAndScroll(id)}>
                    {name}
                </a>
            ))}
        </nav>
    );
};
