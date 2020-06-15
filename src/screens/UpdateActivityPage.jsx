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


                <div className="container mt-4 mb-4">
                    <div className="card" >
                        <div className="card-body card-activity">
                            <h6 className="card-title">Rabu, 10 Juni 2020</h6>
                            <img style={{ height: 324 }} className="card-img" src="https://www.paramount-land.com/wp-content/uploads/2017/03/Dummy-Header.jpg" alt="Card image" />
                            <div className="card-text ">
                                <ol className="1 mt-4">
                                    <li>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                    </li>
                                    <li>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </li>
                                    <li>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}
