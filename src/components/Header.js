import React from "react";
import { getToken, getAdminToken } from "../helpers/useToken";
import { getName } from "../helpers/useUserName";
import { NavDropdown } from 'react-bootstrap';
import Cart from "./Cart";


import {
    Link
} from "react-router-dom";

const Header = (props) => {

    const LogoutLink = () => {
        const token = getToken();
        const admin_token = getAdminToken();
        const userName = getName();

        if (token || admin_token) {
            return (
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-end m-3 me-5">
                        <div className="text-warning">Hoşgeldiniz: {userName}</div>
                        <Link to="/logout" style={{ color: 'white', textDecoration: 'none' }}>Çıkış</Link>
                    </div>
                    <Cart />
                </div>
            );
        }
    }


    const AuthHeaderLinks = () => {
        const token = getToken();
        if (token) {
            return (
                <>
                    <NavDropdown title="Kategoriler" id="basic-nav-dropdown" style={{ color: 'white' }}>
                        <Link to="/category/roman" className="dropdown-item" style={{ color: 'black', textDecoration: 'none', paddingLeft: 16 }}>Roman</Link>
                        <Link to="/category/bilim" className="dropdown-item" style={{ color: 'black', textDecoration: 'none', paddingLeft: 16 }}>Bilim</Link>
                        <Link to="/category/edebiyat" className="dropdown-item" style={{ color: 'black', textDecoration: 'none', paddingLeft: 16 }}>Edebiyat</Link>
                        <Link to="/category/felsefe" className="dropdown-item" style={{ color: 'black', textDecoration: 'none', paddingLeft: 16 }}>Felsefe</Link>
                    </NavDropdown>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '20px', }}>Hakkında</Link>
                </>
            )
        }
    }

    return (
        <>
            <header className="header">
                <div className="d-flex align-items-center">
                    <h2 style={{ marginRight: 30 }}>{props.headerTitle}</h2>
                    <Link to="/" style={{ marginLeft: '20px', marginRight: '0px', color: 'white', textDecoration: 'none' }}>Ana Sayfa</Link>
                    <AuthHeaderLinks />
                </div>
                <LogoutLink />
            </header>
        </>
    )
}

export default Header;