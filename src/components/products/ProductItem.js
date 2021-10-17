import React from "react";
import IMG from "../../images/img01.jpg";

export const ProductItem = ({
    id,
    title, 
    price,
    image,
    category,
}) => {



    return(
        <div className="producto">
        <a href="#">
        <div className="producto__img">
            <img src={image.default} alt={title}/>
        </div>
        </a>
        <div className="producto__footer">
            <h1> {title} </h1>
            <p> {category} </p>
            <p className="price"> $ {price} </p>
        </div>
        <div className="buttom">
            <button className="btn">
                Añadir al carrito
            </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
        </div>
    )
}