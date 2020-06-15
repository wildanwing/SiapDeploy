import React, { Component } from 'react';
import '../assets/css/App.css';
import axios from 'axios';

export default class NewsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        axios.get('http://165.22.100.70:8040/tim5/b/berita').then(res => {
            this.setState({ news: res.data.news })
            console.log(res.data)
        });
    }


    render() {
        return (
            <div className="container mt-5" >

                <div className="row">
                    {
                        this.state.news.map(berita =>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=890,height=530,fit=cover,background=white,quality=100/public/img/article_img/memperingati-hari-bumi-di-tengah-pandemi-ini-yang-bisa-kita-lakukan-1587479298.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">{berita.judul}</h6>
                                        <p className="card-text" >{berita.deskripsi}</p>
                                        <p className="card-text"><small class="text-muted">{berita.tanggal_post}</small></p>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}
