import React, { Component } from 'react';
import axios from 'axios';


export default class Testimony extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testimoni: []
        }
    }

    componentDidMount() {
        axios.get('http://165.22.100.70:8040/tim5/t/testimoni').then(res => {
            this.setState({ testimoni: res.data.testimoni })
            console.log(res.data)
        });
    }





    render() {
        return (
            // <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
            <div className="container mt-4" >
                <h4 className="text-uppercase text-center mb-4">catatan mereka tentang ketjilbergerak</h4>
                <div className="row ">

                    {
                        this.state.testimoni.map(testi =>

                            <div div div div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
                                <div className="card border-0">
                                    <div className="img-testimony text-center">
                                        <img className="rounded-circle  " src="https://yt3.ggpht.com/a/AATXAJxhHvZH8IfoXxxdxvvY8BLv5ftxhFAZz5J99A=s900-c-k-c0xffffffff-no-rj-mo" />
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title">{testi.nama}</h6>
                                        <p className="card-text"><small style={{ letterSpacing: 3 }} className="text-muted">{testi.pekerjaan}</small></p>
                                        <p className="card-text"><small className="text-muted">{testi.deskripsi_testimoni}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}