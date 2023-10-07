import React from "react";

interface AboutProps {
    id: string;
    style: React.CSSProperties;
}

export const About: React.FC<AboutProps> = ({ id, style }) => {
    return (
        <div id={id} style={style}>
            <h1>About</h1>
        </div>
    )
}