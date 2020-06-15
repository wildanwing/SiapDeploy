import React, { Component } from 'react';
import NavbarContent from "../components/NavbarContent";
import NewsContent from "../components/NewsContent.jsx";
import SearchBar from "../components/SearchBar";


class NewsPage extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         news: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get('http://165.22.100.70:8040/tim5/b/berita').then(res => {
    //         this.setState({ news: res.data.news })
    //         console.log(res.data)
    //     });
    // }


    render() {
        return (
            <>
                <SearchBar />
                <NavbarContent {...this.props}></NavbarContent>

                {/* shorter */}
                <div className="container mt-3 mb-4">
                    <div className="row">
                        <div className="col">
                            <h6 style={{ textAlign: 'right' }}>Urutkan</h6>
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle float-right " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sortir Menurut
                     </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Relevansi</a>
                                    <a className="dropdown-item" href="#">Tanggal Terbitkan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* News content */}

                <NewsContent />


                {/* pagination */}
                <div className="container mt-2">
                    <div className="row ">
                        <div className="col ">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item"><a class="page-link" href="#">Sebelumnya</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
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

export default NewsPage;
