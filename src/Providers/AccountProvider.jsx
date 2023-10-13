import React, {useEffect, useState} from 'react';
import MyContext from "./myContext.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AccountProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (userData) => {
            if (userData) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(userData)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    },[])

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