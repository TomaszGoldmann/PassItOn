import React from "react";

export const SignUp: React.FC = () => {

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <label>Imię:</label>
                <input
                    type="text"
                />
            </div>
            <div>
                <label>E-mail:</label>
                <input
                    type="email"
                />
            </div>
            <div>
                <label>Hasło:</label>
                <input
                    type="password"
                />
            </div>
            <div>
                <label>Powtórz hasło:</label>
                <input
                    type="password"
                />
            </div>
            <button type="submit">Sign Up</button>
        </div>
    );
};
