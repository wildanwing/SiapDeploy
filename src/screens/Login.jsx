import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import logo1 from '../assets/images/login.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Register from './Register';



const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    textChange: 'Sign In'
  });
  const { email, password1, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const sendGoogleToken = tokenId => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
        idToken: tokenId
      })
      .then(res => {
        console.log(res.data);
        informParent(res);
      })
      .catch(error => {
        console.log('GOOGLE SIGNIN ERROR', error.response);
      });
  };
  const informParent = response => {
    authenticate(response, () => {
      isAuth() && isAuth().role === 'admin'
        ? history.push('/admin')
        : history.push('/private');
    });
  };

  const sendFacebookToken = (userID, accessToken) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/facebooklogin`, {
        userID,
        accessToken
      })
      .then(res => {
        console.log(res.data);
        informParent(res);
      })
      .catch(error => {
        console.log('GOOGLE SIGNIN ERROR', error.response);
      });
  };
  const responseGoogle = response => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };

  const responseFacebook = response => {
    console.log(response);
    sendFacebookToken(response.userID, response.accessToken)
  };

  const handleSubmit = e => {
    console.log(process.env.REACT_APP_API_URL);
    e.preventDefault();
    if (email && password1) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .post(`http://165.22.100.70:8040/tim5/login`, {
          email,
          password: password1
        })
        .then(res => {
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: '',
              password1: '',
              textChange: 'Submitted'
            });
            isAuth() && isAuth().role === 'admin'
              ? history.push('/admin')
              : history.push('/private');
            toast.success(`Hey ${res.data.user.name}, Welcome back!`);
          });
        })
        .catch(err => {
          setFormData({
            ...formData,
            email: '',
            password1: '',
            textChange: 'Sign In'
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <div className=''>
      {isAuth() ? <Redirect to='/home' /> : null}
      <ToastContainer/>  
      <div className="container isi">
        <div className="row">
          <div className="col-7">
          <img className="Group-1" img alt="logo" src={logo}/>
            <p className="Daftarkan">Selamat Datang Kembali</p>
            <p className="Masukkan">Masukkan akun anda untuk dapat kembali berdonasi</p>
          <img className="Group-3" img alt="logo1" src={logo1}/>
          </div>

           <div className="col-5">
             <div className='lg:w-1/2 xl:w-5/12 p-6 sm:12 row'>
               <div className='mt-12 flex flex-col items-center'>
                 <h1 className='text1 m-6'>
                  Masuk
                 </h1>
               <div className='w-full flex-1 mt-8 text-indigo-500'>     
                  <form
                    className='form-group '
                    onSubmit={handleSubmit}
                  >
                    <input
                      className='form-control Rectangle-1'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={email}
                     />
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange('password1')}
                      value={password1}
                    />
                    <button
                      type='submit'
                      className='button-masuk mt-3'
                    >
                      <span className='ml-3 text-center text-masuk'>Masuk</span>
                    </button>
                  <div className="container form-bawah mt-3">
                    <div className="row">
                      <div className="col-6 form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                          <label className="form-check-label " for="defaultCheck1">
                            Ingat Saya
                          </label>
                        </div>
                      <Link
                        to='/password/forget'
                        className='col-6 text-right pr-0 forget-password'
                      >
                        Forget password?
                      </Link>     
                    </div>
                  </div>         
                </form>
              
                <div className="or text-center">
                  <p style={{position:"relative", right:"5px"}} className="ATAU my-4">ATAU</p>
                </div>

                <div className='flex flex-col '>
                <a
                      className='button-masuk mt-3'
                      href='/register'
                    >
                      <span style={{position:"relative", left:"145px", top:"15px"}} className='ml-3 text-center text-masuk'>Daftar</span>
                    </a>           
                </div>

              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      ;
    </div>
  );
};

export default Login;