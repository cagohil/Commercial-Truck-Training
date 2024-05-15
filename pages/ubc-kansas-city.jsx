import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';


const KansasCity = () => {
  const accordionData = [
    { id: 1, title: "Will you provide website layout about design ?" },
    { id: 2, title: "How much does cost to design website ?" },
    { id: 3, title: "How many revisions can i make the design ?" },
    { id: 4, title: "Will you provide website layout about design ?" },
  ];

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const mobileNumberRef = useRef();
  const dealershipNameRef = useRef();
  const dealershipCityRef = useRef();
  const dealershipStateRef = useRef();
  const positionRef = useRef();
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      mobileNumber: mobileNumberRef.current.value,
      dealershipName: dealershipNameRef.current.value,
      dealershipCity: dealershipCityRef.current.value,
      dealershipState: dealershipStateRef.current.value,
      position: positionRef.current.value,
      message: " message ",
      subject: " subject ",
    };

    const tableHtml = `
    <table 
    style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto;">
    <tbody>
    <tr >
    <td style="padding: 10px; text-align: center; font-weight: bold;">
    <h1 style="display: flex; align-items: end;">KANSAS CITY</h1>
      </td>
  </tr>
        <tr style="background-color: #f2f2f2;">
            <td style="padding: 10px; text-align: left; font-weight: bold;">First Name:</td>
            <td style="padding: 10px; text-align: left;">${formData.firstName}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: left; font-weight: bold;">Last Name:</td>
            <td style="padding: 10px; text-align: left;">${formData.lastName}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <td style="padding: 10px; text-align: left; font-weight: bold;">Email:</td>
            <td style="padding: 10px; text-align: left;">${formData.email}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: left; font-weight: bold;">Mobile Number:</td>
            <td style="padding: 10px; text-align: left;">${formData.mobileNumber}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <td style="padding: 10px; text-align: left; font-weight: bold;">Dealership Name:</td>
            <td style="padding: 10px; text-align: left;">${formData.dealershipName}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: left; font-weight: bold;">Dealership City:</td>
            <td style="padding: 10px; text-align: left;">${formData.dealershipCity}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <td style="padding: 10px; text-align: left; font-weight: bold;">Dealership State:</td>
            <td style="padding: 10px; text-align: left;">${formData.dealershipState}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: left; font-weight: bold;">Position within Dealership:</td>
            <td style="padding: 10px; text-align: left;">${formData.position}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <td style="padding: 10px; text-align: left; font-weight: bold;">Message:</td>
            <td style="padding: 10px; text-align: left;">${formData.message}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: left; font-weight: bold;">Subject:</td>
            <td style="padding: 10px; text-align: left;">${formData.subject}</td>
        </tr>
    </tbody>
    `;

    let payload = {
      message: tableHtml,
      subject: " -",
      email:"will@commercialtrucktraining.com;wbrogan@nexusplc.com;colleen.good@nexusplc.com;financeus@nexusplc.com"
      // email: "19ee047@gardividyapith.ac.in;klakhlani2@gmail.com;chirag.gohil@exultitsolution.com",
    };

    fetch("http://139.59.45.106:2024/api/Mail/ContactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          toast.success(" Data  sent successfully!");
          router.push('/ultimate-boot-camp-checkout');


          e.target.reset();
        }
        if (!response.ok) {
          toast.error("Something went wrong!");
          e.target.reset();
        }
        return response.json();
      })
      .then((data) => {
        // console.log("API response:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <Layout footer={5}>
      {/* Page Banner Start */}
      <PageBanner pageName={"Kansas City"} />
      {/* Page Banner End */}

      <div className="container mb-50 text-area">
        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <p style={{ color: "red" }} className="text-center">
            PLEASE NOTE: THIS PAGE INCLUDES THE DETAILS AND REGISTRATION FOR OUR
            ULTIMATE BOOT CAMP MAY 16-17 IN THE KANSAS CITY AREA ONLY!! PLEASE
            VISIT{" "}
            <a
              href="https://www.commercialtrucktraining.com/ubc/"
              style={{ color: "#5d95df" }}
            >
              COMMERCIALTRUCKTRAINING.COM/UBC
            </a>{" "}
            FOR OUR OTHER EVENTS THROUGHOUT THE COUNTRY!
          </p>
        </div>

        <div className="row">
          <div className=" mt-20 mb-0 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              WELCOME TO THE REFRESHED ULTIMATE BOOT CAMP!
            </h6>

            <p>
              Developed by COACH KEN TAYLOR and delivered by WILL BROGAN, the
              Ultimate Boot Camp has trained hundreds of Commercial/Fleet
              salespeople for well over a decade!
            </p>
            {/* <p>Now a TWO-DAY PROGRAM, it is adapted to fit the unique challenges of this transitional era!</p> */}
            <p>
              COMPLETELY REFRESHED for 2024 - the time is NOW to re-establish
              those skills you need to establish yourself as the “go to” work
              truck person in your market for years to come.
            </p>

            <p>
              The Ultimate Boot Camp is your two-day training ticket to that
              success!
            </p>

            <div className="row">
              <div className="col-lg-6">
                <div className="text-left-border-two mt-55  wow fadeInUp delay-0-2s">
                  <h6 className="mb-35">REFRESHED FOR TAKING ACTION!</h6>

                  <p>
                    The REFRESHED Ultimate Boot Camp is designed to provide you
                    with skills and tools to take action before you leave the
                    event, so you can hit the ground running when you return to
                    your dealership!
                  </p>
                  <p>
                    <strong> For the first time</strong> we are requesting you
                    bring your laptops or tablets and use your phones - you will
                    be doing research, making a variety of calls, and posting to
                    multiple social networks!
                  </p>

                  <p>Our attendees LEAVE WITH LEADS!</p>

                  <p>
                    Don‘t get left behind in this transitional era -{" "}
                    <strong>TAKE ACTION NOW!</strong>
                  </p>

                  <p>price: $1500 per person</p>
                </div>
              </div>

              <div className="col-lg-6 mt-65">
                {/* Video Area start */}
                {/* <div className="video-area-two rel z-1 rpt-70 pt-70"> */}
                <div className="container ">
                  <div className="section-title mb-10 wow fadeInUp delay-0-2s">
                    <h2 style={{ color: "rgb(232,230,10)" }}>
                      {" "}
                      KANSAS CITY MAY 16-17
                    </h2>
                    <p>
                      HOSTED BY KNAPHEID 4770 S 5600 W, West Valley City, UT
                      84118 &nbsp;
                    </p>
                    9001 NE Parvin Rd, Kansas City, MO 64161
                    CommercialTruckTraining.com/ubc-kck
                  </div>

                  <div className="two  mt-20 mb-65 wow fadeInUp delay-0-2s">
                    <ul>
                      <li>
                        <p>
                          <i className="far fa-long-arrow-right"></i> Knapheide
                          will provide a light breakfast and lunch each day;
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="far fa-long-arrow-right"></i> We will
                          have a 90-minute facility tour as well.
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="far fa-long-arrow-right"></i> Dinner
                          Thursday evening will be held at{" "}
                          <strong>801 Chophouse</strong> hosted by Knapheide.
                          Details to come on timing.
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="far fa-long-arrow-right"></i> All other
                          arrangements are responsibility of the
                          dealer/attendee.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h6>THE GAMEPLAN </h6>
            <h6 className=" mb-15">
              FIRST QUARTER <span>(Day 1: 8-12)</span>
            </h6>

            <ul className="list-style-two">
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Why this is a
                  GREAT Opportunity!
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Business Plans
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Prospecting – You
                  WILL leave with leads!
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Word Tracks
                </p>
              </li>
            </ul>

            <h6 className="mt-35 mb-15">
              SECOND QUARTER <span>(Day 1: 1-4)</span>
            </h6>

            <ul className="list-style-two">
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Networking and
                  Groups
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> A Partner
                  Presentation
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Quick Hitters
                  (Service, BDC, AI, etc)
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Highlights (Q & A)
                </p>
              </li>
            </ul>

            <h6 className="mt-35 mb-15">
              THIRD QUARTER <span>(Day 2: 8-12)</span>
            </h6>

            <ul className="list-style-two">
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Modern Sales Calls
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Personality Styles
                  – Motivate and SELL!
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> A Partner
                  Presentation
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Follow Through –
                  KEEP your customers!
                </p>
              </li>
            </ul>

            <h6 className="mt-35 mb-15">
              FOURTH QUARTER <span>(Day 2: 1-4*)</span>
            </h6>

            <ul className="list-style-two">
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> ACTIONABLE
                  Marketing – Let’s Post!
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Quick Hitters (Get
                  Management support!)
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Highlights (Q & A)
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> “OT”: Maximize the
                  learning with a BRAND NEW Sustainment Program{" "}
                </p>
              </li>
            </ul>

            {/* <h6 className="mt-35 mb-15">ADDITIONAL BENEFITS: </h6> */}

            {/* <ul className="list-style-two">
              <li>
                <p><i className="far fa-long-arrow-right"></i> 150+ Shared Documents;</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> Six Weeks of Follow Up;</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> Marketing Templates;</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> Host Facility Tours</p>
              </li>
            </ul> */}

            {/* <h6 className="mt-35 mb-15">LOGISTICAL EVENT DETAILS: </h6> */}

            {/* <ul className="list-style-two">
              <li>
                <p><i className="far fa-long-arrow-right"></i> WHAT: Commercial Truck Training’s Ultimate Boot Camp</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> WHEN: May 16-17, 2024 (Thursday-Friday)</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> SCHEDULE: BOTH Days – 8 am to 4 pm</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> WHERE: Knapheide – Kansas City</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> ADDRESS: 9001 NE Parvin Rd, Kansas City, MO 64161</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> PRICE: $1500 per person</p>
              </li>
            </ul> */}
            <br />

            <p className="text-center">
              SOME BROWSERS ARE HAVING ISSUES WITH REGISTRATION FORM DISPLAY. IF
              YOU WISH TO ATTEND, OR REGISTER SOMEONE, AND DO NOT SEE THE FORM,
              PLEASE EMAIL OR CALL WILL BROGAN IMMEDIATELY:{" "}
              <a href="mailto:will@commercialtrucktraining.com">
                will@commercialtrucktraining.com
              </a>{" "}
              or 661.309.7773. THANK YOU!
            </p>
          </div>
        </div>

        <div className="section-title text-center m-20 wow fadeInUp delay-0-2s">
          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            id="comment-form"
            className="comment-form bgc-lighter mt-55 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <h4 className="text-start" style={{ color: "rgba(245,213,52,1)" }}>
              KANSAS CITY Ultimate Boot Camp Registration
            </h4>
            <p className="text-start">
              You are officially registering for our Kansas City Ultimate Boot
              Camp by submitting this form.
              <br />
              The event will take place May 16-17, 2024 at Knapheide in Kansas
              City, MO.
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
                    ref={firstNameRef}
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
                    ref={lastNameRef}
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
                    ref={emailRef}
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
                    ref={mobileNumberRef}
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
                    ref={dealershipNameRef}
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
                    ref={dealershipCityRef}
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
                    ref={dealershipStateRef}
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
                    ref={positionRef}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "rgba(225,30,54,1)",
                      borderColor: "rgba(225,30,54,1)",
                    }}
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
      <ToastContainer />
    </Layout>
  );
};
export default KansasCity;
