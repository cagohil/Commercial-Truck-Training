import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";


const MarketingServices = () => {



  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const mobileNumberRef = useRef();
  const dealershipNameRef = useRef();
  const dealershipCityRef = useRef();
  const dealershipStateRef = useRef();
  const dealershipWebsiteRef = useRef();

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
      dealershipWebsite: dealershipWebsiteRef.current.value,
      message: " message ",
      subject: " subject ",
    };
    
    const tableHtml = `
    <table
    style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto;">
    <tbody>
    <tr >
    <td style="padding: 10px; text-align: center; font-weight: bold;"><h1 style="display: flex; align-items: end;">News Letter </h1></td>
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
            <td style="padding: 10px; text-align: left;">${formData.dealershipWebsite}</td>
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
      // email: "klakhlani2@gmail.com;chirag.gohil@exultitsolution.com",
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
      <PageBanner pageName={"News Letter"} />

      <div className="container text-area">
        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <h6 className="mt-35 mb-15">
            Make Hundreds of Sales Calls – INSTANTLY!
          </h6>
          <p>
            Do you want to make a fun, impactful monthly impression on your
            clients and prospects for less than the cost of a stamp? Then sign
            up for our email newsletter program! Each month we do all the work,
            and you get all the credit! The program is very simple:
          </p>
          {/* <p>
            Do you want to make a monthly impression on your clients and prospects for less than the cost of a stamp? Then sign up for our electronic newsletter program! Each month we do all the work and you get all the credit! The program is very simple:
          </p> */}
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="text-left-border-two mt-60 mb-65 wow fadeInUp delay-0-2s">
              <div className=" mt-20 mb-0 wow fadeInUp delay-0-2s">
                <ul className="list-style-two">
                  <li>
                    <p>
                      <i className="far fa-long-arrow-right"></i> We send
                      custom-designed monthly newsletters DIRECTLY TO YOUR
                      clients!
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="far fa-long-arrow-right"></i> They don’t
                      know we exist – the email comes from you – but we do the
                      work! Think of us as your personal Ghost Writer.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="far fa-long-arrow-right"></i> We will
                      include a link to your inventory so the customers can view
                      your latest uploaded pictures of your commercial trucks,
                      which will make the phone ring!
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="far fa-long-arrow-right"></i> We track all
                      opens and bounces and give you the option to request an
                      update on those databases!
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="far fa-long-arrow-right"></i> Need to
                      announce a dealership special? Give us a three-day notice
                      and we will get your campaign out there and running!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-70 pt-70">
              <div className="container">
                <div className="section-title mb-30 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">
                    Send a Monthly Newsletter to Your Customers & Prospects!
                  </span>
                </div>
                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                  <img src="assets/images/video/video-bg-six.png" alt="Video" />
                  <a
                    href="https://www.youtube.com/watch?v=pQGexSXoo6c"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {/* Video Area end */}
          </div>

          <div className="container">
            <div className="text-left-borders mt-20">
              <p>
                “ “I want to tell you that newsletter has be awesome!!! I have
                clients fighting for the feature [Customer of the Month] spot
                every month. I also have heard that clients are using it as a
                referral tool to out-bid each other. Super Happy with the
                RESULTS!”  ”
                <p style={{ fontSize: "11px" }}>
                  Keith Osman, Cornerstone Automotive
                </p>
              </p>
            </div>
          </div>

          <div className=" mt-20 mb-0 wow fadeInUp delay-0-2s">
            <p>
              Articles are written by Ken Taylor or Will Brogan, who together
              have penned nearly three thousand articles . Ken is known
              nationally as “America’s Corporate & Personal Coach”. Everything
              we’ll write for your readers is with a motivational approach!
            </p>

            <p className="mt-40 mb-40">
              {" "}
              <strong>
                Each month, your newsletter includes the following:
              </strong>
            </p>

            <ul className="list-style-two">
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> An introduction
                  touching on what’s ahead for the article and thanking your
                  readers
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> A Vehicle of the
                  Month with a photo of the vehicle and direct links to its
                  inventory page
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> A “Customer of the
                  Month”. Highlight those who you had a pleasure doing business
                  with and promote their business too!
                </p>
              </li>

              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> An inspirational
                  article housed by the “Motivational Moment” section!
                </p>
              </li>
            </ul>

            <p>
              The best part? We do all the work so you can focus on meeting
              clients and growing your business! All we need from you are some
              start up tasks, your reader list of emails, and a dozen websites
              of the customer businesses you’d like to highlight. IT’S REALLY
              THAT SIMPLE!
            </p>

            <p className="mt-40 mb-40">
              <strong>What else do you need to know?</strong>
            </p>

            <ul className="list-style-two">
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> What is the
                  monthly investment? A flat fee of $125 per month per person;
                  plus likely $15-$30 per month in list charges we incur.
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> Billing is done by
                  credit card subscription ONLY. This makes it easier on both
                  sides of the transaction.
                </p>
              </li>
              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> MOST manufacturers
                  consider this co-op eligible, although those programs seem
                  more challenging than ever, so please check with your OEM
                  reps.
                </p>
              </li>

              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> You’ll receive the
                  Monthly Distribution – we aim to have each edition out between
                  the 10th and 20th of every month
                </p>
              </li>

              <li>
                <p>
                  <i className="far fa-long-arrow-right"></i> We will set up a
                  reporting program (if you desire) for us to transfer leads to
                  you!
                </p>
              </li>
            </ul>

            <p className="mt-40">
              <strong>How do you get started?</strong> <br />
              Simply fill out and submit the form below, and we will follow up
              with you as soon as possible to get you started immediately. Don’t
              wait, or your territory may be claimed by another dealership!
            </p>
          </div>
        </div>

        <div className="section-title text-center m-20 mb-80 wow fadeInUp delay-0-2s">
          {/* <span className="sub-title mb-15">Pricing Package</span> */}
          <form
            id="comment-form"
            className="comment-form bgc-lighter mt-70 wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <h4 className="text-start">Marketing Services </h4>
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
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    placeholder="First Name"
                    ref={firstNameRef}
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
                    name="Website"
                    id="message"
                    className="form-control"
                    placeholder="Dealership Website"
                    ref={dealershipWebsiteRef}
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
      <ToastContainer/>
    </Layout>
  );
};
export default MarketingServices;
