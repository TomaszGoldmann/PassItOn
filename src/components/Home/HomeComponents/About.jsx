import React from "react";
import People from "../../../assets/People.png"
import Decoration from "../../../assets/Decoration.svg";
import Signature from "../../../assets/Signature.svg";

export const About = ({id}) => {
    return (
        <div id={id} className="about">
            <div className="about__content">
                <h1 className="about__title title">
                    O nas
                </h1>
                <img src={Decoration} className="about__decoration" alt="decoration"/>
                <p className="about__text">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <div className="about__signature">
                    <img src={Signature} alt="signature"/>
                </div>
            </div>
            <img src={People} className="about__image" alt={"people"}/>
        </div>

    )
}