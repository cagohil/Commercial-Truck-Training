import Link from "next/link";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li className="dropdown">
        <Link legacyBehavior href="/">
        HOME
        </Link>
      </li>

      <li className="dropdown">
        <a href="#">SERVICES</a>
        <ul>
          <li>
            <Link legacyBehavior href="services-consulting" >
            CONSULTING
            </Link>
          </li>
          <li className="dropdown">
            <Link legacyBehavior href="services-ultimate-boot-camp">
            ULTIMATE BOOT CAMP
            </Link>
            
            <ul>
              {/* <li>
                <Link legacyBehavior href="ubc-virginia-beach">
                VIRGINIA BEACH
                </Link>
              </li> */}
              <li>
                <Link legacyBehavior href="ubc-kansas-city">
                KANSAS CITY
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-orlando">
                ORLANDO
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-salt-lake-city">
                SALT LAKE CITY
                </Link>
              </li>
              {/* <li>
                <Link legacyBehavior href="ubc-ny-nj-or-boston">
                NY/NJ OR BOSTON
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-mpls-st-paul">
                MPLS/ST PAUL
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-toronto">
                TORONTO
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-seattle">
                SEATTLE
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-honolulu">
                HONOLULU
                </Link>
              </li> */}
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <Link legacyBehavior href="regional-boot-camp">
            REGIONAL BOOT CAMPS
            </Link>
          </li>
          <li className="dropdown">
            <Link legacyBehavior href="services-champions-club">
            CHAMPIONS CLUB
            </Link>
            {/* <ul>
              <li>
                <Link legacyBehavior href="cc-dynasty-club">
                DYNASTY CLUB
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="cc-recruiting-and-hiring">
                RECRUITING AND HIRING
                </Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div> */}
          </li>
          <li>
            <Link legacyBehavior href="services-focused-fridays">
            FOCUSED FRIDAYS
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="newsletters">
            MARKETING SERVICES
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <Link legacyBehavior href="#">
         MEMBERS AREA
        </Link>
        <ul>
          <li>
            <Link legacyBehavior href="#">
            LOGIN
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
            REGISTER
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <a href="#">FREE CONTENT</a>
        <ul>
          <li>
            <Link legacyBehavior href="free-content-35-prospecting-ideas">
            35 PROSPECTING IDEAS
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-daily-manager-checklist">
              DAILY MANAGER CHECKLIST
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-employee-purchase-program">
            EMPLOYEE PURCHASE PROGRAM
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-if-it-were-me">
            IF IT WERE ME
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-quick-question-skill-guide">
              QUICK QUESTION SKILL GUIDE
            </Link>
          </li>
          <li className="dropdown">
            <Link legacyBehavior href="free-content-resources">
            RESOURCES
            </Link>
            <ul>
            <li>
                       <Link legacyBehavior href="reso-one-nexus-group">
                       ONE NEXUS GROUP
                       </Link>
                     </li>
                     <li>
                       <Link legacyBehavior href="reso-commercial-truck-trader">
                       COMMERCIAL TRUCK TRADER
                       </Link>
                     </li>
                     <li>
                       <Link legacyBehavior href="reso-work-truck-solutions">
                       WORK TRUCK SOLUTIONS
                       </Link>
                     </li>
                     <li>
                       <Link legacyBehavior href="reso-ally-financial">
                       ALLY FINANCIAL
                       </Link>
                     </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <Link legacyBehavior href="free-content-testimonials">
            TESTIMONIALS
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <Link legacyBehavior href="staff">STAFF</Link>
        <ul>
          <li>
            <Link legacyBehavior href="staff-will-brogan">
            WILL BROGAN
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="staff-ken-taylor">
            KEN TAYLOR
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="staff-one-nexus-group">
            ONE NEXUS GROUP
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <a href="#">SOCIAL</a>
        <ul>
          <li>
            <a target="_blank" href="https://www.facebook.com/CommercialTruckTraining/">
            FACEBOOK
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UCLGeCxEYgIh-yQcW1l1Kocw">
            YOUTUBE
            </a>
          </li>
          <li className="dropdown">
            <a target="_blank" href="https://www.linkedin.com/company/commercial-truck-training">
            LINKEDIN
            </a>
            <ul className="list">
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/ken-taylor-748b1b6/">
                LINKEDIN KEN TAYLOR
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/will-brogan-b6890545/">
                LINKEDIN WILL BROGAN
                </a>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/commercialtrucktraining/">
            INSTAGRAM
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.tiktok.com/@kentaylorctt">
            TIK TOK
            </a>
          </li>
          <li>
            <a target="_blank" href="https://commercialtrucktraining.us17.list-manage.com/subscribe?u=ba2939c0e3bfe7fee7864694d&id=ef82e4d19b">
            NEWSLETTER
            </a>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>

    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li>
        <Link legacyBehavior href="/">
        HOME
        </Link>
      </li>

      <li className="dropdown">
        <a href="#">SERVICES</a>
        <ul style={activeLi("Services")}>
          <li>
            <Link legacyBehavior href="services-consulting">
            CONSULTING
            </Link>
          </li>

          <li className="dropdown">
            <Link legacyBehavior href="services-ultimate-boot-camp">
            ULTIMATE BOOT CAMP
            </Link>
            <ul style={multiMenuActiveLi("ubc")}>
            {/* <li>
                <Link legacyBehavior href="ubc-virginia-beach">
                VIRGINIA BEACH
                </Link>
              </li> */}
              <li>
                <Link legacyBehavior href="ubc-kansas-city">
                KANSAS CITY
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-orlando">
                ORLANDO
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-salt-lake-city">
                SALT LAKE CITY
                </Link>
              </li>
              {/* <li>
                <Link legacyBehavior href="ubc-ny-nj-or-boston">
                NY/NJ OR BOSTON
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-mpls-st-paul">
                MPLS/ST PAUL
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-toronto">
                TORONTO
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-seattle">
                SEATTLE
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="ubc-honolulu">
                HONOLULU
                </Link>
              </li> */}
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("ubc")}
            >
              <span className="far fa-plus" />
            </div>
          </li>

          <li>
            <Link legacyBehavior href="regional-boot-camp">
            REGIONAL BOOT CAMPS
            </Link>
          </li>
          
          <li className="dropdown">
            <Link legacyBehavior href="services-champions-club">
            CHAMPIONS CLUB
            </Link>
            {/* <ul style={multiMenuActiveLi("champions")}>
            <li>
                <Link legacyBehavior href="cc-dynasty-club">
                DYNASTY CLUB
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="cc-recruiting-and-hiring">
                RECRUITING AND HIRING
                </Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn" onClick={() => multiMenuSet("champions")}>
              <span className="far fa-plus" />
            </div> */}
          </li>

          <li>
            <Link legacyBehavior href="services-focused-fridays">
            FOCUSED FRIDAYS
            </Link>
          </li>

          <li>
            <Link legacyBehavior href="newsletters">
            MARKETING SERVICES
            </Link>
          </li>

        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Services")}>
          <span className="far fa-plus" />
        </div>
      </li>


      <li className="dropdown">
        <Link legacyBehavior href="#">
        MEMBERS AREA
        </Link>
        <ul style={activeLi("member")}>
          <li>
            <Link legacyBehavior href="#" >
            LOGIN
            </Link>
          </li>
          <li><Link legacyBehavior href="#">
          REGISTER
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("member")}>
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <a href="#">FREE CONTENT</a>
        <ul style={activeLi("Free Content")}>
          <li>
            <Link legacyBehavior href="free-content-35-prospecting-ideas">
            35 PROSPECTING IDEAS
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-daily-manager-checklist">
              DAILY MANAGER CHECKLIST
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-employee-purchase-program">
            EMPLOYEE PURCHASE PROGRAM
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-if-it-were-me">
            IF IT WERE ME
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="free-content-quick-question-skill-guide">
              QUICK QUESTION SKILL GUIDE
            </Link>
          </li>
          <li className="dropdown">
            <Link legacyBehavior href="free-content-resources">
            RESOURCES
            </Link>
              <ul style={multiMenuActiveLi("resource")}>
              <li>
                       <Link legacyBehavior href="reso-one-nexus-group">
                       ONE NEXUS GROUP
                       </Link>
                     </li>
                     <li>
                       <Link legacyBehavior href="reso-commercial-truck-trader">
                       COMMERCIAL TRUCK TRADER
                       </Link>
                     </li>
                     <li>
                       <Link legacyBehavior href="reso-work-truck-solutions">
                       WORK TRUCK SOLUTIONS
                       </Link>
                     </li>
                     <li>
                       <Link legacyBehavior href="reso-ally-financial">
                       ALLY FINANCIAL
                       </Link>
                     </li>
              </ul>
                 <div className="dropdown-btn" onClick={() => multiMenuSet("resource")}>
                      <span className="far fa-plus" />
                 </div>
          </li>
          <li>
            <Link legacyBehavior href="free-content-testimonials">
            TESTIMONIALS
            </Link>
          </li>
        </ul>
        <div
          className="dropdown-btn"
          onClick={() => activeMenuSet("Free Content")}
        >
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <a href="#">STAFF</a>
        <ul style={activeLi("Staff")}>
        <li>
            <Link legacyBehavior href="staff-will-brogan">
            WILL BROGAN
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="staff-ken-taylor">
            KEN TAYLOR
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="staff-one-nexus-group">
            ONE NEXUS GROUP
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Staff")}>
          <span className="far fa-plus" />
        </div>
      </li>

      <li className="dropdown">
        <a href="#">SOCIAL</a>
        <ul style={activeLi("Social")}>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/CommercialTruckTraining/"
            >
              FACEBOOK
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCLGeCxEYgIh-yQcW1l1Kocw"
            >
              YOUTUBE
            </a>
          </li>
          <li className="dropdown">
            <a href="https://www.linkedin.com/company/commercial-truck-training">
            LINKEDIN
            </a>
            <ul style={multiMenuActiveLi("Products")}>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ken-taylor-748b1b6/"
                >
                  LINKEDIN KEN TAYLOR
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/will-brogan-b6890545/"
                >
                  LINKEDIN WILL BROGAN
                </a>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("Products")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/commercialtrucktraining/"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="#"
            >
              TIK TOK
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="#"
            >
              NEWSLETTER
            </a>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Social")}>
          <span className="far fa-plus" />
        </div>
      </li>

      

      
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};
