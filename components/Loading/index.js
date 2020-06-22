import React from 'react';

import "./styles.css";

const Loading = (props) => (
    (props.isActive) ? 
    <div className = "loading">
        <span className="loading__text">Carregando...</span>
        <span className="loading__icon loading__icon--left"></span>
        <span className="loading__icon loading__icon--right"></span>
    </div> : (null)
)

export default Loading;