import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout footer={5}>
      {/* Hero Section Start */}
      <section
        className="hero-area-two pt-170 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="section-title mb-30 wow fadeInUp delay-0-2s">
            <span className="sub-title"> COMMERCIAL TRUCK TRAINING</span>
          </div>
          {/* <span className="sub-title mb-15">THE COMMERCIAL TRUCK TRAINING</span> */}
          <div className="hero-content wow fadeInLeft delay-0-2s">
            <h2>YOUR SINGLE SOURCE TO GROW YOUR SALES!</h2>
          </div>
          <div className="hero-content wow fadeInLeft delay-0-2s pt-15">
            <h5>
              <span>
                America’s #1 Commercial & Fleet Dealership Training Program!{" "}
              </span>
            </h5>
          </div>
          <br />
          <div className="row align-items-center justify-content-start">
            {/* <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam reme aperiam eaque
                  abillo inventore
                </p>
                <img
                  className="mt-20"
                  src="assets/images/hero/arrow.png"
                  alt="Arrow"
                />
                <div className="authors-text mt-45">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">100+ Popular Clients</span>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <img src="assets/images/hero/hero-two.jpg" alt="Hero" />
              </div>
            </div> */}
            {/* <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="/about">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="/about">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div> */}
            <div className="container-fluid">
              <div className="hero-bottom-image">
                <img src="assets/images/hero/hero-main.jpg" alt="Hero" />
                <div className="hero-social">
                  <a href="https://www.facebook.com/CommercialTruckTraining/">
                    <i className="fab fa-facebook-f" /> <span>Facebook</span>
                  </a>
                  <a href="https://www.youtube.com/channel/UCLGeCxEYgIh-yQcW1l1Kocw">
                    <i className="fab fa-youtube" /> <span>YouTube</span>
                  </a>
                  <a href="https://www.linkedin.com/company/commercial-truck-training">
                    <i className="fab fa-linkedin" /> <span>Linkedin</span>
                  </a>
                  <a href="https://www.instagram.com/commercialtrucktraining/">
                    <i className="fab fa-instagram" /> <span>Instagram</span>
                  </a>
                  <a href="https://www.tiktok.com/@kentaylorctt">
                    <i class="fab fa-tiktok"></i> <span>Tiktok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Us Area start */}
      <section className="about-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>ABOUT COMMERCIAL TRUCK TRAINING</h2>
                </div>
                <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                  <p>
                    Welcome to the most complete independent commercial and
                    fleet sales training site in existence! The training and
                    materials on this site are a compilation of nearly fifty
                    years of combined experience and the best ideas from top
                    commercial and fleet dealerships in the nation! We have
                    trained hundreds of dealerships across all of the major
                    manufacturers that have a commercial market in the United
                    States. Our programs have been used on national, regional,
                    and individual dealership levels to achieve ultimate
                    commercial success!
                  </p>

                  <a href="https://commercialtrucktraining.us17.list-manage.com/subscribe?u=ba2939c0e3bfe7fee7864694d&id=ef82e4d19b">
                    <button
                      className="theme-btn style-two mt-30 wow fadeInUp delay-0-2s animated"
                      style={{ borderRadius: "10px" }}
                    >
                      News Letters
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-50">
              <div className="image-border-shape wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-image-shape.jpg"
                  alt="About Image Shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}

      {/* Video Area start */}
      <div className="video-area-two rel z-1 rpt-70 pt-70">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">THE ULTIMATE BOOT CAMP</span>
            <h2>"AN INSIDE LOOK"</h2>
          </div>
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=XkaKfSNeFBs"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}

      {/* Service Style Four start */}
      {/* <section
        className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>We Provide Amazing Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-development" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-mobile-development" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Mobile Application</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service2.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-brainstorming" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Team Agumentation</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service3.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-brainstorming" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Design &amp; Branding</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service4.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-abstract" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>React Js Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service5.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-ux" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Front-end development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service6.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-optimization" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Jamstack Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service7.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-goal" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>MVP Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service8.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Service Style Four end */}

      {/* Team Area start */}
      <section
        className="team-page-area pt-130 rpt-100 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">OUR TEAM</span>
                <p>
                  Commercial Truck Training will provide the best support and
                  training in order to give our clients a powerful advantage in
                  the marketplace. Our customers will be lifetime partners!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/team/team-2.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>KEN TAYLOR</h4>
                  <span>FOUNDER, COUNSULTANT</span>
                  <Link legacyBehavior href="/staff-ken-taylor">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/staff-ken-taylor">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  {/* <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/team/outer-team.jpg"
                    alt="Team Member"
                    height={256}
                    width={410}
                  />
                </div>
                <div className="content">
                  <h4>WILL BROGAN</h4>
                  <span>CTT STRATEGIST</span>
                  <Link legacyBehavior href="/staff-will-brogan">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/staff-will-brogan">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  {/* <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/team/team-1.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>James V. Decastro</h4>
                  <span>Senior Marketer</span>
                  <Link legacyBehavior href="#">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="#">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  {/* <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}

      {/* Testimonial Area start */}
      <section className="testimonial-section pt-80 pb-70 rpt-90 rpb-70">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-30 wow fadeInUp delay-0-2s">
                <span className="sub-title">Testimonial</span>
              </div>
              <div className="testimonial-one-right-part">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> When we brought them in
                        for our seminars, I got so many compliments about Ken
                        and Will from the dealers, managers, and dealer council.
                        It is absolutely the best I have ever seen! We really
                        raised the bar, thank you Commercial Truck Training!
                        Where were you when I started in this business?{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer" style={{marginTop:"80px"}}>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Mike Kennedy</h4>
                          <span className="designation">
                            Manager of Retail Development– Isuzu Commercial Truck 
                           
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span>I have worked with Ken
                        since 2001. You will not find a better sales trainer.
                        Ken’s system is simple and clear: no gimmicks, no
                        tricks. Ken’s system truly builds customers for life.{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer "style={{marginTop:"170px"}}>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info mt">
                          <h4>Keith Couch</h4>
                          <span className="designation">
                            Rush Truck Center’s #1 Nationwide Salesperson
                          </span>
                        </div>
                      </div>
                      {/* <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span>Great program Ken put
                        on! Lots of information that’s very valuable… good tips,
                        techniques, and processes that have proven to be very
                        successful. I would recommend it highly to anybody,
                        whether you’re new to the business of have been in it
                        for years. It’s good stuff to take back with you. Ken’s
                        a great speaker, he’s a relationship and networking
                        artist! <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer" style={{paddingTop:"30px"}}>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Weston Stanford</h4>
                          <span className="designation">
                            Executive Vice President of Les Stanford Chevrolet{" "}
                          </span>
                        </div>
                      </div>
                      {/* <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> “The Ultimate Boot Camp
                        was a great experience; I learned a lot! They were
                        really well-prepared and helped me understand all the
                        different pieces that we need to put in place to make
                        our dealership group successful. Now we have an
                        actionable plan to take home and work through with our
                        team, so I can’t thank them enough for all the help
                        these last couple days. We look forward to being
                        successful in future, so thank you Ken and Will!{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Bryce Clary</h4>
                          <span className="designation">
                            Owner of Bud Clary Auto Group{" "}
                          </span>
                        </div>
                      </div>
                      {/* <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-50 rmt-40 wow fadeInUp delay-0-2s justify-content-center">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
    </Layout>
  );
};
export default Index;
