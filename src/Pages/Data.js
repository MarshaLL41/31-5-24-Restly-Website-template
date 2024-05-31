import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scrollbtn from "../Components/Scrollbtn";

export class Data extends Component {
    render() {
        return (
            <div>
                <Scrollbtn></Scrollbtn>
                {/* section 1 */}
                <div className="data-space-1">
                    <div className="row">
                        <div className="col-xl-6  col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="data-sec1-box">
                                <span>01 Provide Best Services</span>
                                <h2>Big data will Come up with A Solution</h2>
                                <p>Maecenas tincidunt ex quis arcu ultrices, et commodo diam volutpat. Fusce ligula mauris, sodales</p>
                                <button className="start-btn">Start Free Trial</button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="data-sec1-imgbox position-relative">
                                <img alt="" src="Assets/img/hero-seven-right-image.png"></img>
                                <div className="flying-box1">
                                    <div>
                                        <img alt="" src="Assets/img/management.webp"></img>
                                    </div>
                                    <div>
                                        <p>Data Visualization</p>
                                    </div>
                                </div>
                                <div className="flying-box2">
                                    <div>
                                        <img alt="" src="Assets/img/monitar.webp"></img>
                                    </div>
                                    <div>
                                        <p>Data Scientist</p>
                                    </div>
                                </div>
                                <div className="flying-box3">
                                    <div>
                                        <img alt="" src="Assets/img/machine.webp"></img>
                                    </div>
                                    <div>
                                        <p>Data Scientist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 1 */}
                {/* Section 2 */}
                <div className="data-space-2">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="d-flex justify-content-centera align-items-center h-100">
                                <img alt="" src="Assets/img/about-seven.png" className="img-fluid d-block mx-auto mb-5"></img>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="data-sec2-box">
                                <span>02 What We Do</span>
                                <h2>Relational Database Is What We Do</h2>
                                <p>Maecenas tincidunt ex quis arcu ultrices, et commodo diam volutpat. Fusce ligula mauris, sodales efficitur justo et, molestie tincidunt ex.</p>
                                <h6 className="d-flex align-items-center ">
                                    <i className="bx bx-check check"></i>Access Any Data Flexible And Easily
                                </h6>
                                <h6 className="d-flex align-items-center mb-4">
                                    <i className="bx bx-check check"></i>In-Database Optimized Algorithms
                                </h6>
                                <button className="start-btn">Start Free Trial</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 2 */}
                {/* Section 3 */}
                <div className="data-space-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="data-sec3-first" align="center">
                                <span>03 Our Services</span>
                                <h2>Our proposition Data Science and Analytics Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="data-sec3-box">
                                <img alt="" src="Assets/img/data-img-1.png"></img>
                                <h3>Machine Learning Bootcamp</h3>
                                <Link>
                                    Click Here<i className="bx bx-right-arrow-alt"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="data-sec3-box">
                                <img alt="" src="Assets/img/data-img-2.png"></img>
                                <h3>Digital Data Consulting for Science lab</h3>
                                <Link>
                                    Click Here<i className="bx bx-right-arrow-alt"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="data-sec3-box">
                                <img alt="" src="Assets/img/data-img-1.png"></img>
                                <h3>Data Visualization BootCamp</h3>
                                <Link>
                                    Click Here<i className="bx bx-right-arrow-alt"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 3 */}
                {/* section 4 */}
                <div className="data-space-2">
                    <div className="data-sec4-main-box">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="data-sec4-box" align="center">
                                    <div className="data-sec4-icon-box">
                                        <i className="bx bx-check Counter-check"></i>
                                    </div>
                                    <div className="data-sec4-text-box">
                                        <h3 className="Counter">12M+</h3> <p>Successful work</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="data-sec4-box" align="center">
                                    <div className="data-sec4-icon-box">
                                        <i className="bx bx-check Counter-check"></i>
                                    </div>
                                    <div className="data-sec4-text-box">
                                        <h3 className="Counter">18%</h3>
                                        <p>upgrade conversion</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="data-sec4-box" align="center">
                                    <div className="data-sec4-icon-box">
                                        <i className="bx bx-check Counter-check"></i>
                                    </div>
                                    <div className="data-sec4-text-box">
                                        <h3 className="Counter">10M</h3>
                                        <p>Clients Review</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 4 */}
                {/* section 5 */}
                <div className="data-space-2">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="data-sec2-box">
                                <span>04 Solution Place</span>
                                <h2>A one place solution for All your problems</h2>
                                <p>Pellentesque purus neque, pretium non purus vitae, commodo cursus libero. Praesent eget tempor est. Aliquam molestie erat vitae faucibus volutpat.</p>
                                <button className="start-btn">Start Free Trial</button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="d-flex justify-content-centera align-items-center h-100">
                                <img alt="" src="Assets/img/solution-place.png" className="img-fluid d-block mx-auto mt-3"></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 5 */}
            </div>
        );
    }
}

export default Data;
