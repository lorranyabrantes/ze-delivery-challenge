import React from 'react';
import { Link } from 'react-router-dom';
import mapService from '../../api/mapService';

import "./styles.css";

class AddressForm extends React.Component {
    constructor() {
        super();

        this.state = {
            addressList: null,
            timeout: null
        }

        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(event) {
        const value = event.target.value;

        clearTimeout(this.state.timeout);

        this.setState({
            timeout: setTimeout(() => {
                this.searchAddress(value);
            }, 500)
        });
    }

    searchAddress(address) {
        mapService.getGeocoding(address, (data) => {
            this.setState({ addressList: (address.length > 3) ? data : null })
        });
    }

    render() {
        const { addressList } = this.state;
        return (
            <form className="address-form">
                <label className="address-form__label" htmlFor="address">Digite seu endereço</label>
                <input className="address-form__input" onKeyUp={this.onKeyPress} type="text" name="address" id="address" placeholder="Ex.: Rua Américo Brasiliense, Santo Amaro, São Paulo" />

                {addressList && addressList.length > 0 ?
                    <>
                        <h2 className="address-list__title">Selecione:</h2>
                        <ul className="address-list">
                            {addressList.map((item, index) => (
                                <li key={index} className="address-list__item">
                                    <Link className="address-list__link" to={{ pathname: "/produtos", geometry: item.geometry }}>
                                        {item.formatted}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                : addressList != null ?
                    <p className="address-list__error">Desculpe, não encontramos o seu endereço :(</p>
                : (null)}
            </form>
        )
    }
}

export default AddressForm;