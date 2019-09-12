import React from 'react';
import './Header.scss'
const Header = props => {
    return (
        <nav>
            <a href="/">
                <div className="logo">
                    <img src="images/iconoweb.png" alt="logo" />
                    <p>Geekshubs <br />
                        Travels </p>
                </div>
            </a>
            <ul>
                <a href="#destinos">
                    <li>Destinos </li>
                </a>
                <a href="#quienesSomos">
                    <li>Quién somos </li>
                </a>
                <a href="#dondeEstamos">
                    <li>Donde estamos</li>
                </a>
            </ul>
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">
                            <a href="#destinos">
                                Destinos
                    </a></h4>
                    </div>
                    <div className="bg-dark p-4">
                        <h4 className="text-white"> <a href="#quienesSomos">
                            Quién somos
                    </a></h4>
                    </div>
                    <div className="bg-dark p-4">
                        <h4 className="text-white"><a href="#destinos">
                            Donde estamos
                    </a></h4>
                    </div>
                </div>
                {/* <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav> */}
                <div className="user">
                    {/* <a href="/profile" > <img className="profilePicture" src={{user.imagePath}} >
                <img className="edit" src="/images/edit.png" alt="edit" /></a>

            <a className="logButton" href="/logout">LOG OUT</a> */}

                    <a className="logButton" href="/register">SIGN UP</a>
                    <a className="logButton" href="/login">LOG IN</a>

                </div>
            </div>
        </nav>
    )
}
export default Header;