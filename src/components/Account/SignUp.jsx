import React, {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/elements/_account.scss"
import {Link} from "react-router-dom";

export const SignUp = () => {
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
    };

    return (
        <section className={"center"}>
            <div className="account">
                <h1 className="account__title">Załóż konto</h1>
                <img className="account__decoration" src={Decoration} alt="Decoration"/>
                <form className="account__form" onSubmit={handleLoginSubmit}>
                    <div className="account__form-group">
                        <label className="account__label">Email</label>
                        <input
                            className="account__input"
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="account__form-group">
                        <label className="account__label">Hasło</label>
                        <input
                            className="account__input"
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="account__form-group">
                        <label className="account__label">Powtórz Hasło</label>
                        <input
                            className="account__input"
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
            </div>
            <div className="account__buttons">
                <Link to={"/zaloguj sie"} className="account__button button" type="submit">Zaloguj się</Link>
                <button className="account__button button" type="submit">Załóż konto</button>
            </div>
        </section>
    );
};
