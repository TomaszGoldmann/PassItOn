import React, {useState} from "react";
import Decoration from "../../assets/Decoration.svg"
import "/src/scss/elements/_account.scss"
import "/src/scss/main.scss"
import {Link, useNavigate} from "react-router-dom";
import validator from "validator";

export const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({
        email: false,
        password: false,
    })

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleLogin = () => {
        navigate("/PassItOn/")
    };

    const handleValidate = () => {
        const errors = {
            email: !validator.isEmail(userData.username),
            password: userData.password.length < 6,
        }

        if (!errors.email && !errors.password && !errors.confirmPassword) {
            handleLogin()
        }

        setError(errors)
    }

    return (
        <div className={"center"}>
            <section className="account">
                <h1 className="account__title">Zaloguj się</h1>
                <img className="account__decoration" src={Decoration} alt="Decoration"/>
                <form className="account__form" onSubmit={handleSubmit}>
                    <div className="account__form-group">
                        <label className="account__label label">Email</label>
                        <input
                            className={`account__input input ${error.email ? "input-error" : ""}`}
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                        {error.email &&
                            <span
                                className={`${error.email ? "error" : ""}`}>Podany email jest nie prawidłowy!</span>}
                    </div>
                    <div className="account__form-group">
                        <label className="account__label label">Hasło</label>
                        <input
                            className={`account__input input ${error.password ? "input-error" : ""}`}
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                        {error.password &&
                            <span className={`${error.password ? "error" : ""}`}>Podane hasło jest za krótkie!</span>}
                    </div>
                </form>
            </section>
            <div className="account__buttons">
                <Link to={"/PassItOn/rejestracja"} className="account__button button" type="submit">Załóż konto</Link>
                <button className="account__button button" type="submit" onClick={handleValidate}>Zaloguj się</button>
            </div>
        </div>
    );
};
