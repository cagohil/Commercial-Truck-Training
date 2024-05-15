import PageBanner from "@/src/components/PageNannerTwo";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const Confirmation = () => {
    const accordionData = [
        { id: 1, title: "Will you provide website layout about design ?" },
        { id: 2, title: "How much does cost to design website ?" },
        { id: 3, title: "How many revisions can i make the design ?" },
        { id: 4, title: "Will you provide website layout about design ?" },
    ];
    const [active, setActive] = useState("collapse0");
    return (
        <Layout footer={5}>
            {/* Page Banner Start */}
            <PageBanner pageName={"Confirmation"} parentName={"Ultimate Boot Camp"} childParent={"Virginia Beach"} />
            {/* Page Banner End */}

            <div className="container">
                {/* Service Style Two start */}
                <section className="service-two-area pt-90 rpt-45 pb-100 rpb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    <div className="col-xl-10">
                                        <div className="section-title mb-30 wow fadeInRight delay-0-2s">
                                            <div className="text pt-20">
                                                <p>
                                                    Thank you for registering for the <a href="a" className="link2">Ultimate Boot Camp!</a> You’re all set for now. If there are any logistical issues regarding payment, our Will Brogan will call to make sure everything is good to go. Please save this page for this information:
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#0085c0", backgroundImage: "url('assets/images/services/service-bg.png')", cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#" >
                                            ATLANTA
                                        </Link>
                                    </h5>
                                    <p>January 18-19</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/CTVE.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="#" >
                                        <a className="read-more style-two cursor-off">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#ED1C24", backgroundImage: "url('assets/images/services/service-bg.png')", cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#">
                                            DALLAS
                                        </Link>
                                    </h5>
                                    <p>February 22-23</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/CVI.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="#">
                                        <a className="read-more style-two cursor-off">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#022E6E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#">
                                            LOS ANGELES
                                        </Link>
                                    </h5>
                                    <p>March 21-22</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Harbor.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="#">
                                        <a className="read-more style-two cursor-off">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#0072BC", backgroundImage: "url('assets/images/services/service-bg.png')", cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#">
                                            VIRGINIA BEACH
                                        </Link>
                                    </h5>
                                    <p>April 22-23</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Trader.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="#">
                                        <a className="read-more style-two cursor-off">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: " #E11E36", backgroundImage: "url('assets/images/services/service-bg.png')" }}>
                                    <h5>
                                        <Link legacyBehavior href="/ubc-kansas-city">
                                            KANSAS CITY
                                        </Link>
                                    </h5>
                                    <p>May 16-17</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Knapheide.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="/ubc-kansas-city">
                                        <a className="read-more style-two">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#362E56", backgroundImage: "url('assets/images/services/service-bg.png')" }}>
                                    <h5>
                                        <Link legacyBehavior href="/ubc-orlando">
                                            ORLANDO
                                        </Link>
                                    </h5>
                                    <p>June 13-14</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Advanced.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="/ubc-orlando">
                                        <a className="read-more style-two">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#F5D534", backgroundImage: "url('assets/images/services/service-bg.png')" }}>
                                    <h5 className="salt-lake-city-p" >
                                        <Link legacyBehavior href="/ubc-salt-lake-city" className="salt-lake-city-p" >
                                            SALT LAKE CITY
                                        </Link>
                                    </h5>
                                    <p style={{ color: "#000" }}>July 18-19</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Blackridge.png" height="70" alt="" />
                                    </div>

                                    <Link legacyBehavior href="/ubc-salt-lake-city">
                                        <a className="read-more style-two">
                                            <span style={{ color: "#000" }}>Read More</span> <i className="far fa-arrow-right" style={{ color: "#000000" }} />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#26262E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#">
                                            TORONTO
                                        </Link>
                                    </h5>
                                    <p>Oct 17-18</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Legend.png" height="70" alt="" />
                                    </div>
                                    <Link legacyBehavior href="#">
                                        <a className="read-more style-two cursor-off">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s"
                                    style={{ backgroundColor: "#022E6E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#">
                                            SEATTLE
                                        </Link>
                                    </h5>
                                    <p>Nov 7-8</p>
                                    <div className="mb-3">
                                        <img src="assets/images/logos/Harbor.png" height="70" alt="" />
                                    </div>
                                    <Link legacyBehavior href="#">
                                        <a className="read-more style-two cursor-off">
                                            <span>Read More</span> <i className="far fa-arrow-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s" style={{ cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="/ubc-ny-nj-or-boston">
                                            NEW YORK AREA
                                        </Link>
                                    </h5>
                                    <p>All things TBD</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="service-item style-two wow fadeInLeft delay-0-2s" style={{ cursor: "not-allowed", opacity: "0.3" }}>
                                    <h5 className="cursor-off">
                                        <Link legacyBehavior href="#">
                                            MPLS/ST. PAUL AREA
                                        </Link>
                                    </h5>
                                    <p>All things TBD</p>
                                </div>
                            </div>
                        </div>

                        {/* Video Area start */}
                        {/* <div className="video-area-two rel z-1 rpt-70 pt-70">
                            <div className="container">
                                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                    <span className="sub-title mb-15">Testimonial</span>
                                    <h2>2024 Atlanta Ultimate Boot Camp </h2>
                                </div>
                                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                                    <img src="assets/images/video/video-bg-five.png" alt="Video" />
                                    <a href="https://www.youtube.com/watch?v=UygX_tzdW-k"
                                        className="mfp-iframe video-play">
                                        <i className="fas fa-play" />
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* Video Area end */}

                    </div>
                </section>
                {/* Service Style Two end */}
            </div>
        </Layout>
    );
};
export default Confirmation;
