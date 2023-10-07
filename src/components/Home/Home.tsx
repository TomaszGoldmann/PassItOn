import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Organisations } from "./Organisations";
export const Home: React.FC = () => {
    return (
        <>
            <About id="section-1" style={{ background: "tomato", height: "100vh" }}/>
            <Organisations id="section-2" style={{ background: "cornflowerblue", height: "100vh" }}/>
            <Contact id="section-3" style={{ background: "olive", height: "100vh" }}/>
        </>
    );
}
