import React, {useState} from "react";
import BgForm from "../../../assets/Background Image.png";
import Decoration from "../../../assets/Decoration.svg";
import {Footer} from "./Footer.jsx";

export const Contact = ({id}) => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        message: ""
    });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id={id} className="contact container">
            <img src={BgForm} className="contact__image" alt={"contact__image"}/>
            <section className="contact__section">
                <div className="contact__content">
                    <h1 className="contact__title">
                        Skontaktuj się z nami
                    </h1>
                    <img src={Decoration} className="contact__decoration" alt={"decoration"}/>
                    <form onSubmit={handleLoginSubmit} className="contact__form">
                        <div className="contact__form__group">
                            <div className="contact__form__group--data">
                                <div className="contact__form__group--data--group">
                                    <label className="contact__label label">Wpisz swoje imię</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={userData.username}
                                        onChange={(e) =>  setUserData({
                                            ...userData,
                                            username: e.target.value
                                        })}
                                        placeholder={"Krzysztof"}
                                        className="contact__input input"
                                    />
                                </div>
                                <div className="contact__form__group--data--group">
                                    <label className="contact__label label">Wpisz swój email</label>
                                    <input
                                        name="email"
                                        type={"email"}
                                        value={userData.email}
                                        onChange={(e) =>  setUserData({
                                            ...userData,
                                            email: e.target.value
                                        })}
                                        placeholder={"abc@xyz.pl"}
                                        className="contact__input input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="contact__form__group">
                            <label className="contact__label label">Wpisz swoją wiadomość</label>
                            <textarea
                                name="textarea"
                                placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                value={userData.message}
                                onChange={(e) =>  setUserData({
                                    ...userData,
                                    message: e.target.value
                                })}
                                className="contact__input input textarea"
                            />
                        </div>
                        <button className="contact__button button" onClick={() => console.log(userData)}>
                            Wyślij
                        </button>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    )
}