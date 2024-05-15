import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const Seattle = () => {
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
      <PageBanner pageName={"Seattle"} />
      {/* Page Banner End */}

      <div className="container mb-50">
        <div className="section-title text-center m-20 wow fadeInUp delay-0-2s">
          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            id="comment-form"
            className="comment-form bgc-lighter mt-95 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <h4 className="text-start">ORLANDO Ultimate Boot Camp Registration</h4>
            <p className="text-start">
            You are officially registering for our ORLANDO Ultimate Boot Camp by submitting this form.
              <br />
              The event is June 13-14, 2024 at Advanced Work Vans in Sanford, FL.
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
                  <button
                    type="submit"
                    className="theme-btn style-two w-100"
                  >
                    REGISTER NOW! <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Seattle;
