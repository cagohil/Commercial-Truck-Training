import PageBanner from "@/src/components/PageNannerTwo";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Accordion } from "react-bootstrap";
import payment from "./stripe/stripe-payment";

const Checkout = () => {
  const accordionData = [
    { id: 1, title: "Will you provide website layout about design ?" },
    { id: 2, title: "How much does cost to design website ?" },
    { id: 3, title: "How many revisions can i make the design ?" },
    { id: 4, title: "Will you provide website layout about design ?" },
  ];
  const [active, setActive] = useState("collapse0");
  const {
    handleSubmit,
    // formState: { errors },
} = useForm({ mode: "onChange" });

  const handleClick =  async () => {
    await payment()
  }

  return (
    <Layout footer={5}>
      {/* Page Banner Start */}
      <PageBanner pageName={"Checkout"} />
      {/* Page Banner End */}

      <div className="container mb-50 text-area">
        <div className="section-title text-center m-20 wow fadeInUp delay-0-2s">
          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            id="comment-form"
            className="comment-form bgc-lighter mt-55 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <h4 className="text-start">PAY BY CREDIT CARD</h4>
            <div className="row mt-30">
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button
                    // href="https://www.powr.io/checkout_screen?unique_label=78de3bf5_1473954350"
                    target="framename"
                    role="link" 
                    onClick={handleSubmit(handleClick)}
                    className="theme-btn style-two w-100"
                  >
                    <div className="icon">
                      <i className="fab fa-cc-stripe"></i>
                    </div>
                    Pay NOW by Credit Card !!!!
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
                <div className="justify-content-center mt-3">
                  <img
                    className="px-1"
                    src="assets/images/creditCard/visa.svg"
                    alt="visa"
                  />
                  <img
                    className="px-1"
                    src="assets/images/creditCard/mastercard.svg"
                    alt="mastercard"
                  />
                  <img
                    className="px-1"
                    src="assets/images/creditCard/amex.svg"
                    alt="amex"
                  />
                  <img
                    className="px-1"
                    src="assets/images/creditCard/discover.svg"
                    alt="discover"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="section-title text-center m-20 wow fadeInUp delay-0-2s">
          <div className="text-start mt-20 mb-0 wow fadeInUp delay-0-2s">
            <h6 className="mt-70">Pay by Check (via Emailed Invoice):</h6>
            <p>
              Please note: payment will now be processed by Nexus Business
              Solutions
            </p>
          </div>

          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            id="comment-form"
            className="comment-form bgc-lighter mt-55 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <h4 className="text-start">PAY BY INVOICE/CHECK</h4>
            <p className="text-start">
              Please fill out this form so we know who to send an invoice to in
              the dealership's Accounts Payable office. Invoice will come via
              email from financeus@nexusplc.com. A W-9 will be sent as well.
              Thank you!
            </p>
            <div className="row mt-30">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    placeholder="Dealership Official Name"
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
                    placeholder="Dealership Address"
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
                    placeholder="Commercial Manager Name"
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
                    placeholder="Commercial Manager Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="number"
                    id="website"
                    name="website"
                    className="form-control"
                    placeholder="Commercial Manager Phone"
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
                    placeholder="Accounts Payable Representative Name"
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
                    placeholder="Accounts Payable Representative Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <Link
                    href="ultimate-boot-camp-confirmation"
                    className="theme-btn style-two w-100"
                  >
                    Pay by Check <i className="far fa-arrow-right" />
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
export default Checkout;
