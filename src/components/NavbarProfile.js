import React from 'react';
import { signout } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useHistory } from "react-router-dom";
export default function NavbarProfile(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }
    const history = useHistory();

    return (

        <div className="col-sm-3">
            <ToastContainer/>
            <div className="row">
                <div className="col">
                    <div id="sidebar-main" className="sidebar sidebar-default sidebar-separate sidebar-fixed sidebar-profile">
                        <div className="sidebar-content">
                            <div className="sidebar-category sidebar-default">
                                <div className="category-title text-center">
                                    <span style={{ fontSize: 20 }}>Menu</span>
                                </div>

                                <div className="category-content">
                                    <ul id="menu-nav" className="nav flex-column">
                                        <li className={`nav-item-profile${getNavLinkClass("/profile/profile")}`}>
                                            <a href="/profile/profile" className="nav-link">
                                                <i class="fas fx fa-user-alt"></i> Profile</a>
                                        </li>
                                        <li className={`nav-item-profile${getNavLinkClass("/profile/historydonation")}`}>
                                            <a href="/profile/historydonation" className="nav-link">
                                                <i class="fas fx fa-history"></i> Histori donasi</a>
                                        </li>
                                        <li className={`nav-item-profile${getNavLinkClass("/users/password/reset/:token")}`}>
                                            <a href="/users/password/reset/:token" className="nav-link active">
                                                <i class="fas fx fa-lock"></i> Ganti Password</a>
                                        </li>
                                        <li>
                                            <br /> <br />
                                            <div className="btn-keluar text-center mb-4 mt-5"  >
                                                <button 
                                                onClick={() => {
                                                    signout(() => {
                                                      toast.error('Signout Successfully');
                                                      history.push('/home'); 
                                                    });
                                                }}
                                                className="btn btn-keluar btn-sm px-4" 
                                                      >
                                                    Log out
                                                    </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // --------------------------------------------------------------------------


        // ==============================================================================

    )
}
