import React from 'react';


export default function NavbarUpdate(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }

    return (
        <div className="container mt-5">
            <nav className="navbar bg-none px-0">
                <ul className="nav-content">
                    <li className={`nav-item-content${getNavLinkClass("/dProgramDonasi/Description")}`}>
                        <a className="nav-link px-0" href="/ProgramDonasi/Description">Deskripsi</a>
                    </li>
                    <li className={`nav-item-content${getNavLinkClass("/ProgramDonasi/UpdateActivity")} pl-4 pr-3`}>
                        <a className="nav-link px-0" href="/ProgramDonasi/UpdateActivity">Update Aktivitas</a>
                    </li>
                    <li className={`nav-item-content${getNavLinkClass("/ProgramDonasi/UpdateDonasi")} pl-2`}>
                        <a className="nav-link px-0" href="/ProgramDonasi/UpdateDonasi">Update Donasi</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}
