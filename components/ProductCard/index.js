import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/imgs/logo.png";

import UnavailableImage from "../../assets/imgs/unavailable-image.png";

import ProductQuantity  from "../ProductQuantity";

import "./styles.css";

const ProductCard = (props) => {
    console.log(props)
    const { product } = props;
    
    const onImageError = (element) => element.target.src = UnavailableImage;

    const formatMoney = (value) => value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    return (
        <div className="product-card">
            <img className="product-card__image" onError={onImageError} src={product.images[0].url} alt="image" />
            <h3 className="product-card__name">{product.title}</h3>
            <p className="product-card__price">{formatMoney(product.productVariants[0].price)}</p>
            <ProductQuantity />
        </div>
    )
}

export default ProductCard;