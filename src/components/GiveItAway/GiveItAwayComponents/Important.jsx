import React from "react";

export const Important = ({message}) => {
    return (
        <section className="important">
                <h2 className="important__title">
                    Ważne!
                </h2>
                <h4 className="important__text">
                    {message}
                </h4>
        </section>
    )
}