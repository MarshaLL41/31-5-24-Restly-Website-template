import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Scrollbtn from "../Components/Scrollbtn";

export class Cyber extends Component {
    render() {
        return (
            <div>
                <Scrollbtn></Scrollbtn>
                {/* section 1 */}
                <div className="cyber-bg-img1">
                    <div className="cyber-space-1">
                        <div className="row">
                            <div className="col-12">
                                <div className="cyber-sec1-box">
                                    <span>WERE THE BEST PROJECT</span>
                                    <h2>We secure the World form cyber Threats</h2>
                                    <p>Phasellus nisl velit, interdum lobortis elit quis, placerat bibendum lorem. Maecenas eget mi quis enim</p>
                                    <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column gap-3">
                                        <button className="discover-btn">Discover More</button>
                                        <button className="get-btn">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 1 */}
                {/* section 2 */}
                <div className="cyber-bg-clr">
                    <div className="cyber-space-2">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="cyber-sec2-main-box d-flex flex-sm-row flex-column justify-content-sm-start justify-content-center align-items-center text-sm-start text-center">
                                    <div className="cyber-sec2-box1">
                                        <i className="bx bx-check-shield"></i>
                                    </div>
                                    <div className="cyber-sec2-box2">
                                        <h3>Security Services</h3>
                                        <p>Pulvinar ornare in a sem. Quisque Vulputate nulla convallis . In Efficitur</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="cyber-sec2-main-box d-flex flex-sm-row flex-column justify-content-sm-start justify-content-center align-items-center text-sm-start text-center">
                                    <div className="cyber-sec2-box1">
                                        <i className="bx bx-check-shield"></i>
                                    </div>
                                    <div className="cyber-sec2-box2">
                                        <h3>Data Privacy</h3>
                                        <p>Pulvinar ornare in a sem. Quisque Vulputate nulla convallis . In Efficitur</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="cyber-sec2-main-box d-flex flex-sm-row flex-column justify-content-sm-start justify-content-center align-items-center text-sm-start text-center">
                                    <div className="cyber-sec2-box1">
                                        <i className="bx bx-bookmark"></i>
                                    </div>
                                    <div className="cyber-sec2-box2">
                                        <h3>Industry Certified</h3>
                                        <p>Pulvinar ornare in a sem. Quisque Vulputate nulla convallis . In Efficitur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 2 */}
                {/* section 3 */}
                <div className="cyber-bg-img2">
                    <div className="cyber-space-2">
                        <div className="row ">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="cyber-sec3-img-box">
                                    <img alt="" src="Assets/img/left-image-1.png" className="d-block mx-auto img-fluid"></img>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="cyber-sec3-box">
                                    <span>Advance Protect</span>
                                    <h2>Protecting your privacy Is our priority</h2>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="cyber-sec3-minibox d-flex align-items-center flex-sm-row flex-column gap-4 text-sm-start text-center">
                                            <div className="cyber-sec3-box1">
                                                <i className="bx bx-objects-vertical-bottom"></i>
                                            </div>
                                            <div className="cyber-sec3-box2">
                                                <h4>Product Consultation</h4>
                                                <p>Penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                            </div>
                                        </div>
                                        <div className="cyber-sec3-minibox d-flex align-items-center flex-sm-row flex-column gap-4 text-sm-start text-center">
                                            <div className="cyber-sec3-box1">
                                                <i className="bx bx-doughnut-chart"></i>
                                            </div>
                                            <div className="cyber-sec3-box2">
                                                <h4>Security Consultation</h4>
                                                <p>Penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                            </div>
                                        </div>
                                        <div className="cyber-sec3-minibox d-flex align-items-center flex-sm-row flex-column gap-4 text-sm-start text-center">
                                            <div className="cyber-sec3-box1">
                                                <i className="bx bx-universal-access"></i>
                                            </div>
                                            <div className="cyber-sec3-box2">
                                                <h4>Operational Security</h4>
                                                <p>Penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 3 */}
                {/* section 4 */}
                <div className="cyber-bg-img3">
                    <div className="cyber-space-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="cyber-sec4-first" align="center">
                                    <span>Our Services</span>
                                    <h2>
                                        We Provide All Kind Advanced<br></br>Security Services
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                margin={20}
                                nav
                                autoplay={true}
                                responsive={{
                                    0: {
                                        items: 1,
                                    },
                                    768: {
                                        items: 2,
                                    },
                                    992: {
                                        items: 3,
                                    },
                                    1200: {
                                        items: 4,
                                    },
                                }}
                            >
                                <div className="item">
                                    <div className="cyber-sec4-box" align="center">
                                        <div className="cyber-sec4-img-box">
                                            <img alt="" src="Assets/img/icon3.png"></img>
                                        </div>
                                        <h3>Threat intelligence</h3>
                                        <p>Praesent eget volutpat vel tellus.quis it for neque blandit elit </p>
                                        <Link>Read More</Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cyber-sec4-box" align="center">
                                        <div className="cyber-sec4-img-box">
                                            <img alt="" src="Assets/img/icon4.png"></img>
                                        </div>
                                        <h3>Database Security</h3>
                                        <p>Praesent eget volutpat vel tellus.quis it for neque blandit elit </p>
                                        <Link>Read More</Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cyber-sec4-box" align="center">
                                        <div className="cyber-sec4-img-box">
                                            <img alt="" src="Assets/img/icon1-1.png"></img>
                                        </div>
                                        <h3>Server Security</h3>
                                        <p>Praesent eget volutpat vel tellus.quis it for neque blandit elit </p>
                                        <Link>Read More</Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cyber-sec4-box" align="center">
                                        <div className="cyber-sec4-img-box">
                                            <img alt="" src="Assets/img/icon3.png"></img>
                                        </div>
                                        <h3>Product Security</h3>
                                        <p>Praesent eget volutpat vel tellus.quis it for neque blandit elit </p>
                                        <Link>Read More</Link>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                {/* section 4 */}
                {/* section 5 */}
                <div className="cyber-space-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="cyber-sec4-first" align="center">
                                <span>Our Project</span>
                                <h2>
                                    Our Latest Digital Security<br></br>Projects Solution
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 ">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="cyber-sec5-box">
                                <img alt="" src="Assets/img/project1-1.jpg"></img>
                                <div className="cyber-overflow-box">
                                    <p>Digital security</p>
                                    <h4>Cyber Security Advice</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="cyber-sec5-box">
                                <img alt="" src="Assets/img/project2-1.jpg"></img>
                                <div className="cyber-overflow-box">
                                    <p>Digital security</p>
                                    <h4>Advice Cyber Security</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="cyber-sec5-box">
                                <img alt="" src="Assets/img/project3-1.jpg"></img>
                                <div className="cyber-overflow-box">
                                    <p>Digital security</p>
                                    <h4>Save Online Date</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="cyber-sec5-box">
                                <img alt="" src="Assets/img/project4-1.jpg"></img>
                                <div className="cyber-overflow-box">
                                    <p>Digital security</p>
                                    <h4>Protect Cyber Security</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 5 */}
            </div>
        );
    }
}

export default Cyber;
