import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import logo1 from '../assets/images/login.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import { GoogleLogin } from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';

const sendGoogleToken = tokenId => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
      idToken: tokenId
    })
    .then(res => {
      console.log(res.data);
      // informParent(res);
    })
    .catch(error => {
      console.log('GOOGLE SIGNIN ERROR', error.response);
    });
};
const responseGoogle = response => {
  console.log(response);
  sendGoogleToken(response.tokenId);
};
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    textChange: 'Sign Up'
  });

  const { name, email, password, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name && email && password) {
        setFormData({ ...formData, textChange: 'Submitting' });

        // postRegister = () => {
        axios
          .post(`http://165.22.100.70:8040/tim5/register`, {
            name,
            email,
            password
          })
          .then(res => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password: '',
              textChange: 'Submitted'
            });
            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            // toast.error(err.response.data.errors);
          });
    } else {
      toast.error('Please fill all fields');
    }
  };
// }

  return (
    <div className=''>
      {isAuth() ? <Redirect to='/' /> : null}
      <ToastContainer />
        <div className="container isi">
          <div className="row">
            <div className="col-7">
              <img className="Group-1" img alt="logo" src={logo}/>
              <p className="Daftarkan">Daftarkan dirimu dan mulai <br></br>berdonasi melalui ketjilbergerak</p>
              <img className="Group-3" img alt="logo1" src={logo1}/>
            </div>
            <div className='col-5'>
              <div className='g:w-1/2 xl:w-5/12 p-6 sm:12 row'>
                <div className='mt-12 flex flex-col items-center'>
                  <h1 className='text2'>
                    Daftar
                  </h1>
                  <form
                    className='w-full flex-1 mt-0text-indigo-500'
                    onSubmit={handleSubmit}
                  >
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='text'
                      placeholder='name'
                      onChange={handleChange('name')}
                      value={name}
                    />
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={email}
                    />
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange('password')}
                      value={password}
                    />
                    <button
                      type='submit'
                      className='button-masuk mt-3'
                    >
                      <span className='ml-3 text-center text-masuk'>Masuk</span>
                    </button>
                    <div className="container form-bawah mt-3">
                      <div className="row">
                        <div className="form-check check-input">
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label " for="defaultCheck1">
                              Dengan mendaftar, kamu setuju dengan <span>Syarat dan Ketentuan</span> ketjilbergerak
                            </label>  
                            <div className="or text-center">
                  <p style={{position:"relative", right:"15px"}} className="ATAU my-4">ATAU</p>
                </div>

                <div className='flex flex-col '>
                <a
                      style={{position:"relative", right:"50px",}}
                      className='button-masuk '
                      href='/login'
                    >
                      <span  style={{fontFamily:"Poppins", position:"relative", left:"155px", top:"20px"}} className='ml-3 text-center text-masuk'>Login</span>
                    </a>           
                </div>   
                        </div>
                      </div>
                    </div>    
                  </form>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Register;