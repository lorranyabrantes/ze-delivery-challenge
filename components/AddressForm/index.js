import React from 'react';

import { Link } from 'react-router-dom';

import mapService from '../../api/mapService';

import "./styles.css";

class AddressForm extends React.Component {
    constructor() {
        super();

        this.state = {
            addressList: null
        }

        this.searchAddress = this.searchAddress.bind(this);
    }
    
    searchAddress(event) {
        const address = event.target.value;

        if (address.length > 3) {
            mapService.getGeocoding(address, (data) => {
                console.log(data)
                this.setState({ addressList: data })
            });
        }
    }

    render() {
        const { addressList } = this.state;
        return (
            <form className="address-form">
                <label className="address-form__label" htmlFor="address">Digite seu endereço</label>
                <input className="address-form__input" onKeyUp={this.searchAddress} type="text" name="address" id="address" placeholder="Ex.: R. Fradique Coutinho, 1632" />

                {addressList && addressList.length > 0 ?
                    <>
                    <h2 className="address-list__title">Selecione:</h2>
                    <ul className="address-list">
                        {addressList.map((item, index) => {
                            return (
                            <li key={index} className="address-list__item">
                                <Link className="address-list__link" to={{
                                    pathname: "/produtos",
                                    geometry: item.geometry
                                }}>
                                    {item.formatted}
                                </Link>
                            </li>)
                        })}
                    </ul>
                    </>
                : addressList != null ?
                    <p className="address-list__error">Desculpe, não encontramos o seu endereço :(</p>
                : (null)}

                {/* {<button className="address-form__button">Ver produtos</button>} */}
            </form>
        )
    }
}

export default AddressForm;