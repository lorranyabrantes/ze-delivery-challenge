import React from 'react';

import "./styles.css";

class ProductQuantity extends React.Component {
    constructor() {
        super();

        this.state = {
            quantity: 0
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const value = parseInt(event.target.value);

        this.setState({quantity: value ? value : ''})
    }

    increase() {
        let quantity = this.state.quantity + 1;

        this.setState({ quantity: quantity })
    }

    decrease() {
        let quantity = this.state.quantity - 1;

        if (quantity < 0) return;

        this.setState({ quantity: quantity })
    }

    render() {
        return (
            <div className="product-card__quantity">
                <button className="product-card__button" id="decrease-button" onClick={this.decrease}>-</button>
                <input className="product-card__input" pattern="[0-9]*" type="text" onChange={this.onChange} value={this.state.quantity} />
                <button className="product-card__button" id="increase-button" onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default ProductQuantity;