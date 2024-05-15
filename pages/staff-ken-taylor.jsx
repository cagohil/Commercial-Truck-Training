import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const KenTaylor = () => {
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
      <PageBanner pageName={"Ken Taylor"} />
      {/* Page Banner End */}

      <section
        className="team-profile-area pt-100 rpt-80 pb-100 rpb-100 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row gap-100 pb-30 align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-55 pb-40 wow fadeInLeft delay-0-2s">
                <img src="assets\images\team\team-5.jpg" alt="Team" />
              </div>
              <div className="team-sub-title mt-0 mb-30">
                <p>25th Year in the Industry</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
                <h2>Ken Taylor</h2>
                <span className="designation mb-3">Founder, President</span>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <b className="title">Lives in</b>
                    <span className="text">
                    Ponte Vedra Beach, Florida
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
                      <a href="mailto:ken@coachkentaylor.com">ken@coachkentaylor.com</a>
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
                      <a href="tel:9045359996">+1 (904) 535 9996</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p>
         Ken Taylor is known nationally as “America’s Corporate & Personal Coach.” He is the Founder and President of Ken Taylor & Associates, Inc., a training and consulting company founded in 1989 that has established a specialty in fleet and commercial automotive since the turn of the century. Commercial Truck Training, a division of “KTA”, was acquired by the One Nexus Group in 2024 as Ken heads for a well-deserved retirement. 

          </p>


          <p>
          Shortly after the turn of the century, Ken wrote the exclusive training program for sales and sales management used by General Motors Fleet and Commercial and delivered this training to GM dealerships nationally for several years. This program was the highest rated program by participants in the history of GM Common Training! In addition to training and consulting with GM, Ken’s group provides dealership-level training and consulting with a hands-on approach to developing a more highly evolved sales process. Ken has also worked with other companies in the automotive industry including The Knapheide Manufacturing Company, Ally Financial, Adrian Steel, Commercial Truck Trader, Work Truck Solutions, Royal Truck Body, and many more.
          </p>

          <p>
          Ken has also worked with the now Stellantis Corporation since the early 2000s, training their large fleet division and acting as a professional coach to more than twenty five of their top fleet and commercial personnel, and their retail management team. The program was highly praised by Chrysler management. Ken also worked closely with the BusinessLink program for small commercial. He has spoken at major events for many years to promote this program.

          <br /> <br />

          Ford, Mercedes-Benz, Nissan, and Isuzu have all also used Ken as a presenter at various events throughout the country since 2013. Ken works with dealerships who sell commercial vehicles from each of the aforementioned manufacturers, including his team’s intensive in-dealership consulting.


          <br /><br />

          Ken’s work with individual commercial dealerships has been an incredible success. By incorporating sales and marketing systems, even brand new sales consultants have been able to reach a high level of sales in less than six months! Commercial Truck Training is a culmination of hundreds of techniques and programs that give any commercial dealership the “winning edge.”

          <br /><br />
          Ken’s professional coaching program has included corporate executives, professional athletes, and NFL and college coaches. He also had the opportunity to coach 2007 Heisman Trophy winner Tim Tebow while Tebow attended Nease High School. In addition to Ken’s automotive clients, he has worked with Citi, Wells Fargo, Bank of America, Chase Manhattan, General Electric, and many others. Ken also trained the corporate executives at the PGA TOUR to prepare for speaking on national television.


          <br /><br />

          Ken has written over 2,000 articles, three dozen training programs, two books, and has been on radio and television for these programs. A special with Ken as the featured guest with Kathy Ireland on FOX Business News’ show “Worldwide Business” aired in September 2016. His latest book,  <a target="_blank" href="https://outskirtspress.com/bookstore/details/9781478762638" className="link2"> “Life Without Limits: 100 Inspirational Stories” </a>, has been a huge success.


          <br /><br />
          A graduate of the University of Richmond, Ken lettered for the Spiders football team for three seasons and was a starting defensive back for the 1971 Southern Conference Champions and Tangerine Bowl participants. Prior to starting his own company, Ken was Athletic Director at his alma mater, Orange Park High School outside of Jacksonville, Florida. Residing in Ponte Vedra Beach with his wife, Ricki, Ken has two adult children, Christi and Rick. Ken was recently also a part-time Pole Vault Coach at the University of North Florida, and has participated in Masters Track and Field events throughout the country as a contestant, capturing two National Titles.

          </p>
        </div>
      </section>
      
    </Layout>
  );
};
export default KenTaylor;
