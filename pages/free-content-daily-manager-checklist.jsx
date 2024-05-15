import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

const DailyManagerChecklist = () => {
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
      <PageBanner pageName={"Daily Manager Checklist"} />
      {/* Page Banner End */}

      <div className="container">
        <section className="faq-area text-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
          <div className="container">
            <div className="row align-items-center gap-100">
              <div className="col-lg-12">
                <div className="faq-content-part wow fadeInRight delay-0-2s">
                  <div className="section-title mb-20">
                    <span className="sub-title mb-15">Daily Checklist for Commercial Managers</span>
                  </div>
                  <Accordion
                    defaultActiveKey="collapse0"
                    className="accordion"
                    id="faq-accordion-two"
                  >
                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <Accordion.Toggle
                          as={"button"}
                          className={`accordion-button ${active == "collapse0" ? "" : "collapsed"}`}
                          eventKey="collapse0"
                          aria-expanded={active == "collapse0" ? "true" : "false"}
                          // onClick={() => onClick()}
                        >
                          Morning: Ask about the days plan to include the following
                        </Accordion.Toggle>
                      </h5>
                      <Accordion.Collapse eventKey="collapse0">
                        <div className="accordion-body mb-50">
                          <ul>
                            <li>1. Which calls are appointment calls lack of these is a danger sign!</li>
                            <li>2. Ask about all prospects they will be calling that day.</li>
                            <li>3. Know which calls are 1,2,3,4,or 5th call and how the accounts are developing.

                            </li>
                            <li>4. Ask questions about the decision makers (who are they, howare you building relationships, have you identified the economic, technical, user and coach decision makers)</li>
                            <li>5. How are you using your coach or do you have one…if not findone!</li>
                            <li>6. What are you goals today on progressing the sales process, particularly when selling double hung windows cincinnati oh?</li>
                          </ul>
                        </div>
                      </Accordion.Collapse>
                    </div>


                    <div className="accordion-item">
                      <h5 className="accordion-header">
                        <Accordion.Toggle
                          as={"button"}
                          className={`accordion-button ${active == "collapse1" ? "" : "collapsed"}`}
                          eventKey="collapse1"
                          aria-expanded={active == "collapse1" ? "true" : "false"}
                          // onClick={() => onClick()}
                        >
                          While they are on the road, do the following as the manager
                        </Accordion.Toggle>
                      </h5>
                      <Accordion.Collapse eventKey="collapse1">
                        <div className="accordion-body">
                          <ul>
                            <li>1. Review previous days sales reports and make notations on anything you do not understand to ask later.</li>
                            <li>2. Determine if the call was a cold call or warm/hot and prepare questions on how they plan to progress the account.</li>
                            <li>3. Make a list of upcoming association meetings and be prepared to discuss the sales consultants plan for the association. They should have done the following: <br />
                              <i className="far fa-long-arrow-right" /> Made contact with the membership director and if possible gotten <br />
                              <i className="far fa-long-arrow-right" /> Meet other vendors in the association to begin forming networks. <br />
                              <i className="far fa-long-arrow-right" /> Compiled a hit list of companies they want to do business with inthe association and plans for gaining two appointments at the next meeting. <br />
                              <i className="far fa-long-arrow-right" /> Be aware of any upcoming association events and formulate a plan to leverage the event and participate. <br />
                            </li>
                            <li>4. Mid-day: Call all sales consultants while they are on the road and ask the following: <br />
                              <i className="far fa-long-arrow-right" /> How have your sales calls gone thus far, especially when selling ? <br />
                              <i className="far fa-long-arrow-right" /> What progress have you made? <br />
                              <i className="far fa-long-arrow-right" /> Are you calling on other accounts that use heating oil passaic nj andsurround your designatedtarget to maximize your time? <br />
                              <i className="far fa-long-arrow-right" /> Do you need any help?
                            </li>
                            <li>5. When they return:</li>
                            <li>6. Review tomorrow’s plans (if they don’t have a plan, make it now!)</li>
                            <li>7. Movers review all accounts that they have contacted more than once and check the progress:</li>
                          </ul>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>
                  <br />
                  <br />
                  <p>These steps must be followed daily and all sales people must be monitored daily</p>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-shapes">
            <img
              className="shape left"
              src="assets/images/shapes/ellipse-left.png"
              alt="Shape"
            />
            <img
              className="shape right"
              src="assets/images/shapes/ellipse-right.png"
              alt="Shape"
            />
          </div>
        </section>
      </div>

    </Layout>
  );
};
export default DailyManagerChecklist;
