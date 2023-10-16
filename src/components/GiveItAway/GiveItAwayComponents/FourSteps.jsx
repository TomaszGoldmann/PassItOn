import React from "react";
import HeroImage from "/src/assets/Header-Form-Background.png"
import Decoration from "/src/assets/Decoration.svg"
import "/src/scss/elements/_start.scss"

export const FourSteps = () => {
    const data = [
        {
            id: 1,
            text: "Wybierz rzeczy"
        },
        {
            id: 2,
            text: "Spakuj je w worki"
        },
        {
            id: 3,
            text: "Wybierz fundacje"
        },
        {
            id: 4,
            text: "Zamów kuriera"
        },
    ]
    return (
        <div className={"container"}>
            <section className="hero">
                <img src={HeroImage} className="hero__image" alt={"hero__image"}/>
                <div className="hero__content">
                    <h1 className="hero__title title">
                        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
                    </h1>
                    <img src={Decoration} className="hero__decoration--img" alt={"decoration"}/>
                    <h2 className={"hero__description"}>Wystarczą 4 proste kroki:</h2>
                    <div className="hero__items">
                        {data.map(el => (
                            <div className={"hero__item"}>
                                <span className={"hero__item-title"}>
                                    {el.id}
                                </span>
                                <p className={"hero__item-description"}>
                                    {el.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}