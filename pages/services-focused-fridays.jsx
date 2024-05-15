import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState,useRef } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ToastContainer, toast } from "react-toastify";



const FocusedFridays = () => {
  const [active, setActive] = useState("collapse0");
  const accordionData = [
    { id: 1, title: "Will you provide website layout about design ?" },
    { id: 2, title: "How much does cost to design website ?" },
    { id: 3, title: "How many revisions can i make the design ?" },
    { id: 4, title: "Will you provide website layout about design ?" },
  ];
const [activeTab, setActiveTab] = useState('fridays');
const [interests,setInterests]=useState([]);


const tableTitle = activeTab == 'fridays'? "Focused Fridays":"Wisdom Wednesdays";





const handleTabChange = (tab) => {
  setActiveTab(tab);
  // console.log(`Active tab: ${tab}`);
};



const firstNameRef= useRef();
const lastNameRef= useRef();
const emailRef=useRef();
const mobileNumberRef=useRef();
const dealershipNameRef=useRef();
const dealershipCityRef=useRef();
const dealershipStateRef=useRef();
const positionRef=useRef();
const experienceRef=useRef();
const messageRef=useRef("");


const handleExperienceChange=(event)=>{
  experienceRef.current=event.target.value
}

const handleInterested=(event)=>{
   const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  
}



const handleOther=(event)=>{
  messageRef.current=event.target.value

}

const handleSubmit = (e) => {
  e.preventDefault();

  const formData={
    firstName:firstNameRef.current.value,
    lastName:lastNameRef.current.value,
    email:emailRef.current.value,
    mobileNumber:mobileNumberRef.current.value,
    dealershipName:dealershipNameRef.current.value,
    dealershipCity:dealershipCityRef.current.value,
    dealershipState:dealershipStateRef.current.value,
    position:positionRef.current.value,
    experience:experienceRef.current,
    interested:interests.join(',') || "Interest",
    message:messageRef.current || " message ",
    subject: " subject ",

  }


  

  const tableHtml = `
  <table
  style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto;">
  <tbody>
  <tr >
  <td style="padding: 10px; text-align: center; font-weight: bold;">
  <h1 style="display: flex; align-items: end;">${tableTitle}</h1>
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
          <td style="padding: 10px; text-align: left; font-weight: bold;">Number of Commercial/Fleet Personal in
              Department:</td>
          <td style="padding: 10px; text-align: left;">${formData.experience}</td>
      </tr>
      <tr>
          <td style="padding: 10px; text-align: left; font-weight: bold;">Number of Commercial/Fleet Storefronts:
          </td>
          <td style="padding: 10px; text-align: left;">${formData.interested}</td>
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
  ` ;


  let payload = {
    message: tableHtml,
    subject: " -",
    email:"will@commercialtrucktraining.com;wbrogan@nexusplc.com;colleen.good@nexusplc.com;financeus@nexusplc.com"
    // email: "19ee047@gardividyapith.ac.in;klakhlani2@gmail.com"
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

}


  return (
    <Layout footer={5}>
      {/* Page Banner Start */}
      <PageBanner pageName={"Focused Fridays"} />
      {/* Page Banner End */}


      <div className="container text-area">
        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <p>
            The Commercial Truck Training Virtual Mini Camp developed by Will Brogan was the perfect way to stay in the game and keep your industry education fresh while we dealt with the far-reaching and long-lasting effects from COVID-19 over the last few years.
          </p>
        </div>

        <div className=" mt-30 mb-40 wow fadeInUp delay-0-2s">
          <p>
            Now, it’s been adapted to fit those who want quick hitter trainings and discussions on a weekly basis!

          </p>
        </div>

        <div className=" mt-30 mb-40 wow fadeInUp delay-0-2s">
          <p>
            We know your time and attention are valuable commodities these days. Therefore this program is tailored to fit that “limited availability” lifestyle: a simple 60-minute session three Fridays per month we call “FOCUSED FRIDAYS”!
          </p>
        </div>

        <div className="mt-30 mb-40 wow fadeInUp delay-0-2s">
          <p>
            We also are opening a second session option: WISDOM WEDNESDAYS!

          </p>
        </div>

        <div className=" mt-20 mb-40 wow fadeInUp delay-0-2s">
          <ul className="list-style-two">
            <li>
              <p><i className="far fa-long-arrow-right"></i>  What: Commercial Truck Training’s Focused Fridays or Wisdom Wednesdays Virtual Sessions
              </p>
            </li>
            <li>
              <p><i className="far fa-long-arrow-right"></i>  When: At least Three Fridays or Wednesdays per month at 11 am Eastern
              </p>
            </li>
            <li>
              <p><i className="far fa-long-arrow-right"></i>  Where: Google Meet; You will receive a link the day before your first session after registration.
              </p>
            </li>
            <li>
              <p><i className="far fa-long-arrow-right"></i> Price: $125/month total ($1200/Year if paid up-front!), billed by Credit Card Subscription or up front charge ONLY
              </p>
            </li>
            <li>
              <p><i className="far fa-long-arrow-right"></i> Availability: TEN SEATS per Session!
              </p>
            </li>
          </ul>
        </div>






        <Tabs
          defaultActiveKey="fridays"
          id="uncontrolled-tab-example"
          className="mb-3"
          activeKey={activeTab}
          onSelect={handleTabChange}
        >
          <Tab eventKey="fridays" title="Focused Fridays">
            <div className="section-title text-center m-20 mb-80 wow fadeInUp delay-0-2s">
              {/* <span className="sub-title mb-15">Pricing Package</span> */}
              <form
                id="comment-form"
                className="comment-form bgc-lighter mt-15 wow fadeInUp delay-0-2s"
                name="comment-form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <h4 className="text-start" style={{ color: "rgba(225,30,54,1)" }}>Focused Fridays PRE-REGISTRATION</h4>
                <p className="text-start">
                  You are PRE-REGISTERING for our upcoming series, Focused Fridays, by submitting this form. There is no obligation on your part, think of this form as merely an "interest list" for us at this time. Thank you!
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
                        name="City"
                        id="message"
                        className="form-control"
                        placeholder="Commercial Manager"
                        ref={positionRef}
                        required
                      />
                    </div>
                  </div>


                  <div className="col-md-12 text-start">
      <div className="radio-btn form-group mt-3" onChange={handleExperienceChange}>
        <p>Please Provide Your Experience Level in Fleet/Commercial?</p>
        <input type="radio" id="02years" className="ml-0" name="fav_language" value="0-2 Years" />
        <label for="02years"> 0-2 Years </label>
        <input type="radio" id="36years" name="fav_language" value="3-6 Years" />
        <label for="36years"> 3-6 Years </label>
        <input type="radio" id="710years" name="fav_language" value="7-10 Years" />
        <label for="710years"> 7-10 Years </label>
        <input type="radio" id="10years" name="fav_language" value="10+ Years" />
        <label for="10years"> 10+ Years </label>
      </div>
    </div>

                  <div className="col-md-12 text-start">
                    <div className="radio-btn form-group mt-3" onChange={handleInterested}>
                      <p>Which Additional Topics Might You Be Interested In? (Check All Applicable)</p>
                      <input type="checkbox" id="vehicle1" name="vehicle1" value="Marketing"  />
                      <label for="vehicle1"> Marketing</label>
                      <input type="checkbox" id="vehicle2" name="vehicle2" value="Personality-Style Selling"  />
                      <label for="vehicle2"> Personality-Style Selling</label>
                      <input type="checkbox" id="vehicle3" name="vehicle3" value="Leadership"  />
                      <label for="vehicle3"> Leadership</label>
                      <input type="checkbox" id="vehicle3" name="vehicle3" value="Following Up"  />
                      <label for="vehicle4"> Following Up </label><br />
                    </div>
                      <div className="d-flex mt-3 mb-25 text-start " onChange={handleOther}> 
                        <input type="checkbox" id="Other" name="Other" className="m-25"  />
                        <input type="text" className=" ml-2 form-control " id="Other" name="Other" placeholder="Other" />
                      </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" style={{ backgroundColor: "rgba(225,30,54,1)",borderColor:"rgba(225,30,54,1)"}} className="theme-btn style-two w-100">

                        REGISTER NOW! <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Tab>


          <Tab eventKey="wednesdays" title="Wisdom Wednesdays">
            <div className="section-title text-center m-20 mb-80 wow fadeInUp delay-0-2s">
              {/* <span className="sub-title mb-15">Pricing Package</span> */}
              <form
                id="comment-form"
                className="comment-form bgc-lighter mt-15 wow fadeInUp delay-0-2s"
                name="comment-form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <h4 className="text-start" style={{ color: "rgba(245,213,52,1)" }}>Wisdom Wednesdays PRE-REGISTRATION</h4>
                <p className="text-start">
                  You are PRE-REGISTERING for our upcoming series, Wisdom Wednesdays, by submitting this form. There is no obligation on your part, think of this form as merely an "interest list" for us at this time. Thank you!
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
                        name="City"
                        id="message"
                        className="form-control"
                        placeholder="Commercial Manager"
                        ref={positionRef}
                        required
                      />
                    </div>
                  </div>


                  <div className="col-md-12 text-start">
                    <div className="radio-btn form-group mt-3"onChange={handleExperienceChange} >
                      <p>Please Provide Your Experience Level in Fleet/Commercial?</p>
                      <input type="radio" id="02years" className="ml-0" name="fav_language" value="0-2 Years" />
                      <label for="02years"> 0-2 Years </label>
                      <input type="radio" id="36years" name="fav_language" value="3-6 Years" />
                      <label for="36years"> 3-6 Years </label>
                      <input type="radio" id="710years" name="fav_language" value="7-10 Years" />
                      <label for="710years"> 7-10 Years </label>
                      <input type="radio" id="10years" name="fav_language" value="10+ Years" />
                      <label for="10years"> 10+ Years </label>
                    </div>
                  </div>

                  <div className="col-md-12 text-start">
                    <div className="radio-btn form-group mt-3" onChange={handleInterested}>
                      <p>Which Additional Topics Might You Be Interested In? (Check All Applicable)</p>
                      <input type="checkbox" id="Marketing" name="Marketing" value="Marketing"  />
                      <label for="Marketing"> Marketing</label>
                      <input type="checkbox" id="Personality-Style Selling" name="Personality-Style Selling" value="Personality-Style Selling"  />
                      <label for="Personality-Style Selling"> Personality-Style Selling</label>
                      <input type="checkbox" id="Leadership" name="Leadership" value="Leadership"  />
                      <label for="Leadership"> Leadership</label>
                      <input type="checkbox" id="Following Up" name="Following Up" value="Following Up"  />
                      <label for="Following Up"> Following Up </label><br />
                    </div>
                      <div className="d-flex mt-3 mb-25 text-start " onChange={handleOther}> 
                        <input type="checkbox" id="vehicle5" name="vehicle5" className="m-25"  />
                        <input type="text" className=" ml-2 form-control " id="vehicle5" name="vehicle3" placeholder="Other" />
                      </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-0">
                    <button type="submit"  style={{ backgroundColor: "rgba(245,213,52,1)", color: "Black", borderColor: "rgba(245,213,52,1)" }}   className="theme-btn style-two w-100">

REGISTER NOW! <i className="far fa-arrow-right" />
</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Tab>
        </Tabs>
      </div>
      <ToastContainer/>
    </Layout>
  );
};
export default FocusedFridays;
