import React from "react";
import FootShop from "../../images/FootShop.png"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <Link to="">
                <div className="logo">
                    <img src={FootShop} alt="logo" width="150px"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/products">PRODUCTS</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
