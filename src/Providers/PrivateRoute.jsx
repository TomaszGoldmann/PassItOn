import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "./AccountProvider.jsx";

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(MyContext);

    if (!user) {
        return <Navigate to={"/logowanie"} />
    }

    return children;
}