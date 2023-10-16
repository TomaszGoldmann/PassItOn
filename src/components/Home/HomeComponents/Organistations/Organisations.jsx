import React, {useState} from "react";
import Decoration from "../../../../assets/Decoration.svg";
import {dataOrganisations} from "./OrganisationsData.jsx";

export const Organisations = ({id}) => {
    const [found, setFound] = useState(0);
    const [page, setPage] = useState(1);
    const itemsToShow = 3
    const startIndex = (page - 1) * itemsToShow
    const endIndex = startIndex + itemsToShow
    const totalPages = Math.ceil(dataOrganisations[found].entities.length / 3)
    const pages = Array.from({length:totalPages}).map((_,index) => index + 1)
    const dataToShow = dataOrganisations[found].entities.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setPage(page)
    }

    const handleFundChange = (foundation) => {
        setPage(1)
        setFound(foundation)
    }

    return (
        <div id={id} className="container">
            <section className="organisations">
                <h1 className="organisations__title title">
                    Komu pomagamy?
                </h1>
                <img src={Decoration} className="organisations__decoration img" alt="decoration"/>
                <div className="organisations__content">
                    <div className="organisations__categories">
                        {dataOrganisations.map((el, index) => (
                            <h2 className={`organisations__category ${index === found ? "found" : ""}`} onClick={() => handleFundChange(index)} key={index}>{el.name}</h2>
                        ))}
                    </div>
                    <h4 className="organisations__description">
                        {dataOrganisations[found].description}
                    </h4>
                    <ul className="organisations__list">
                        {dataToShow.map((el, i) => (
                            <li className="organisations__item" key={i}>
                                <div className="organisations__item-info">
                                    <span className="organisations__item-label">{el.name}</span>
                                    <span className="organisations__item-description">{el.description}</span>
                                </div>
                                <span className="organisations__item-description">{el.items}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="organisations__pages">
                        {totalPages > 1 ? pages.map((value, index) => (
                                <div className={`organisations__page ${value === page ? "page" : ""}`} onClick={() => handlePageChange(value)} key={index}>{index + 1}</div>
                            )) : null}
                    </div>
                </div>
            </section>
        </div>
    )
}