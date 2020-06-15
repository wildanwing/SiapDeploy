import React from 'react';
import data from '../data';
import '../assets/css/App.css'

function NewsContent() {

    return (
        <div className="container mt-5">
            <p className="NewsContent-Berita text-center">BERITA</p>
            <p className="NewsContent-Berita1 text-center">Berbagi kabar kebaikan ke seluruh penjuru dunia</p>
            <div className="row">
                {
                    data.donates.map(donate =>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={donate.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title">{donate.title}</h6>
                                    <p className="card-text"><small class="text-muted">12/12/2020</small></p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default NewsContent;