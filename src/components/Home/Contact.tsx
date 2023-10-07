import React from "react";

interface ContactProps {
    id: string;
    style: React.CSSProperties;
}

export const Contact: React.FC<ContactProps> = ({ id, style }) => {
    return (
        <div id={id} style={style}>
            <h1>Contact</h1>
        </div>
    )
}