import React from "react";
import HeroImage from "/src/assets/Hero Image.png"
import Decoration from "/src/assets/Decoration.svg"
import {Link} from "react-router-dom";
import "/src/scss/elements/_start.scss"

export const Start = ({id}) => {
    return (
        <div id={id} className={"container"}>
            <section className="hero">
                <img src={HeroImage} className="hero__image" alt={"hero__image"}/>
                <div className="hero__content">
                    <h1 className="hero__title">
                        Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <img src={Decoration} className="hero__decoration--img" alt={"decoration"}/>
                    <div className="hero__buttons">
                        <Link to="/logowanie" className="hero__button button">
                            Oddaj<br/>rzeczy
                        </Link>
                        <Link to="/logowanie" className="hero__button button">
                            Zorganizuj<br/>zbiórkę
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}