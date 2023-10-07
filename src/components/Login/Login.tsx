import React, { useState, ChangeEvent, FormEvent } from "react";

interface UserData {
    username: string;
    password: string;
}

export const Login: React.FC = () => {
    const [userData, setUserData] = useState<UserData>({
        username: "",
        password: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
