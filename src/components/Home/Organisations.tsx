import React from "react";

interface OrganisationsProps {
    id: string;
    style: React.CSSProperties;
}

export const Organisations: React.FC<OrganisationsProps> = ({ id, style }) => {
    return (
        <div id={id} style={style}>
            <h1>Organisations</h1>
        </div>
    )
}