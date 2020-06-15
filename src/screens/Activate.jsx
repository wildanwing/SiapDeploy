import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import verificon from '../assets/images/verification.svg';

const Activate = ({ match }) => {
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
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      {isAuth() ? <Redirect to='/' /> : null}
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
          
          <img className="Group-1" img alt="logo" src={logo}/>
          <div class="">
          <img className="Group-1 mt-3 mb-3" style={{position:"relative", right:"20px"}} img alt="verificon" style={{position:"relative", left:"85px"}} src={verificon}/>
            <h1 className='text-2xl xl:text-3xl font-extrabold' style={{fontFamily:"Poppins", fontSize:"26px"}}>
              Akun anda telah terverifikasi
            </h1>

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <button 
                  style={{backgroundColor:"red",fontFamily:"Poppins"}}
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <span className=''>Aktifkan</span>
                </button>
              </div>
              <div className='my-12 border-b text-center'>
                <div  style={{fontFamily:"Poppins"}} className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Login or Sign Up again
                </div>
              </div>
              <div className='flex flex-col items-center'>
              <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mb-2'
                  href='/login'
                  target='_self'
                >
                  <span style={{fontFamily:"Poppins"}} className=''>Sign in</span>
                </a>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                  href='/register'
                  target='_self'
                >
                    <span style={{fontFamily:"Poppins"}} className=''>Sign Up</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Activate;
