import React, { Component, useState } from 'react';
import NavbarProfile from "../components/NavbarProfile";
import landingPage from '../json/landingPage.json';

export default class HistoryDonationPage extends Component {

    render() {
        //const [selectedDate, setSelectedDate] = useState(null);
        return (
            <>
                <div class="container container-profile mt-5 mb-5" >
                    <div className="row ">
                        <NavbarProfile {...this.props} />
                        <div className="col-sm-9">
                            <h4 className="mb-4 mt-4" style={{ color: '#f43b31' }}>Riwayat Donasi</h4>
                            <div className="card mb-3" style={{ height: 100 }} >
                                <div className="card-body card-activity">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title">Rp. 100.000</h5>
                                            <p className="card-text"><small class="text-muted">25 Januari 2020</small></p>
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
