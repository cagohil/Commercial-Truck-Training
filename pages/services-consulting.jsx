import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";


const DealershipConsulting = () => {

  return (
    <Layout footer={5}>
      {/* Page Banner Start */}
      <PageBanner pageName={"Dealership Consulting"} />
      {/* Page Banner End */}

      <div className="container text-area">
        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <p>
            Commercial Truck Training is a consulting and training corporation that focuses exclusively on commercial and fleet sales and marketing. In 2025 the company will celebrated its 25th Anniversary in the industry, and was proudly acquired by the One Nexus Group in 2024 to complete the company’s suite of offerings in the fleet/commercial space!
          </p>
          <p>
            We have worked extensively with the following Original Equipment Manufacturers: Stellantis, Ford, General Motors, Isuzu, Nissan, and Mercedes-Benz.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className=" mt-60 mb-65 wow fadeInUp delay-0-2s">
              <p>
                We also maintain close partnerships with companies such as Ally Financial, Commercial Truck Trader, Knapheide, Work Truck Solutions, and many others.  Ken Taylor has appeared on national TV on Fox Business News and his company has consulted with over 200 dealerships nationally.
              </p>
              <h6 className="mt-35 mb-15">OVERVIEW OF THE PROGRAM</h6>
              <p>
                The Core Commercial Training and Consulting Program is a result of a combined several decades of experience consulting in the business, many hours of research, as well as interviews and relationships with the best commercial managers and sales consultants throughout the nation. Each step is designed to take your dealership to the next level in profitability and efficiency. The program is a combination of hiring, training, one-on-one coaching, and consulting that includes fieldwork, in-dealership activities, and long-distance follow-through coaching. It all depends on what your department needs!
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-70 pt-70">
              <div className="container">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Testimonial</span>
                  <h2>Pat McGrath</h2>
                </div>
                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                  <img src="assets/images/video/video-bg-three.png" alt="Video" />
                  <a href="https://www.youtube.com/watch?v=w6TnKQaB4Xc&t=4s"
                    className="mfp-iframe video-play">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {/* Video Area end */}
          </div>

          <div className=" mt-20 mb-60 wow fadeInUp delay-0-2s">
            <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
              <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
                <h6 className="mt-0 mb-15">“I don’t care if you’ve been in this business for ten years or two months, this is a MUST training system! Top notch, thru and thru. If you think you know it all, then you need to get with Ken and learn all the techniques because you will fail if you do not.” </h6>
                <p>Curt Remsing, Industry Veteran</p>
              </div>
            </div>

            <h5 className="mt-35 mb-15">STEPS IN THE PROGRAM</h5>
            <p>
              A dealership can go through the entire program or use specific modules that fit the needs of that dealership. Recommendations are made by Commercial Truck Training that provide guidance on what steps to choose.
            </p>

            <h6 className="mt-35 mb-15">Component One: </h6>
            <p>
              Once a dealership commits to excellence, Commercial Truck Training will begin with a detailed analysis of the dealership as it relates to commercial/fleet vehicles. A report is issued to the Dealer Principal or General Manager with recommendations to improve the department as a whole, as well as departments that affect commercial/fleet sales performance. This also gets shared with the Regional Representative and National Head of Fleet/Commercial for the Manufacturer!
            </p>

            <h6 className="mt-35 mb-15">Component Two (optional): </h6>
            <p>
              If a dealership wishes to hire additional candidates, One Nexus Group will provide several avenues to hire, interview, and train new candidates. The hiring and interviewing process is focused on eliminating the wrong candidates while promoting the specific skills and attitudes to be successful in commercial vehicle sales. Packages are available.
            </p>

            <h6 className="mt-35 mb-15">Component Three: </h6>
            <p>
              Actionable training for new hires and experienced sales consultants, as well as the sales manager. This training is a mixture of classroom and actual prospecting and calling on businesses. It is important to put the skills learned into immediate action and measure that action.
            </p>

            <h6 className="mt-35 mb-15">Component Four: </h6>
            <p>
              All sales consultants are set up on a specific sales call system designed by Commercial Truck Training that has been proven to work in dealerships. The sales manager is required to know this system and hold sales consultants accountable. Our staff will go into the field with sales consultants to be sure the right skills are put into action on a regular basis.
            </p>

            <h6 className="mt-35 mb-15">Component Five:  </h6>
            <p>
              Monthly follow-through is essential to keep the program on track until the right skills and habits are ingrained. This can be for a six-month to one-year period, and has proven to be invaluable to the success of the commercial program in the dealership. One of our employees will visit the dealership for two days each month to spend time with the commercial manager, make sales calls on clients and prospects, and review the current level of production.
            </p>

            <h6 className="mt-35 mb-15">Component Six  </h6>
            <p>
              E-mail and telephone contact between visits helps to insure on a weekly basis that the program is progressing successfully for the dealership. Also, a tracking system may be implemented and tracked by Commercial Truck Training so immediate adjustments can be made to drive the sales numbers. Otherwise, CRM and DMS analysis will suffice.
            </p>

            <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
              <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
                <h6 className="mt-0 mb-15">“Ken, I’d like to thank you for all you have done. We’ve grown our commercial business BIG TIME in the last five years and you’ve been a major part of that! You’ve personally shepherded and trained an enormous amount of commercial dealerships to become better at this business. You understand this business as well as anyone out there, and I want to thank you for all that you stand for.” </h6>
                <p>Ed Peper, US Vice President of GM Fleet</p>
              </div>
            </div>

            <p>
              This is a complete program that gets results. It can be used in its entirety or specific units can be adapted to the dealership needs. If you are fully committed to developing a successful commercial program, there is no other program that is as thorough and successful!
            </p>

            <p>
              Contact Ken Taylor at <a className="link2" href="tel:9045359996">(904) 535-9996</a> or <a href="mailto:ken@coachkentaylor.com">ken@coachkentaylor.com</a>
            </p>
            <p>
              or Will Brogan at  <a className="link2" href="tel:6613097773">(661) 309-7773</a> or <a href="mailto:will@commercialtrucktraining.com">will@commercialtrucktraining.com</a>
            </p>

            <p>
              Program investment is based on how many services the dealership decides to use as well as the time commitment.
            </p>

            <ul className="list-style-two">
              <li>
                <p><i className="far fa-long-arrow-right"></i> Consulting fee will be billed in advance of the visit and is due on the morning of the last day of consulting.</p>
              </li>
              <li>
                <p><i className="far fa-long-arrow-right"></i> A flat fee for travel expenses based on geographic location will be paid at booking of each visit by the dealership.</p>
              </li>
            </ul>

            <p>
              The program works best under a six-month commitment. We also have a maintenance program after the consulting period that lasts for one year, but only requires quarterly visits for two days per quarter. If you are a single franchise dealership the two-day program works well. With multiple franchises (Stellantis, Ford, GM, etc.) in some cases, it may require a three-day visit at an extra cost. The investment incudes weekly coaching both individually or as a team.
            </p>
            <p>
            We also require the sales consultants to send us weekly sales call reports. We analyze these and base our coaching calls on the information in these reports. The investment covers not only the on-site days but the coaching calls, marketing set up, and detailed analysis of the progress of the program.
            </p>
            <p>
              Just a few extra sales per month more than pay for the program but the real goal is to create a fully functional department that drives in revenue from sales, service, parts, and add on sales such as extended warranty.  The commercial automotive business has proven to be the most profitable aspect of the dealership on a per unit sale basis with higher upfront gross profit, higher service and parts dollars and a higher loyalty factor.
            </p>

            <h6 className="mt-35 mb-15">Call to Action</h6>
            <p>Will: <a href="mailto:wbrogan@nexusplc.com">wbrogan@nexusplc.com</a></p>
            <p>Colleen: <a href="mailto:colleen.good@nexusplc.com">colleen.good@nexusplc.com</a></p>
            
          </div>


        </div>
      </div>
    </Layout>
  );
};
export default DealershipConsulting;
