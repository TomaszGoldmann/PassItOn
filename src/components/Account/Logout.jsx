import React from "react";
import Decoration from "../../assets/Decoration.svg"
import "/src/scss/elements/_account.scss"
import "/src/scss/main.scss"
import {Link} from "react-router-dom";

export const Login = () => {

    return (
        <div className={"center"}>
            <section className="account">
                <h1 className="account__title">Wylogowanie nastąpiło pomyślnie!</h1>
                <img className="account__decoration" src={Decoration} alt="Decoration"/>
            </section>
            <div className="account__buttons">
                <Link to={"/"} className="account__button button" type="submit">Strona główna</Link>
            </div>
        </div>
    );
};
