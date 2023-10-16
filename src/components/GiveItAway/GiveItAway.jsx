import {Contact} from "../Home/HomeComponents/Contact.jsx";
import React from "react";
import {FourSteps} from "./GiveItAwayComponents/FourSteps.jsx";
import {Form} from "./GiveItAwayComponents/Form.jsx";

export const GiveItAway = () => {
    return (
        <>
            <FourSteps/>
            <Form/>
            <Contact/>
        </>
    );
}