import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const WillBrogan = () => {
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
      <PageBanner pageName={"Will Brogan"} />
      {/* Page Banner End */}

      <section
        className="team-profile-area pt-100 rpt-80 pb-100 rpb-100 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row gap-100 pb-30 align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-55 pb-40 wow fadeInLeft delay-0-2s">
                <img src="assets/images/team/team-3.jpg" alt="Team" />
              </div>
              <div className="team-sub-title mt-0 mb-30">
                <p>13th Year in the Industry</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
                <h2>Will Brogan</h2>
                <span className="designation mb-3">VP of Operations</span>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <b className="title">Lives in</b>
                    <span className="text">
                      Jacksonville, Florida
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="content">
                    <b className="title">Email Address</b>
                    <span className="text">
                      <a href="mailto:will@commercialtrucktraining.com">will@commercialtrucktraining.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <b className="title">Phone Us</b>
                    <span className="text">
                      <a href="tel:6613097773">+1 (661) 309 7773</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p>
          Will Brogan is the Strategist for the Commercial Truck Training Division at the One Nexus Group. He has been a part of Ken Taylor & Associates since 2012, beginning his focus on the development and growth of Commercial Truck Training the following year and overseeing its transition to the One Nexus Group portfolio in 2024.
 <br /> <br />

 Will has been instrumental in streamlining Commercial Truck Training’s operations into the technology that is available today, all while keeping in touch with the core philosophy that constructed Ken Taylor & Associates, Inc. into an incredibly successful brand, the building of relationships.

          </p>


          <div className="row">
            <div className="col-lg-6">
              <div className=" mt-30 mb-65 wow fadeInUp delay-0-2s">
                <p>
                Social media, video and audio production, event management, and website operations have become strengths of our business thanks to Will’s continuous efforts in those areas. For our clients, he can assist the building process of any of those areas, as well as oversee specialized and custom support for our clients’ newsletter distributions.
                </p>
                <p>
                Will continues to lead the movement to increase our online visibility and accessibility, thanks to creations such as the Coach’s Corner video series, our available Online Training Modules, and the Tik Tok Two Minute Drill segment that have become regular entries in our content portfolio.
                </p>
                <p>
                Since 2020, Will has been the host and SME of many in-person, in-studio, and virtual speaking engagements in the U.S. and Canada in the automotive industry, both commercial/fleet and retail service, primarily for Isuzu and Nissan. He also wrote content delivered to Ford. 

                </p>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Video Area start */}
              <div className="video-area-two rel z-1 rpt-30 pt-30">
                <div className="container">
                  <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                    <img src="assets/images/video/video-bg-seven.png" alt="Video" />
                    <a href="https://www.youtube.com/watch?v=cVIjdGMYZRA&t=2s"
                      className="mfp-iframe video-play">
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Video Area end */}
            </div>
          </div>

          <p>
          An accomplished writer himself, Will has penned over 400 articles for multiple publications in the golf, athletic, mortgage, automotive, and service industries. He also wrote and produced the majority of a comprehensive collegiate athletics recruiting program that was a part of Ken Taylor & Associates, Inc. for three years and helped place over 90% of their student/athletes into four-year schools in that span, including one eventual Super Bowl Champion. Two motivational books he has written are in development, as is a children’s book he has worked on for several years with his daughter.

          </p>

          <p>
          Having played quarterback for multiple schools throughout a football career prolonged by injuries, Will attended the University of Hawai’i and later earned degrees from both California University of Pennsylvania and Minnesota State University, Mankato. Residing in Saint Augustine, Florida, with his wife Carla, the pair have a daughter named Audrey – nicknamed in our industry “The Little Boss” – and a son named Tyler. Will is a regular participant in adult baseball events throughout the country, as well as an avid golfer.

          </p>
        </div>
      </section>
    </Layout>
  );
};
export default WillBrogan;
