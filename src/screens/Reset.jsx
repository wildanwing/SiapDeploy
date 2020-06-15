import React, { Component, useState } from 'react';
import NavbarProfile from "../components/NavbarProfile";
import landingPage from '../json/landingPage.json';

export default class Reset extends Component {

    render() {
        //const [selectedDate, setSelectedDate] = useState(null);
        return (
            <>
                <div class="container container-profile mt-5 mb-5" >
                    <div className="row ">
                        <NavbarProfile {...this.props} />
                        <div className="col-sm-9">
                            <h4 className="mt-4" style={{ color: '#f43b31' }}>Ganti Password</h4>
                            <p className="reset-text text-center">Masukkan alamat e-mail anda dan kami akan <br/>mengirimkan link untuk mengganti password</p>
                            <form
                      
                    className='' style={{position:'relative', bottom:'20px'}}
                    // onSubmit={handleSubmit}
                  >
                    <input 
                      className='form-control mt-20 Rectangle-forget'
                      type='email'
                      placeholder='Email'
                      // onChange={handleChange('email')}
                      // value={email}
                     />
      <button
                      type='Submit'
                      className='button-forget mt-10'
                    >
                      <span className='ml-3 text-masuk'>Kirim</span>
                    </button>
      </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
