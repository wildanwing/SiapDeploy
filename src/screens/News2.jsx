import React from 'react';

import news2img from '../assets/images/news3.png';

class News2 extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <h2 className="news2header">Musisi Adelay menggelar konser amal virtual melawan Covid-19</h2>
                    <p className="news2date">5 Maret 2020</p>
                </div>
                <img src={news2img} alt="news.svg" className="news2img img-fluid" />
                <div className="news2capt justify-text-left">
                    <p>Musisi Adelay Menggelar konser amal virtual melawan Covid-19 bersama Ketjilbergerak (2/3) siang. Konser amal ini berhasil mengumpulkan lebih dari Rp 10 juta. "Ya Lord" dan “Dunia Sekitar” menjadi tembang pembuka konser. Diriingi petikan gitar, Adelay menyuguhkan penampilan yang intim dan menyejukkan. Seusai bernyanyi, Adelay kemudian menyapa semua penggemarnya yang menyaksikan konser secara daring. Kepada penggemar ia menyampaikan bahwa kekuatan do’a sangat penting di masa-masa sulit seperti sekarang.</p>
                    <p>Ia pun kemudian mempersembahkan lagu "Ibu" kepada para Adelovers, sebutan penggemar Adeley. Bagi penggemar yang tidak bisa mudik dan bertemu orang tua di lebaran tahun ini, alunan tembang "Ibu" terasa sangat lirih nan sendu. "Restu dari orang tua itu penting disamping doa. Apalagi biasanya, restu itu penuh dengan doa di dalamnya," demikian kata pemilik nama lengkap Adeley Yeleda itu sesaat sebelum bernyanyi. </p>
                    <p>Adeley menjadi pembuka Konser Amal di Rumah Aja bersama Ketjilbergerak. Konser ini masih akan digelar beberapa pekan ke depan dengan menggandeng beberapa mususi kenamaan seperti Raisa yang akan tampil pasa 6 April, Maliq D'Essentials pada 13 April dan Kahitna pada 20 April. Konser bisa disaksikan di kanal YouTube Ketjilbergerak. Konser amal ini bertujuan untuk menggalang donasi bagi mereka yang terdampak Covid-19. Sekaligus tetap mendukung peraturan pemerintah untuk di rumah saja.</p>
                </div>

            </div>
        )
    }
}

export default News2;