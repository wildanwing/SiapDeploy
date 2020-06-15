import React, { Component } from 'react';
import NavbarUpdate from "../components/NavbarUpdate";
import Product from "../components/Product.jsx";
import landingPage from '../json/landingPage.json';

export default class UpdateActivityPage extends Component {
    render() {
        return (
            <>
                <Product {...this.props}></Product>
                <NavbarUpdate {...this.props}></NavbarUpdate>

                <div class="container mt-1 mb-5" >
                    <div className="row ">

                        <div className="col mb-3">
                            <h4 className="mb-3 mt-2" style={{ color: '#f43b31' }}>Riwayat Donasi</h4>
                            <div className="card" style={{ height: 110 }} >
                                <div className="card-body card-activity">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="card-title">Elly Eiboy</h6>
                                            <div className="card-text">Donasi</div>
                                            <p className="card-text"><small class="text-muted">15 Juni 2020</small></p>
                                        </div>
                                        <div className="col text-right " >
                                            <h4 className="card-title py-4" >Rp. 1000000</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
