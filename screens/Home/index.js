import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AddressForm from '../../components/AddressForm';
import { Link } from 'react-router-dom';
import mapService from '../../api/mapService';

import "../../assets/css/reset.css";
import "./styles.css";

class Home extends React.Component {
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
            mapService.getGeocoding(address, (data) => this.setState({ addressList: data }));
        }
    }

    render() {
        return (
            <>
                <Header />

                <main className="main">
                    <AddressForm />
                </main>

                <Footer />
            </>
        )
    }

}
export default Home;