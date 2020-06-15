import React from 'react';
import data from '../data';

function DonationContent() {
    return (

        <div className="container mt-5">
             <p className="NewsContent-Berita text-center">BERBAGAI PROGRAM DONASI</p>
            <p className="NewsContent-Berita1 text-center">Temukan program donasi pilihamu  di berbagai program</p>
            <div className="row">
                {
                    data.donates.map(donate =>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={donate.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">{donate.title}</h6>
                                    <p className="text-muted"><i class="fas fa-map-marker-alt"></i> {donate.city}</p>
                                    <p className="card-text" style={{ color: '#405CC3' }}>{donate.category}</p>
                                    <div class="progress mb-2" style={{ height: 8 }}>
                                        <div class="progress-bar bg-primary" style={{ width: '50%' }}></div>
                                    </div>
                                    <p className="card-text"><small class="text-muted">Terkumpul</small></p>
                                    <div class="d-flex justify-content-between ">
                                        <span>Rp.{donate.currently}</span>
                                        <label class="badge badge-primary py-2">
                                            <span className="pb-2 align-middle">{donate.dueDay} hari lagi</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}



export default DonationContent;