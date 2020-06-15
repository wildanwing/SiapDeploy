import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AvatarIcon from '../assets/images/avatar.jpg';
import NavbarProfile from "../components/NavbarProfile";
import landingPage from '../json/landingPage.json';

export default class EditProfilePage extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        //const [selectedDate, setSelectedDate] = useState(null);
        return (
            <>
                <div className="profile-avatar">
                    <img
                        className="profile-avatar-img"
                        src={AvatarIcon}

                    />
                </div>
                <h4 className="text-center" >Ahmed</h4>
                <p className="text-center" ><span>@hanifbaskoro</span> | <span>baskorohanif@gmail.com</span></p>
                <p className="text-center"><small className="text-muted">Lorem lorel lorem lorem</small></p>
                <div class="container container-profile mt-5 mb-5" >
                    <div className="row ">
                        <NavbarProfile {...this.props} />
                        <div className="col-sm-9">
                            <h4 className="mb-5 mt-4" style={{ color: '#f43b31' }}>Edit Profile</h4>
                            <h6 className="mb-4">Informasi Pribadi</h6>
                            <form>
                                <div className="form-group row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label">Foto Profil</label>
                                    <div className="row">
                                        <div className="profile-avatar-update ml-4">
                                            <img

                                                src={AvatarIcon}
                                                className="profile-avatar-update-img"
                                            />
                                        </div>

                                        <div className="col" style={{ textAlign: 'left' }}>
                                            <div className="row">
                                                <div className="col mb-3">ukuran maksimal 1MB, resolusi 180x180</div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="custom-file ">
                                                        <input type="file" className="custom-file-input " id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                        <label className="custom-file-label" for="inputGroupFile01">Tidak ada file yang dipilih</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="form-group row">
                                    <label for="inputName" className="col-sm-2 col-form-label">Nama</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-sm-2 col-form-label">Jenis Kelamin</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Pria</option>
                                            <option>Wanita</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label">Tanggal Lahir</label>
                                    <div className="col-sm-10">
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label">Bio</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputName" className="col-sm-2 col-form-label">Pekerjaan</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="exampleFormControlSelect1" className="col-sm-2 col-form-label">Negara</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Indonesia</option>
                                            <option>Timor Leste</option>
                                        </select>
                                    </div>
                                </div>
                                <h6 className="mb-4 mt-5">Informasi Akun</h6>

                                <div className="form-group row">
                                    <label for="inputEmail" className="col-sm-2 col-form-label" >Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail" disabled />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputPhone" className="col-sm-2 col-form-label">Phone</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputPhone" />
                                    </div>
                                </div>
                                <div className="float-right mt-3 mb-4" >
                                    <button class="btn btn-account-1 btn-sm mr-2 px-4" type="submit" style={{ borderRadius: 5 }}>Button</button>
                                    <button class="btn btn-account btn-sm px-4" type="submit" style={{ borderRadius: 5 }}>Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
