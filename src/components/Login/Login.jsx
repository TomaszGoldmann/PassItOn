import React, { useState } from "react";

export const Login = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Tutaj możesz dodać logikę logowania, np. wysłanie danych na serwer

        // Po zalogowaniu możesz przekierować użytkownika na inną stronę
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};
