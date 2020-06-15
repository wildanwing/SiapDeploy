import React from 'react';


export default function NavContent(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }

    return (
        <div className="container mt-5">
            <nav className="navbar bg-none px-0">
                <ul className="nav-content">
                    <li className={`nav-item-content${getNavLinkClass("/donasi")}`}>
                        <a className="nav-link px-0" href="/donasi">Donasi</a>
                    </li>
                    <li className={`nav-item-content${getNavLinkClass("/NewsPage")} px-3`}>
                        <a className="nav-link px-0" href="/NewsPage">Berita</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
