import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChampionsClub = () => {
  const accordionData = [
    { id: 1, title: "Will you provide website layout about design ?" },
    { id: 2, title: "How much does cost to design website ?" },
    { id: 3, title: "How many revisions can i make the design ?" },
    { id: 4, title: "Will you provide website layout about design ?" },
  ];
  const [active, setActive] = useState("collapse0");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const mobileNumberRef = useRef();
  const dealershipNameRef = useRef();
  const dealershipCityRef = useRef();
  const dealershipStateRef = useRef();
  const positionRef = useRef();
  const numberOfPersonalRef = useRef();
  const numberOfStorefrontsRef = useRef();

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
      numberOfPersonal: numberOfPersonalRef.current.value,
      numberOfStorefronts: numberOfStorefrontsRef.current.value,
      message: " message ",
      subject: " subject ",
    };

    const tableHtml = `
    <table
    style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto;">
    <tbody>
    <tr >
    <td style="padding: 10px; text-align: center; font-weight: bold;"><h1 style="display: flex; align-items: end;">Champions-Club</h1></td>
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
            <td style="padding: 10px; text-align: left; font-weight: bold;">Number of Commercial/Fleet Personal in
                Department:</td>
            <td style="padding: 10px; text-align: left;">${formData.numberOfPersonal}</td>
        </tr>
        <tr>
            <td style="padding: 10px; text-align: left; font-weight: bold;">Number of Commercial/Fleet Storefronts:
            </td>
            <td style="padding: 10px; text-align: left;">${formData.numberOfStorefronts}</td>
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
      // email: "klakhlani2@gmail.com;chirag.gohil@exultitsolution.com;piyush.vadher07@gmail.com",
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
      <PageBanner pageName={"Champions Club"} />
      {/* Page Banner End */}

      <div className="container text-area">
        <div className=" mt-50 mb-20 wow fadeInUp delay-0-2s">
          <p>
            Need consistent-contact foundational coaching and training from
            Commercial and Fleet experts, but don’t have the budget for
            In-Dealership Consulting?
          </p>

          <p>
            Our ALL-NEW Champions Club is the solution to your problem! We
            designed this program to be the remote consulting that so many
            dealerships need right now, that constant guiding hand and
            accountability partner.
          </p>

          <p>With the ALL-NEW Champions Club, Members receive:</p>

          <ul>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Two 30-Minute
                Coaching Calls per month per dealership
              </p>
            </li>

            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Access to our
                Staff’s “Open Hours” to pop in and ask additional questions
              </p>
            </li>

            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Access to our Twenty
                Group-style sessions:{" "}
                <span className="links">
                  <Link legacyBehavior href="services-focused-fridays">
                    Focused Fridays or Wisdom Wednesdays
                  </Link>
                </span>
              </p>
            </li>

            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> FREE and UNLIMITED{" "}
                <span className="links">
                  <Link legacyBehavior href="services-ultimate-boot-camp">
                    Ultimate Boot Camp
                  </Link>
                </span>{" "}
                seats (subject to capacity/availability)
              </p>
            </li>

            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> All will receive
                access to our Online Training Video Vault (registration
                required) once that has been refurbished
              </p>
            </li>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> The first TWENTY
                Dealerships who join the Club also get our{" "}
                <span className="links">
                  {" "}
                  <Link legacyBehavior href="newsletters">
                    Newsletter
                  </Link>
                </span>{" "}
                program free for one year!
              </p>
            </li>
          </ul>

          <p className="mt-40 mb-40">
            <strong>
              The cost for this program is $1500 per month per dealership.
            </strong>
          </p>
          <p>
            Your customers like consolidated billing, right? So do we, so do
            you, so let’s break that down. Say you have the required two people
            per store to meet your OEM’s business program requirements.
          </p>

          <ul>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Two Ultimate Boot
                Camp seats: $1500 each/event = $3000/year
              </p>
            </li>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Monthly Coaching
                Calls service: $500 each/month = $12000/year
              </p>
            </li>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Focused Fridays or
                Wisdom Wednesdays: $125 each/month = $3000/year
              </p>
            </li>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Monthly Newsletter
                Service: $125 each/month = $3000/year
              </p>
            </li>
            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> Online Training
                Video Vault: $125 each/month = $3000/year
              </p>
            </li>

            <li>
              <p>
                <i className="far fa-long-arrow-right"></i> “Open Hours” Access:
                $50 each/month = $1200/year
              </p>
            </li>
          </ul>

          <p>
            With the required two people in your OEM’s Business Program that
            should be associated with Commercial/Fleet in your dealership, you’d
            be looking at a cost of $25,200 per year… and a whole lot of
            transactions!
          </p>

          <p>
            Now imagine a staff of three, four, five, and so on. It continues to
            add up.
          </p>

          <p>
            Or, you could join for $1500 per month (on a one year contract), and
            have the consistent engagement, heavy hit training, on-demand
            training, quality interaction with other dealers, marketing
            services, and open hours to a team that trains dealer personnel just
            like you and has done so effectively for nearly 100 years
            collectively. Oh, and one bill.
          </p>

          <p>Interested? We thought you might be!</p>
          <p className="mt-40 mb-40">
            <strong>
              Fill out the form below and let’s see if Champions Club is right
              for you!
            </strong>
          </p>
        </div>

        <div className="section-title text-center m-20 mb-80 wow fadeInUp delay-0-2s">
          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            onSubmit={handleSubmit}
            id="comment-form"
            className="comment-form bgc-lighter mt-70 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <h4 className="text-start">Champions Club PRE-REGISTRATION</h4>
            <p className="text-start">
              You are PRE-REGISTERING for our upcoming series, Marketing
              Services, by submitting this form. There is no obligation on your
              part, think of this form as merely an "interest list" for us at
              this time. Thank you!
            </p>
            <div className="row mt-30">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    ref={firstNameRef}
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
                    ref={lastNameRef}
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
                    ref={emailRef}
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
                    ref={mobileNumberRef}
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
                    ref={dealershipNameRef}
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
                    ref={dealershipCityRef}
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
                    ref={dealershipStateRef}
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="Website"
                    id="message"
                    ref={positionRef}
                    className="form-control"
                    placeholder="Position within Dealership
                    "
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="number"
                    name="Website"
                    id="message"
                    className="form-control"
                    placeholder="Number of Commercial/Fleet Personal in Department"
                    ref={numberOfPersonalRef}
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="number"
                    name="Website"
                    id="message"
                    className="form-control"
                    ref={numberOfStorefrontsRef}
                    placeholder="Number of Commercial/Fleet Storefronts"
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn style-two w-100">
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
export default ChampionsClub;
