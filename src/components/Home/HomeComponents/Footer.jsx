import React from "react";
import fb from "../../../assets/Facebook.png"
import ig from "../../../assets/Instagram.png"

export const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__logo"></div>
            <h1 className="footer__copyright">Copyright by Tomasz Goldmann</h1>
            <div className="footer__social">
                <img src={fb} alt="Facebook" className="footer__social-icon footer__social-icon--fb"/>
                <img src={ig} alt="Instagram" className="footer__social-icon footer__social-icon--ig"/>
            </div>
        </footer>
    )
}