import React, { Component } from 'react';
import NavbarContent from "../components/NavbarContent";
import DonationContent from "../components/DonationContent.jsx";
import SearchBar from '../components/SearchBar';


class Donasi extends Component {

    render() {

        return (
            <>
                <SearchBar />
                <NavbarContent {...this.props}></NavbarContent>
                <div className="container mt-3 mb-4">
                    <div className="row">
                        <div className="col-2">
                            <h6>Kategori</h6>
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pilih Kategori</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Sambung Rasa</a>
                                    <a className="dropdown-item" href="#">Sambung Karsa</a>
                                    <a className="dropdown-item" href="#">Sambung Ilmu</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mr-5 ">
                            <h6>Lokasi</h6>
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lokasi
                     </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Kota Yogyakarta</a>
                                    <a className="dropdown-item" href="#">Gunung Kidul</a>
                                    <a className="dropdown-item" href="#">Kulonprogo</a>
                                    <a className="dropdown-item" href="#">Sleman</a>
                                    <a className="dropdown-item" href="#">Bantul</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h6 style={{ textAlign: 'right' }}>Lokasi</h6>
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle float-right " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sortir Menurut
                     </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DonationContent />

                
                <div className="container mt-2">
                    <div className="row ">
                        <div className="col ">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item"><a class="page-link" href="#">Sebelumnya</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li c
lass="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Selanjutnya</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Donasi;
