import React from 'react';
import logo from '../assets/images/logo-white.svg';



class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mb-5">
                            <a className="navbar-brand mb-3" href="">
                                <img src={logo} />
                            </a>
                            <p style={{ textAlign: 'justify' }}>Ketjilbergerak adalah komunitas berbasis anak muda <br />
                        yang bergerak melalui berbagai praktik kerja seni, sosial <br />
                        dan budaya yang bersifat kolaboratif.
                        </p>

                            <ul class="list">
                                <li><i class="fas fx fa-envelope"></i><span> Ketjilbergerak@support.com</span></li>
                                <li><i class="fas fx fa-phone-square "></i> <span> 0899 - 8888 - 8888</span></li>
                            </ul>


                        </div>
                        <div className="col-6"  >
                            <h6 className="mt-2">Ikuti Update Kami</h6>
                            <ul class="social-network px-2">
                                <li><a href="https://twitter.com/ketjilbergerak" class="btn-twitter" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/ketjilbergerak/" class="btn-facebook" title="Facebook" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a href="https://www.instagram.com/ketjilbergerak/?hl=id" class="btn-instagram" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col text-center copyright">
                    &#169;2020 Ketjilbergerak. All Right reserved
            </div>
            </footer >

        );
    }
}

export default Footer;