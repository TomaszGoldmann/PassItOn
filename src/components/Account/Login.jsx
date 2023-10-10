import React, {useState} from "react";
import Decoration from "../../assets/Decoration.svg"
import "/src/scss/elements/_account.scss"
import "/src/scss/main.scss"
import {Link} from "react-router-dom";

export const Login = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Tutaj możesz dodać logikę logowania, np. wysłanie danych na serwer

        // Po zalogowaniu możesz przekierować użytkownika na inną stronę
    };

    return (
        <div className={"center"}>
            <section className="account">
                <h1 className="account__title">Zaloguj się</h1>
                <img className="account__decoration" src={Decoration} alt="Decoration"/>
                <form className="account__form" onSubmit={handleLoginSubmit}>
                    <div className="account__form-group">
                        <label className="account__label label">Email</label>
                        <input
                            className="account__input input"
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="account__form-group">
                        <label className="account__label label">Hasło</label>
                        <input
                            className="account__input input"
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
            </section>
            <div className="account__buttons">
                <Link to={"/zaloz konto"} className="account__button button" type="submit">Załóż konto</Link>
                <button className="account__button button" type="submit">Zaloguj się</button>
            </div>
        </div>
    );
};
