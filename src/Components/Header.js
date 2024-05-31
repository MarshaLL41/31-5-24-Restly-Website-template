import React, { Component } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div className="space-1 border border-bottom-1 sticky">
                <div className="header">
                    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                        <Link to="/" className="logo">
                            Restly
                        </Link>
                    </div>
                    <div className="col-xl-8 d-xl-block d-lg-none d-md-none d-sm-none d-none">
                        <ul className="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/data">Data analysis</Link>
                            </li>
                            <li>
                                <Link to="/cyber">Cyber security</Link>
                            </li>
                            <li>
                                <Link to="/market">Marketing startup</Link>
                            </li>
                            <li className="dropdown">
                                <Link>More</Link>
                                <div className="dropdown-content">
                                    <Link to="/software">Software company</Link>
                                    <Link to="/cloud">Cloud Hosting</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="meet-box">
                            <button className="d-xl-block d-lg-block d-md-block d-sm-none d-none">Meet With Us</button>
                            <i className="bx bx-menu bar d-xl-none d-lg-block d-md-block d-sm-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"></i>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                        Restly
                                    </h5>
                                    <i className="bx bx-x close" data-bs-dismiss="offcanvas"></i>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="off-menu">
                                        <Link to="/">Home</Link>

                                        <Link to="/data">Data analysis</Link>

                                        <Link to="/cyber">Cyber security</Link>

                                        <Link to="/cloud">Cloud Hosting</Link>

                                        <Link to="/market">Marketing startup</Link>
                                    </div>
                                    <div className="mt-4 d-flex justify-content-center">
                                        <button className="start">Start Free Trail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
