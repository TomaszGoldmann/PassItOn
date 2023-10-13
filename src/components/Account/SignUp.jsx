import React, {useContext, useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/elements/_account.scss"
import {Link, useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../../Firebase/Firebase.jsx";
import MyContext from "../../Providers/myContext.jsx";

export const SignUp = () => {
    const {user, setUser} = useContext(MyContext)
    const navigate = useNavigate()

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

    return (
        <section className={"center"}>
            <div className="account">
                <h1 className="account__title">Załóż konto</h1>
                <img className="account__decoration" src={Decoration} alt="Decoration"/>
                <form className="account__form" onSubmit={handleSubmit}>
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
                    <div className="account__form-group">
                        <label className="account__label label">Powtórz Hasło</label>
                        <input
                            className="account__input input"
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
            </div>
            <div className="account__buttons">
                <Link to={"/logowanie"} className="account__button button" type="submit">Zaloguj się</Link>
                <button className="account__button button" type="submit" onClick={handleSignUp}>Załóż konto</button>
            </div>
            {user && <h1>Zalogowano email: {user.email}</h1>}
        </section>
    );
};
