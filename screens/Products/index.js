import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

import storeService from '../../api/storeService';


import "../../assets/css/reset.css";
import "./styles.css";

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            storeData: null,
            productsData: null
        }
    }

    componentDidMount() {
        this.searchStore();
    }

    searchStore() {
        ///const { geometry } = this.props.location;

        const geometry = { lat: -23.6284745, lng: -46.7069969 }

        const date = new Date().toISOString();

        const query = {
            query: `query pocSearchMethod {
                pocSearch(now: "${date}", lat: "${geometry.lat}", long: "${geometry.lng}", algorithm: "NEAREST") {
                  id
                  status
                }
            }`
        }

        storeService.search(query, (response) => {
            const storeData = response.pocSearch;

            this.setState({ storeData: storeData });

            if (storeData.length) {
                this.searchProducts(storeData[0].id);
            }
        });
    }

    searchProducts(storeId) {
        const query = {
            query: `query poc{
                        poc(id: ${storeId}) {
                            id
                            products(search: "") {
                                title
                                images {
                                    url
                                }
                                productVariants {
                                    price
                                }
                            }
                        }
                    }`
        }

        storeService.search(query, (response) => {
            this.setState({ productsData: response.poc.products })
        });
    }

    render() {
        const { storeData, productsData } = this.state;
        return (
            <>
                <Header />

                <main className="main">
                    {productsData && productsData.length > 0 ?
                        <>
                            <h1 className="main__title">Nossos produtos</h1>
                            <div className="product-list">
                                {productsData.map((item, index) => <ProductCard key={index.toString()} product={item} />)}
                            </div>
                        </>
                    : productsData !== null ?
                        <p className="address-list__error">Desculpe, mas ainda não atendemos seu endereço :(</p>
                    : (null)}
                </main>

                <Footer />
            </>)
    }
}

export default Products;