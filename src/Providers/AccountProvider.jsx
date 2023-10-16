import React, {useState} from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const MyContext = React.createContext("");
export const AccountProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const auth = getAuth();
    onAuthStateChanged(auth, (userData) => {
        if (userData) {
            setUser(userData)
        } else {
            setUser(null)
        }
    });

    const values = {
        user,
        setUser,
    }

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    );
};