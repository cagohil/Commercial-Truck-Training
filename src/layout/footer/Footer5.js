import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer className="main-footer hero-area footer-five pt-50">
      <div className="container container-1290 pb-40">
      <div className="footer-top pt-0 pb-20">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/logo-2.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a href="https://www.facebook.com/CommercialTruckTraining/">
                  <i className="fab fa-facebook-f" /> <span>Facebook</span>
                </a>
                <a href="https://www.youtube.com/channel/UCLGeCxEYgIh-yQcW1l1Kocw">
                  <i className="fab fa-youtube" /> <span>YouTube</span>
                </a>
                <a href="https://www.linkedin.com/company/commercial-truck-training">
                  <i className="fab fa-linkedin" /> <span>Linkedin</span>
                </a>
                <a href="https://www.instagram.com/commercialtrucktraining/">
                  <i className="fab fa-instagram" /> <span>Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@kentaylorctt">
             <i class="fab fa-tiktok"></i> <span>Tiktok</span>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between pt-70">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
              <h5 className="mb-3">Get In Touch</h5>
              <ul className="list-style-two">
              <li>
              <i class="far fa-phone-alt"></i>{" "}
                  <a href="tel:9043738190">
                  904.373.8190
                  </a>
                </li>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:will@commercialtrucktraining.com">
                  will@commercialtrucktraining.com
                  </a>
                </li>
                <li>
                  <i className="far fa-clock" />{" "}
                  <span>Monday - Friday, 9am - 6pm</span>
                </li>
                <li>
                  <i className="far fa-map-marker-alt"></i>{" "}
                  <a
                    href="https://maps.app.goo.gl/fj9JZnV8k4SKwy9h9"
                    target="_blank"
                  >
                    100 West Big Beaver Road, Suite 200, Troy MI 48084
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
            <h5 className="mb-3">Our Services</h5>
              <ul className="list-style-two">
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="services-dealership-consulting">Dealership Consulting</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="services-ultimate-boot-camp">ULTIMATE BOOT CAMP</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="services-coaching-calls">Coaching Calls</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="services-focused-fridays">Focused Fridays</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="services-marketing-services">Marketing Services</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
            <h5 className="mb-3">Free Content</h5>
              <ul className="list-style-two">
                {/* <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="contact">Contact Us</Link>
                </li> */}
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="free-content-35-prospecting-ideas">35 Prospecting Ideas</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="free-content-daily-manager-checklist">Daily Checklist for Commercial Managers</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="free-content-employee-purchase-program">Employee Purchase Program</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="free-content-if-it-were-me">If It Were Me</Link>
                </li>
                <li>
                  <i className="far fa-long-arrow-right"></i>{" "}
                  <Link legacyBehavior href="free-content-quick-question-skill-guide">Quick Guide to Questioning Skills</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-15">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="footer-copyright-text wow fadeInUp delay-0-2s ">
                <p className="text-center">
                  Copyright &#169; 2024{" "}
                  <span style={{ color: "#e8e60a" }}>
                  Commercial Truck Training
                  </span>
                  , All Right Reserved. Design by{" "}
                  <a target="_blank" href="http://exultitsolution.com">
                    <span style={{ color: "#5d95df" }}> Exult IT Solution</span>
                    .
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
