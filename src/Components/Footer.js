import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div className="footer-img">
                <div className="footer-space">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="f-box-1">
                                <h3>Company</h3>
                                <p>Lorem ipsum dolor sit amet elit consectetur adipisicing sed do eiusmod tempor incididunt et dolore elit labore</p>
                                <div className="d-flex align-items-center">
                                    <i className="bx bx-map map"></i>
                                    <span className="footer-span">1791 Yorkshire Circle Kitty Hawk, NC 279499</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="f-box-2">
                                <h3>Page Link</h3>
                                <div>
                                    <Link className="d-flex align-items-center">
                                        <i className="bx bx-dots-horizontal-rounded"></i>Service
                                    </Link>
                                    <Link className="d-flex align-items-center">
                                        <i className="bx bx-dots-horizontal-rounded"></i>Portfolio
                                    </Link>
                                    <Link className="d-flex align-items-center">
                                        <i className="bx bx-dots-horizontal-rounded"></i>Contact Us
                                    </Link>
                                    <Link className="d-flex align-items-center">
                                        <i className="bx bx-dots-horizontal-rounded"></i>Blog
                                    </Link>
                                    <Link className="d-flex align-items-center">
                                        <i className="bx bx-dots-horizontal-rounded"></i>Page
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="f-box-3">
                                <h3>Contacts</h3>
                                <ul>
                                    <li>
                                        <i className="bx bxs-map"></i>
                                        <p className="m-0">Yorkshire Circle , NC 27949</p>
                                    </li>
                                    <li>
                                        <i className="bx bx-time-five"></i>
                                        <p className="m-0">Mon-Sat 9:00 - 7:00</p>
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"></i>
                                        <p className="m-0">+012-345-6789</p>
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"></i>
                                        <p className="m-0">info@example.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="subscribe-box">
                                <h3>Newsletter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <div className="footer-input-box">
                                    <input type="email" placeholder="Enter Email Address"></input>
                                    <i className="bx bx-send send"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
