import React from "react";

export const Info = ({ id }) => {
    return (
        <div id={id} className="container">
            <section className="benefits">
                <div className="benefits__item">
                    <h2 className="benefits__title">
                        10
                    </h2>
                    <h4 className="benefits__subtitle">
                        ODDANYCH WORKÓW
                    </h4>
                    <p className="benefits__description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="benefits__item">
                    <h2 className="benefits__title">
                        5
                    </h2>
                    <h4 className="benefits__subtitle">
                        WSPARTYCH ORGANIZACJI
                    </h4>
                    <p className="benefits__description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="benefits__item">
                    <h2 className="benefits__title">
                        7
                    </h2>
                    <h4 className="benefits__subtitle">
                        ZORGANIZOWANY ZBIÓREK
                    </h4>
                    <p className="benefits__description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
            </section>
        </div>
    )
}