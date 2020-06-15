import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import verificon from '../assets/images/verification.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';


const Verification = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name);
  }, [match.params]);
  const { name, token, show } = formData;

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`http://165.22.100.70:8040/tim5/activation`, {
        token
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });

        toast.success(res.data.message);
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });
  };


  return (
    <div className='bg-white-100 text-gray-900 '>
      
      <img className="Group-2 mt-10" img alt="logo" src={logo} />
      <div class="container box py-3 containerverif">
      <img className="verificon mt-12" img alt="verificon" src={verificon} />
      <p className="verifikasi">Selamat</p>
      <p className="verifikasi1">Pendaftaran berhasil. Segera cek e-mail anda <span className="paragrafverif">twingkywingky@gmail.com</span> dan lakukan verifikasi</p>
      
      </div>
      ;
    </div>
  );
};

export default Verification;
