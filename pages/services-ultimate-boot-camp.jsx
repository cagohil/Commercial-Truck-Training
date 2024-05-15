import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";


const UltimateBootCamp = () => {

  return (
    <Layout footer={5}>
      {/* Page Banner Start */}
      <PageBanner pageName={"Ultimate Boot Camp"} />
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
                          THE ULTIMATE BOOT CAMP IS REFRESHED! Developed by Coach Ken Taylor and hosted by Will Brogan for over a decade to commercial/fleet dealers, this hallmark event has brought systematic ideas to rookies and valuable best practice reminders to veterans.
                        </p>
                        <p>
                          Now a TWO-DAY PROGRAM, it is adapted to fit the unique challenges of this transitional era!
                        </p>
                        <span className="sub-title mb-15">Jump to Specific Event:</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#0085c0", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
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
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#ED1C24", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
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
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#022E6E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
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
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#0072BC", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
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
                <div className="service-item style-two wow " style={{ cursor:"not-allowed", opacity:"0.3"}}>
                  <h5 className="cursor-off">
                    <Link legacyBehavior href="#">
                      NEW YORK AREA
                    </Link>
                  </h5>
                  <p>Aug 13-14</p>
                  <Link legacyBehavior href="#">
                    <a className="read-more style-two cursor-off">
                      <span>Read More</span> <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-item style-two wow " style={{ cursor:"not-allowed", opacity:"0.3"}}>
                  <h5 className="cursor-off">
                    <Link legacyBehavior href="#">
                      MPLS/ST. PAUL AREA
                    </Link>
                  </h5>
                  <p>Sep 18-19</p>
                  <Link legacyBehavior href="#">
                    <a className="read-more style-two cursor-off">
                      <span>Read More</span> <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#26262E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
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
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#022E6E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
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
                <div className="service-item style-two wow "
                  style={{ backgroundColor: "#26262E", backgroundImage: "url('assets/images/services/service-bg.png')", cursor:"not-allowed", opacity:"0.3"}}>
                  <h5 className="cursor-off">
                    <Link legacyBehavior href="#">
                      Atlanta
                    </Link>
                  </h5>
                  <p>Dec 17-18</p>
                  <Link legacyBehavior href="#">
                    <a className="read-more style-two cursor-off">
                      <span>Read More</span> <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>

              

              {/* <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="service-item style-two wow fadeInLeft delay-0-6s">
                  <h5>
                    <Link legacyBehavior href="#">
                      HONOLULU
                    </Link>
                  </h5>
                  <p>July 18-19</p>
                  <Link legacyBehavior href="#">
                    <a className="read-more style-two">
                      <span>Read More</span> <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>

            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-70 pt-70">
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
            </div>
            {/* Video Area end */}
          </div>
        </section>
        {/* Service Style Two end */}
      </div>
    </Layout>
  );
};
export default UltimateBootCamp;
