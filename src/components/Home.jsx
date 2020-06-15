import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import carousel2 from '../assets/images/carousel2.png';
import carousel3 from '../assets/images/carousel3.png';
import carousel4 from '../assets/images/carousel4.png';

import rasa from '../assets/images/rasa.png';
import karsa from '../assets/images/karsa.png';
import ilmu from '../assets/images/ilmu.png';

import counter from '../assets/images/counterbanner.svg';
import readnext from '../assets/images/button.png';

import Readnext from '../screens/News';
import Readnext1 from '../screens/News2';
import Readnext2 from '../screens/News';                                                                                                                                                                                                            

import NewsContent from "../components/NewsContent";
import Testimony from "../components/Testimony";
import DonationContent from "../components/DonationContent";                                                                                                                                               

import landingPage from '../json/landingPage.json';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">

                    </div>
                    <form className="form-inline float-right">
                        <div className="input-group mb-2">
                            <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control py-1 px-5" placeholder="donasi & berita" />
                            </div>
                        </div>

                        <button type="submit" className="btn  btn-search mb-2 px-3 py-1">Cari</button>

                    </form>
                </div>
                

                <div>
                    <h2 className="dislplay-2 text-center header1">Mulai berdonasi dengan Ketjilbergerak untuk membantu sesama</h2>
                </div>

                <Router>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="10000">
                            <img src={carousel2} className="d-block w-100" alt="carousel1.jpg" />
                            <div className="carousel-caption d-none d-md-block ccapt">
                                <p className="text-left">Makanan sehat adalah hak semua orang. Makan makanan sehat memberikan energi yang baik untuk tubuh. Energi baik mendorong lahirnya pikiran-pikiran baik dan perbuatan-perbuatan baik.</p>
                                <br />
                                <a href="/readnext"><img src={readnext} alt="readnext.jpg" className="readnext" /></a>
                            </div>
                        </div>
                        <div class="carousel-item" data-interval="2000">
                            <img src={carousel3} className="d-block w-100" alt="carousel2.jpg" />
                            <div className="carousel-caption d-none d-md-block ccapt">
                                <p className="text-left">PT. Super salurkan sembako ke masyarakat kelompok rentan sebanyak 1.000 paket sembako ke sejumlah wilayah di Yogyakarta.</p>
                                <br />
                                <br />
                                <a href="/readnext1"><img src={readnext} alt="readnext.jpg" className="readnext"/></a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={carousel4} className="d-block w-100" alt="carousel3.jpg" />
                            <div className="carousel-caption d-none d-md-block ccapt">
                                <p className="text-left">Ramadan tahun ini jelas beda. Masa pandemi membuat semua lini kehidupan jadi lebih sulit dari biasanya. Termasuk efek kesulitan untuk mencukupi kebutuhannya.</p>
                                <br />
                                <br />
                                <a href="/readnext2"><img src={readnext} alt="readnext.jpg" className="readnext"/></a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                    <Switch>
                        <Route exact path='/readnext' component={Readnext} />
                        <Route exact path='/readnext1' component={Readnext1} />
                        <Route exact path='/readnext2' component={Readnext2} />
                    </Switch>  
                </Router>
                <div>
                    <h3 className="dislplay-3 text-center kat">KATEGORI PROGRAM DONASI</h3>
                    <p className="text-center pkat">Temukan program donasi pilihamu  di berbagai kategori</p>
                </div>

                <br />
                <br />

                <div className="row">
                    <div className="col">
                        <img src={rasa} className="shadow border1 rasa" alt="sambung rasa.jpg" />
                        <p className="caption1">Sambung Rasa</p>
                    </div>
                    <div className="col">
                        <img src={karsa} className="shadow border1 karsa" alt="sambung karsa.jpg" />
                        <div className="caption2"><p>Sambung Karsa</p></div>
                    </div>
                    <div className="col">
                       <img src={ilmu} className="shadow border1 ilmu" alt="sambung ilmu.jpg" />
                        <div className="caption3"><p>Sambung Ilmu</p></div> 
                    </div>
                    
                </div>

                <br />
                <br />
                <br />

                <div>
                    <img src={counter} alt="counter.svg" className="counter" />
                </div>
                <br />
                <br />
                <br />

                <DonationContent {...this.props}></DonationContent>
                <NewsContent data={landingPage.categories} />
                <Testimony />
            </div>
        )
    }
}

export default Home;