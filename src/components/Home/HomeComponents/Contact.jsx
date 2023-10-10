import React, {useState} from "react";
// import BgForm from "../../../assets/Background Image.png";
import Decoration from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export const Contact = ({id}) => {
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
        <div id={id} className={"container"}>
            <section className="contact-form__section">
                <h1 className="contact-form__title">
                    Skontaktuj się z nami
                </h1>
                <img src={Decoration} className="contact-form__decoration" alt={"decoration"}/>
                <form onSubmit={handleLoginSubmit} className="contact-form__form">
                    <div className="contact-form__form-group">
                        <label className="contact-form__label">Email</label>
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            className="contact-form__input"
                        />
                        <label className="contact-form__label">Hasło</label>
                        <input
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            className="contact-form__input"
                        />
                    </div>
                    <div className="contact-form__form-group">
                        <label className="contact-form__label">Wpisz swoją wiadomość</label>
                        <input
                            name="password"
                            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            value={userData.password}
                            onChange={handleInputChange}
                            className="contact-form__input"
                        />
                    </div>
                    <Link to="/zaloguj sie" class="contact-form__button button">
                        Wyślij
                    </Link>
                </form>
            </section>
        </div>
    )
}