import React, { useState, useEffect } from 'react';
import authSvg from '../assets/images/update.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import Home from '../components/Home';

class Private extends React.Component{
  render(){
  return (
    
    <Home/>

  );
};
}
export default Private;
