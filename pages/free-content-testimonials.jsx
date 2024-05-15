import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Testimonials = () => {
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
      <PageBanner pageName={"Testimonials"} />
      {/* Page Banner End */}

      <div className="container text-area">
        <div className="row">
          <div className="col-lg-8">
            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-40 pt-40">
              <div className="container">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Testimonial</span>
                  <h2>Pat McGrath's </h2>
                </div>
                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/video/video-bg-three.png"
                    alt="Video"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=w6TnKQaB4Xc&t=4s"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {/* Video Area end */}
          </div>
        </div>


        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              “It was a pleasure sitting through your seminar. You have
              fantastic knowledge and your insight into the commercial selling
              process is 2nd to none. I hope to see you again!”
            </h6>
            <p>-Eric Eby, Eby Ford Lincoln</p>
          </div>
        </div>

        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              “I had a great time and learned a lot from Ken Taylor this past
              week. The Ultimate Boot Camp was insightful and needed.”
            </h6>
            <p>-James Dill, Currie Motors</p>
          </div>
        </div>

        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              {" "}
              “AWESOME! It applies to all aspects of life. A program everyone
              should do!”
            </h6>
            <p>-Ross Elias, Utilimaster Corporation</p>
          </div>
        </div>

        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              {" "}
              “Very good seminar. Was glad to attend and happy General Motors is
              helping us find training to further our commercial sales.”
            </h6>
            <p>-Steve Pritzel, W-K, Inc.</p>
          </div>
        </div>

        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              {" "}
              “Information in the course will not only help you with business
              but can also transfer to the rest of your life.”
            </h6>
            <p>-Kevin Fletcher, Lakewood Ford.</p>
          </div>
        </div>

        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              {" "}
              “Amazing first-hand information from a pro. Good style of
              presentation, information to several levels of experience. I am
              using some of your information from several years ago. Great
              information, always relevant and useful! I appreciate the
              refresher course and look forward to greater success from Coach
              Ken!”
            </h6>
            <p>-Roy Mureno, Dwayne Lane’s North Cascade Ford</p>
          </div>
        </div>

        <div className=" mt-60 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-35 mb-15">
              {" "}
              “Not just information but also ideas to put into immediate use –
              social media, smart phone, etc. How things are being done today –
              all information was geared toward building relationships with
              creating value for customers.”
            </h6>
            <p>-Jack Kelleher, Kelleher Motor Company</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Ken, thanks for your time and some great insights in such a small
              time frame. You teach a lot of great stuff in the sales world, and
              kept everyone focused with great new information. Thanks again!”
            </h6>
            <p>-Gary LaSalla, Sunnyside Chevrolet</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Absolutely fantastic training, I am so ready to get started now
              thank you so much wish me luck. I actually created a Fan Page on
              Facebook, feel free to check it out, I did this trying to follow
              your steps I believe I did it right! Had a blast thank you so
              much!”
            </h6>
            <p>-Anna Remmel, Brown Daub RAM Commercial Truck Center</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “I enjoyed this and it will give me a great start and value to
              move this new business section forward.”
            </h6>
            <p>-Matt Putman, Godfrey Chevrolet Buick</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “I’m glad I came, and will have good information to share with my
              team to get moving in the right direction. Thank you!”
            </h6>
            <p>-Dan Murphy, Broadway Automotive</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Great training! I’ve been to multiple trainings and BY FAR I’m
              taking more away from this than the others combined. Keep up the
              excellent work!!”
            </h6>
            <p>-Mike Slade, Miles Chevrolet</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Great course. Should be mandatory for Business Elite sales staff!
              Thanks Ken!”
            </h6>
            <p>-Craig Barnes, Uftring Chevrolet</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “A true eye opener for us all. So much to do to grow our business,
              with such little time.”
            </h6>
            <p>-John Downs, Corrie Chevrolet</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “I’m leaving here with the feeling like I’m starting a great
              crusade. I’m not afraid to think and act in new ways that will
              turn me into a networking superstar. This was a very positive
              gathering and I appreciate the time you spent with us.”
            </h6>
            <p>-Mike Malloy, Bill Stasek Chevrolet</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Overall I’m very pleased with the content and presentation. It is
              very beneficial to me to get together with other people from other
              dealers to share ideas and what is working or not.”
            </h6>
            <p>-Ted Lenhart, Fitzpatrick Automotive</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Best, most comprehensive training I have received in my
              twenty-seven years in the business!”
            </h6>
            <p>-Bart Archer, Luther Brookdale</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “Real world examples are the backbone of the class!”
            </h6>
            <p>-Darin Trees, Suburban Chevrolet</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
              “This was the most informative and useful training I have ever
              attended!”
            </h6>
            <p>-Chris Krause, Broadway Automotive</p>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-8">
            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-40 pt-40">
              <div className="container">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Testimonial</span>
                  <h2>Ultimate Bootcamp November 2016</h2>
                </div>
                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/video/video-bg-sp.png"
                    alt="Video"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=9nZQvPWStFY&t=1s&ab_channel=KenTaylor"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {/* Video Area end */}
          </div>
        </div>
       



        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Ken was great and I would recommend him to anyone that wants to better themselves and build their success!”


            </h6>
            <p>-Tyler Janssen, Pat McGrath Chevyland

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “I have been to many of Ken’s training sessions and I always take something away from his teachings. I love his style!”


            </h6>
            <p>-Rick Mann, DeFouw Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Great Class! The content delivery is superb and the class is interactive and enjoyable.”


            </h6>
            <p>-Brad Abel, Berger Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Ken’s presentation is excellent. The material is pertinent, and the gameplan is effective.”


            </h6>
            <p>-Bill Connell, George Matick Chevrolet

</p>
          </div>
        </div>


        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “So many different actions to use! I’m really excited that I was able to attend this Boot Camp. I really believe now I will be more successful in my business.”


            </h6>
            <p>-Sue Morriss, Greg May Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “The information from Ken was refreshing and presented in an everyday, no nonsense approach. It helped me to remember ‘old’ good habits and overcome ‘new’ bad habits. Thanks Ken!”


            </h6>
            <p>-Jeff Fox, Randy Marion Automotive

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Ken, let me tell you a story. A man once told me that time was relative. I asked him what he meant, and he shared two examples. First, he mentioned that three days hanging nailed to a cross would be the most agonizing time and seem like an eternity. Then he mentioned that three days with Marilyn Monroe would go by so fast that it would make your head spin. Ken, these last two days with you was like being with Marilyn, went by too fast! Great ideas and valuable information to sell into today’s market. Thank you!”


            </h6>
            <p>-Stephen Meadows, Friendly Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Thank you for sharing your wealth of knowledge with us Ken. It was a pleasure working with you.”


            </h6>
            <p>-Dan Rosenau, Randy Curnow Buick GMC

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Very hands on, simple examples that I can apply. Thanks!”


            </h6>
            <p>-Bart Burnham, Randy Curnow Buick GMC

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “This was the best class I’ve ever attended in the auto business. Thanks Ken!”


            </h6>
            <p>-Mike Anderson, Shottenkirk Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “I have been in the auto business all my life – district manager with a manufacturer, retail sales, fleet & commercial sales, finance, leasing, general manager, etc. I have been to many training seminars, even conducted a few. While I got something out of all of them, I got more out of Ken’s program than any other by far – plus many things that we can actually use.”


            </h6>
            <p>-Gary Jacobs, Wiesner Commercial Trucks

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “I have more than twelve years in enterprise business sales, outside of the commercial truck industry, and attended LOTS of sales workshops, etc.; this was one of the best I’ve seen. Great training!”


            </h6>
            <p>-Devon Finn, Ed Bozarth Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Thank you so much for what you do. I know this is going to grow my business very quickly. I was really starting to struggle in my profession. This has given me a new ray of hope. Best seminar I’ve ever attended!”


            </h6>
            <p>-David Stockert, Hi Country Auto Group

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “This was AWESOME! Thank you so much for everything, best training I have had in six years in the business.”


            </h6>
            <p>-Eddie Saxer, Daniels Long Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Very excited I was able to attend. Lots of great info and getting back to basics. The presentation and the real world examples were very helpful. I’m looking forward to putting some of these practices in place.”


            </h6>
            <p> -Marshall Wheeler, John Hiester Chevrolet

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “Ken gave me realistic sales growth ideas that made sense to me in what I do – and can make them effective in my daily structure. Awesome job, Ken!”


            </h6>
            <p> -Joel Fort, Mountain View Nissan

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “I truly appreciate Ken’s insights as to how to more effectively pursue my clients. His knowledge and demeanor made it a pleasure to learn.”


            </h6>
            <p> -Hugh Hibbard, Sunbelt Nissan

</p>
          </div>
        </div>

        <div className=" mt-30 mb-20 wow fadeInUp delay-0-2s">
          <div className="text-left-border-three mt-60 mb-65 wow fadeInUp delay-0-2s">
            <h6 className="mt-0 mb-15">
            “I have been in sales for thirty years. This was the best course I have been to. The techniques and verbiage were especially interesting.”


            </h6>
            <p>-Jeff Bauer, Beck Auto Group

</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            {/* Video Area start */}
            <div className="video-area-two rel z-1 rpt-40 pt-40">
              <div className="container">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Testimonial</span>
                  <h2>Ultimate Bootcamp November 2016</h2>
                </div>
                <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/video/video-bg-eight.png"
                    alt="Video"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=nyV0YLrzask&ab_channel=KenTaylor"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {/* Video Area end */}
          </div>
        </div>

      </div>
    </Layout>
  );
};
export default Testimonials;
