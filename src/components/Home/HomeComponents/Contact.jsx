import React, {useState} from "react";
import BgForm from "../../../assets/Background Image.png";
import Decoration from "../../../assets/Decoration.svg";
import {Footer} from "./Footer.jsx";
import validator from "validator";
// import {addDoc} from "firebase/firestore";
// import {colRefMessages} from "../../../Firebase/Firebase.jsx";
import {serverTimestamp} from "firebase/firestore";

export const Contact = ({id}) => {
    const API = "http://localhost:3000";
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState({
        username: false,
        email: false,
        message: false
    })

    const [success, setSuccess] = useState(false)

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    };

    const handleValidate = () => {
        const errors = {
            username: userData.username.includes(" ") || userData.username.length < 3,
            email: !validator.isEmail(userData.email),
            message: userData.message.length < 250
        }

        if (!errors.username && !errors.email && !errors.message) {
            handleSend({
                ...userData,
                time: serverTimestamp()
            })
            setUserData({
                username: "",
                email: "",
                message: ""
            })
            setSuccess(true)
        } else {
            setSuccess(false)
        }

        setError(errors)
    }

    const handleSend = (data) => {
        // try {
        //     addDoc(colRefMessages, {data})
        //         .then(() => {
        //         })
        // } catch (e) {
        //     console.log(e)
        // }

        fetch(`${API}/messages`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div id={id} className="contact container">
            <img src={BgForm} className="contact__image" alt={"contact__image"}/>
            <section className="contact__section">
                <div className="contact__content">
                    <h1 className="contact__title">
                        Skontaktuj się z nami
                    </h1>
                    <img src={Decoration} className="contact__decoration" alt={"decoration"}/>
                    {success &&
                        <span className={"success"}>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</span>}
                    <form onSubmit={handleLoginSubmit} className="contact__form">
                        <div className="contact__form__group">
                            <div className="contact__form__group--data">
                                <div className="contact__form__group--data--group">
                                    <label className="contact__label label">Wpisz swoje imię</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={userData.username}
                                        onChange={(e) => setUserData({
                                            ...userData,
                                            username: e.target.value
                                        })}
                                        placeholder={"Krzysztof"}
                                        className={`contact__input input ${error.username ? "input-error" : ""}`}
                                    />
                                    {error.username &&
                                        <span
                                            className={"error"}>Podane imię jest nie prawidłowe!</span>}
                                </div>
                                <div className="contact__form__group--data--group">
                                    <label className="contact__label label">Wpisz swój email</label>
                                    <input
                                        name="email"
                                        type={"email"}
                                        value={userData.email}
                                        onChange={(e) => setUserData({
                                            ...userData,
                                            email: e.target.value
                                        })}
                                        placeholder={"abc@xyz.pl"}
                                        className={`contact__input input ${error.email ? "input-error" : ""}`}
                                    />
                                    {error.email &&
                                        <span
                                            className={"error"}>Podany email jest nie prawidłowy!</span>}
                                </div>
                            </div>
                        </div>
                        <div className="contact__form__group">
                            <label className="contact__label label">Wpisz swoją wiadomość</label>
                            <textarea
                                name="textarea"
                                placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                value={userData.message}
                                onChange={(e) => setUserData({
                                    ...userData,
                                    message: e.target.value
                                })}
                                className={`contact__input input textarea ${error.message ? "input-error" : ""}`}
                            />
                            {error.message &&
                                <span
                                    className={"error"}>Text musi mieć co najmniej 250 znaków!</span>}
                            <span className={""}>{userData.message.length}/250</span>
                        </div>
                        <button className="contact__button button" onClick={handleValidate}>
                            Wyślij
                        </button>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    )
}