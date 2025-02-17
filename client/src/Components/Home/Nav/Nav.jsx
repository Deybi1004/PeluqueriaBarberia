import React from "react";
import "./Nav.scss"
import logo from "../../../images/logo.jpeg";

export default function Nav() {

    return (
        <div className="contenedor-nav">
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Bootstrap" width="40" height="40" />
                        <span>THE CUTMAN CO.</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">AboutUs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}