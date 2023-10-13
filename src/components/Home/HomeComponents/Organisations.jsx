import React from "react";
import Decoration from "../../../assets/Decoration.svg";

export const Organisations = ({id}) => {
    const tab = [1, 2, 3]
    const pages = new Array(Math.ceil(tab.length / 3)).fill(0);
    // const [activeCategory, setActiveCategory] = useState('fundacje');
    // const [page, setPage] = useState(1);

    // const data =  [
    //     {
    //         id: 'fundacje',
    //         name: "Fundacje",
    //         description: "Lorem ipsum",
    //         entities: [
    //             {
    //                 id: 1,
    //                 name: "Fundacja XYZ",
    //                 description: "Lorem ipsum",
    //                 items: ['zabawki', 'książki']
    //             },
    //             {
    //                 id: 2,
    //                 name: "Fundacja ABC",
    //                 description: "Lorem ipsum",
    //                 items: ['zabawki', 'książki']
    //             }
    //         ]
    //     },
    //     {
    //         id: 'zbiorki',
    //         name: "Zbiórki"
    //     }
    // ];

    return (
        <div id={id} className="container">
            <section className="organisations">
                <h1 className="organisations__title title">
                    Komu pomagamy?
                </h1>
                <img src={Decoration} className="organisations__decoration img" alt="decoration"/>
                <div className="organisations__content">
                    <div className="organisations__categories">
                        <h2 className="organisations__category">Fundacjom</h2>
                        <h2 className="organisations__category">Organizacjom<br/>pozarządowym</h2>
                        <h2 className="organisations__category">Lokalnym<br/>zbiórkom</h2>
                    </div>
                    <h4 className="organisations__description">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </h4>
                    <ul className="organisations__list">
                        {tab.map((el, i) => (
                            <li className="organisations__item" key={i}>
                                <div className="organisations__item-info">
                                    <span className="organisations__item-label">to jest {el} listy</span>
                                    <span className="organisations__item-description">Quis varius quam quisque id diam vel quam elementum pulvinar.</span>
                                </div>
                                <span className="organisations__item-description">coś tam</span>
                            </li>
                        ))}
                    </ul>
                    <div className="organisations__pages">
                        {pages.map((el, i) => (
                            <div className="organisations__page" key={i}>{i + 1}</div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}