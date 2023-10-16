import React, {useContext, useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/elements/_account.scss"
import {Link, useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../../Firebase/Firebase.jsx";
import validator from 'validator';
import {MyContext} from "../../Providers/AccountProvider.jsx";

export const SignUp = () => {
    const {setUser} = useContext(MyContext)
    const navigate = useNavigate()
    const [error, setError] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    })

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSignUp = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userData.username, userData.password)
            .then(async (userCredential) => {
                // Signed up
                await setUser(userCredential.user.email,)

                await setUserData({
                    username: "",
                    password: "",
                })

                navigate("/")
                //
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });
    };

    const handleValidate = () => {
        const errors = {
            email: !validator.isEmail(userData.username),
            password: userData.password.length < 5,
            confirmPassword: userData.password !== userData.confirmPassword
        }

        if (!errors.email && !errors.password && !errors.confirmPassword) {
            handleSignUp()
        }

        setError(errors)
    }

    return (
        <section className={"center"}>
            <div className="account">
                <h1 className="account__title">Załóż konto</h1>
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
                    <div className="account__form-group">
                        <label className="account__label label">Powtórz Hasło</label>
                        <input
                            className={`account__input input ${error.confirmPassword ? "input-error" : ""}`}
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {error.confirmPassword &&
                            <span className={`${error.confirmPassword ? "error" : ""}`}>Hasła się różnią!</span>}
                    </div>
                </form>
            </div>
            <div className="account__buttons">
                <Link to={"/logowanie"} className="account__button button" type="submit">Zaloguj się</Link>
                <button className="account__button button" type="submit" onClick={handleValidate}>Załóż konto</button>
            </div>
        </section>
    );
};
