import React, { Component } from 'react';
import axios from 'axios';


export default class DonationContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donations: []
        }
    }

    componentDidMount() {
        axios.get('http://165.22.100.70:8040/tim5/d/donasi').then(res => {
            this.setState({ donations: res.data.donations })
            console.log(res.data)
        });
    }


    render() {
        return (

            <div className="container mt-5">
                <div className="row">
                    {
                        this.state.donations.map(donation =>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="https://www.ilmuwebsite.com/uploads/2019/Oct/03/1/WE-AB791_DONATE_M_20190212194354.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">  <a href={`/donasi/${donation.doc._id}`} >   {donation.doc.judul}</a></h6>
                                        <p className="text-muted"><i class="fas fa-map-marker-alt"></i> {donation.doc.lokasi}</p>
                                        <p className="card-text" style={{ color: '#405CC3' }}>{donation.doc.kategori}</p>
                                        <div class="progress mb-2" style={{ height: 8 }}>
                                            <div class="progress-bar bg-primary" style={{ width: '90%' }}></div>
                                        </div>
                                        <p className="card-text"><small class="text-muted">Terkumpul</small></p>
                                        <div class="d-flex justify-content-between ">
                                            <span>Rp.{donation.doc.dana_terkumpul}</span>
                                            <label class="badge badge-primary py-2">
                                                <span className="pb-2 align-middle">{donation.doc.sisa_waktu} hari lagi</span>
                                            </label>
                                        </div>
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
