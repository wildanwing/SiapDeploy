import React from 'react';
import Produk1 from '../assets/images/donate1.jpg';


function Product() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-7 ">
                    <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                        <div className="carousel-inner">
                            <div className="carousel-item active"> <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills" /> </div>
                            <div className="carousel-item"> <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills" /> </div>
                            <div className="carousel-item"> <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills" /> </div>
                            <div className="carousel-item"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills" /> </div>
                        </div>

                        <ol className="carousel-indicators list-inline">
                            <li className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://i.imgur.com/weXVL8M.jpg" className="img-fluid" /> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://i.imgur.com/Rpxx6wU.jpg" className="img-fluid" /> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://i.imgur.com/83fandJ.jpg" className="img-fluid" /> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid" /> </a> </li>
                        </ol>
                    </div>

                </div>



                <div className="col-5 px-1">
                    <h3>Makanan berbuka dan sahur untuk Tunawisma</h3>
                    <label class="badge badge-primary py-2">
                        <span className="pb-2 align-middle">Sambung Rasa</span>
                    </label>
                    <p className="text-muted"><i class="fas fa-map-marker-alt"></i> Sleman</p>

                    <div className="card">
                        <p className="text-donasi">Dana terkumpul</p>
                        <p className="duit-donasi">Rp.4.000.000</p>
                        <hr />
                        <div className="row">
                            <div className="col-5">
                                <p className="waktu">Waktu</p><h5 className="text-hari">25 hari lagi</h5></div>
                            <div className="col-7 text-right">
                                <p className="partisipan">Berpartisipasi</p><h5 className="text-jumlah">388</h5></div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger">DONASI</button>
                    <button type="button" className="button-share"><i className="material-icons">share</i>   BAGIKAN</button>
                </div>
            </div>
        </div>

    )
}



export default Product;