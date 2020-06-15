import React, { Component } from 'react';
import NavbarUpdate from "../components/NavbarUpdate";
import Product from "../components/Product.jsx";
import landingPage from '../json/landingPage.json';
import '../assets/css/App.css'

export default class UpdateActivityPage extends Component {
    render() {
        return (
            <>

                <Product {...this.props}></Product>
                <NavbarUpdate {...this.props}></NavbarUpdate>


                <div className="container container-deskripsi mt-4 mb-4">
                    <p className="deskripsi-text">Sambung Rasa, barangkali menjadi sebuah ungkapan yang cukup tepat untuk menggambarkan program ini. Jumlah warga miskin di DIY per-Maret 2019 adalah 448.470 orang (11.9% dari total penduduk) menurut Badan Pusat Statistik, padahal angka rata-rata nasional 'hanya' 9.66%. Sebagai anak muda, apa yang bisa kita lakukan?</p>
                     <p className="deskripsi-text">  Setiap bulan sekali, Dapoer Bergerak membuka kesempatan bagi siapa saja yang ingin ikut terlibat, baik meracik, memasak, ataupun mendistribusikan hasil masakan. Ketjilbergerak juga menerima donasi uang yang akan dilaporkan secara transparan. Donasimu akan sangat berarti bagi kami dan saudara-saudara kita yang kesulitan untuk makan.</p>
                      <p className="deskripsi-text mb-40 pb-40"> Ikut berdonasi untuk berbagi dengan cara: 
                       <br/>
                       <br/>
                       1.  Klik  “Donasi”
                       <br/>
                       2.  Masukkan nominal donasi
                       <br/>
                       3.  Pilih metode pembayaran (Transfer bank)
                       <br/>
                       4. Klik “Lanjutkan”
                       <br/>
                       5.  Segera transfer sesuai nominal yang kamu mau, tambah dengan tiga digit angka di paling akhir sebagai kode program yang kamu tawarkan.
                       <br/>
                       Berikut kode untuk program Sambung Rasa:
                       <br/>
                       <br/>
                       <span style={{fontWeight: "bold"}}>0  1  5</span>
                       <br/>
                       <br/>
                       Jangan lupa ajak teman-teman kamu ya!</p>             
                </div>
            </>
        )
    }
}
