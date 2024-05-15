import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const VirginiaBeach = () => {
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
      <PageBanner pageName={"Virginia Beach"} />
      {/* Page Banner End */}

      <div className="container mb-50 text-area">
        
      <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <p>
          THE ULTIMATE BOOT CAMP IS BACK! Developed and delivered by Coach Ken Taylor and Will Brogan for over a decade to commercial/fleet dealers, this hallmark event has brought systematic ideas to rookies and valuable best practice reminders to veterans.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="text-left-border-two mt-60 mb-65 wow fadeInUp delay-0-2s">
              <p>
              Now a TWO-DAY PROGRAM, it is adapted to fit the unique challenges of this transitional era!
              </p>
              <p>
              DAY ONE MORNING (8-12): Organization and Planning
              </p>
              <p>DAY ONE AFTERNOON (1-4): Prospecting and Referrals/Scripts</p>
              <p>DAY TWO MORNING (8-12): Associations and Networking/Events</p>
              <p>DAY TWO AFTERNOON (1-4): Personality-Style Selling and Marketing/Socials</p>
              <p>ADDITIONAL BENEFITS: 150+ Shared Documents; Six Weeks of Follow Up; Marketing Templates; Host Facility Tours</p>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-70 pt-70">
              <div className="container">
                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                  <img src="assets/images/video/video-bg-foar.png" alt="Video" />
                  <a href="https://www.youtube.com/watch?v=bVRI2TO0sOg&list=PLuyKZ1i3Wvr_fqPhfDEZRhEg3zJu8ROEk&t=15s"
                    className="mfp-iframe video-play">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {/* Video Area end */}
          </div>

          <div className=" mt-20 mb-0 wow fadeInUp delay-0-2s">
          <h6 className="mt-35 mb-15">LOGISTICAL EVENT DETAILS:</h6>
            
            <ul className="list-style-two">
                <li>
                <p><i className="far fa-long-arrow-right"></i> WHAT: Commercial Truck Training’s Ultimate Boot Camp</p>
                </li>
                <li>
                  <p><i className="far fa-long-arrow-right"></i> WHEN: April 22-23, 2024 (Monday-Tuesday)</p>
                </li>
                <li>
                  <p><i className="far fa-long-arrow-right"></i> SCHEDULE: BOTH Days – 8 am to 4 pm</p>
                </li>
                <li>
                  <p><i className="far fa-long-arrow-right"></i> WHERE: Commercial Truck Trader</p>
                </li>
                <li>
                  <p><i className="far fa-long-arrow-right"></i> ADDRESS: 4525 Main St Suite 1101, Virginia Beach, VA 23462</p>
                </li>
                <li>
                  <p><i className="far fa-long-arrow-right"></i> PRICE: $1500 per person</p>
                </li>
              </ul>

            <p>
            Notes: Lunch provided on Both Days. Attendee/dealership is responsible for all other meals, transportation, hotel arrangements etc.
            </p>
          </div>

          
        </div>

        <div className="section-title text-center m-20 wow fadeInUp delay-0-2s">
          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            id="comment-form"
            className="comment-form bgc-lighter mt-95 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <h4 className="text-start">VIRGINIA BEACH Ultimate Boot Camp Registration</h4>
            <p className="text-start">
              You are officially registering for our Virginia Beach Ultimate Boot Camp by submitting this form.
              <br />
              The event will take place April 22-23, 2024 at Commercial Truck Trader in Virginia Beach, VA.
              <br />
              All pertinent information is listed above. See you there!
            </p>
            <div className="row mt-30">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    id="blog-email"
                    name="blog-email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="number"
                    id="blog-email"
                    name="blog-email"
                    className="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="form-control"
                    placeholder="Dealership Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="City"
                    id="message"
                    className="form-control"
                    placeholder="Dealership City"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="City"
                    id="message"
                    className="form-control"
                    placeholder="Dealership State"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="City"
                    id="message"
                    className="form-control"
                    placeholder="Commercial Manager"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <Link
                    href="ultimate-boot-camp-checkout"
                    className="theme-btn style-two w-100"
                  >
                    REGISTER NOW! <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default VirginiaBeach;
