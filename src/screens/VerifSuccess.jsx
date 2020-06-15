import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import verificon from '../assets/images/verification.svg';
import { Link } from 'react-router-dom';

class VerifSuccess extends React.Component {
  render() {
    return (
      <div className='bg-white-100 text-gray-900 '>
     
      
      <img className="Group-2 mt-10" img alt="logo" src={logo} />
      <div class="container box py-3 containerverif">
      <img className="verificon mt-12" img alt="verificon" src={verificon} />
      <p className="verifsuccess">Akun anda telah terverifikasi</p>
      <p className="verifsuccess1">Masuk dengan e-mail dan password untuk memulai</p>
      <button
                      type='Submit'
                      className='button-verif mt-10'
                    >
                      <span className='ml-3 text-masuk'>Kirim</span>
                    </button>
        </div>
      ;
      </div>
    );
  };
};

export default VerifSuccess;
