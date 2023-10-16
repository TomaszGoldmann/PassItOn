import React from "react";
import Decoration from "../../../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {icons} from "./InfoItems.jsx";

export const Info = ({id}) => {
    return (
        <div id={id} className="info">
            <h2 className="info__title title">
                Wystarczą 4 proste kroki
            </h2>
            <img src={Decoration} className="info__decoration" alt={"decoration"}/>
            <div className="bgLightGrey info__container">
                {icons.map((el, i) => (
                    <div className="info__item" key={i}>
                        <img src={el.icon} alt={"zdj"} className="info__icon"/>
                        <h6 className="info__item-title">
                            {el.title}
                        </h6>
                        <hr className="info__item-separator"/>
                        <p className="info__item-text">
                            {el.text}
                        </p>
                    </div>
                ))}
            </div>
            <Link to="/oddaj rzeczy" className="info__button button">
                Oddaj<br/>rzeczy
            </Link>
        </div>
    );
};
