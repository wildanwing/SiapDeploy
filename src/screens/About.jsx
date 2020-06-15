import React from 'react';

import about from '../assets/images/about.png';
import rasa from '../assets/images/rasa.png';
import karsa from '../assets/images/karsa.png';
import ilmu from '../assets/images/ilmu.png';
import pic from '../assets/images/pic.svg';
import pic1 from '../assets/images/pic1.svg';


class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <img src={about} alt="about.png" className="aboutimg mx-auto d-block" /><br />
                    <p className="text-center imgcapt ">Siapa saja yang muda, kreatif, berani dan berdikari adalah <b>#ketjilbergerak!</b></p>
                </div>
                
                <div>
                    <h2 className="title"> Tentang Ketjilbergerak</h2>
                    <div className="row">
                        <div className="col">
                        <iframe className="rounded shadow vid" width="550" height="292" src="https://www.youtube.com/embed/Bvh2ooSoGA4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        </div>
                        <div className="col">
                            <p className="vidcapt">Ketjilbergerak adalah komunitas anak muda yang berkomitmen pada kerja-kerja sosial, seni dan budaya yang bersifat kolaboratif. Saat ini Ketjilbergerak sedang membuka program donasi dalam bentuk donasi uang.
                            <br />
                            <br />Follow <text className="ig">@ketjilbergerak</text> di Instagram, Twitter, Soundcloud, Youtube dan Fanpage Facebook untuk terus mengikuti aktivitas kami.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="title"> Program Kami </h2>
                    <div className="row">
                    <div className="col">
                        <img src={rasa} className="shadow border1a rasa" alt="sambung rasa.jpg" />
                        <p className="caption1a">Sambung Rasa</p>
                        <p className="caption1ab text-justify-center"> Donasi akan dibelanjakan bahan makanan dan dibagikan untuk orang-orang yang menggantungkan hidup dari jalanan.</p>
                    </div>
                    <div className="col">
                        <img src={karsa} className="shadow border1a karsa" alt="sambung karsa.jpg" />
                        <p className="caption2a">Sambung Karsa</p>
                        <p className="caption2ab text-justify-center"> Donasi akan dibelanjakan sembako, kemudian paket sembako tersebut dibagikan kepada yang membutuhkan.</p>
                    </div>
                    <div className="col">
                        <img src={ilmu} className="shadow border1a ilmu" alt="sambung ilmu.jpg" />
                        <p className="caption3a">Sambung Ilmu</p>
                        <p className="caption3ab text-justify-center">Donasi akan digunakan untuk menyekolahkan anak-anak jalanan, dan membeli perlengkapan sekolah.</p>
                    </div>
                    </div>
                    </div>
                <br />
                <br />
                <div>
                    <h2 className="title"> Founder & Co-founder </h2> <br />
                    <img src={pic} alt="pic.png" className="pic" />
                        <p className="nama">Greg Sindana</p>
                        <p className="role">FOUNDER</p>
                    <img src={pic1} alt="pic1.png" className="pic" />
                        <p className="nama1">Vanie Sindana</p>
                        <p className="role1">Co-Founder</p>

                </div>
            </div>
        )
    }
}

export default About;