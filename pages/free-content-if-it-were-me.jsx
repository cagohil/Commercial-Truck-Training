import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const IfItWereMe = () => {
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
      <PageBanner pageName={"If It Were Me"} />
      {/* Page Banner End */}


      <div className="container">
        <div className="section-title text-area text-start m-75 wow fadeInUp delay-0-2s">
          <h6>If It Were Me</h6>
          <div className="row">
            <div className="col-lg-9">
              <p>In nearly two decades working with commercial departments in well over 150 dealerships, I’ve learned a thing or two about what works and what doesn’t when a dealership makes the decision to start a commercial department.  It has gotten to the point that I know when to turn a dealership down that I know will not succeed.  This article is aimed toward any dealership who wants to create or grow a solid, successful and profitable commercial department. We’ve probably run this annually since I first wrote it in 2014, but it is also our most-read newsletter article each year, so here it is again. Please consider these components of success to create success for your dealership!</p></div>
            <div className="col-lg-3">
              <img src="assets/images/Structure200.jpg" alt="" />
            </div>
          </div>

          <br />
          <h6>CRITICAL COMPONENT 1:</h6>
          <p>It all starts with support from the top.  If the dealer and GM are getting into commercial to create a new revenue stream rather than a full-blown working department, it will never last. You will run through people, money, and patience.  A year later you will be making comments like, “this commercial stuff is not working.” One of the strongest comments I have ever heard from a dealer was in Plano, Texas by Ray Huffines.  He said, “We have to make this work, it is the future of our business.”  Now that is full commitment.  It helps that the two general managers were also committed and supported the program.  Today they are one of the most successful commercial dealerships in the nation.</p>

          <p>IF IT WERE ME:  If I were the dealer I would call a meeting of my management staff and make it clear that commercial will be a fully integrated operation that everyone will support and honor. In addition, I would have monthly meetings with my commercial manager.  Required reading for every dealer principal should be Terry Minion’s book Commercial Truck Success. Go to <a href="https://www.amazon.com/Commercial-Truck-Success-Terry-Minion/dp/1937801632/ref=sr_1_1?ie=UTF8&qid=1516743155&sr=8-1&keywords=commercial+truck+success" className="link2">Amazon.com</a>  or better, call Terry at 707-434-9967. Terry and Ryan Stone are also great at handling all your commercial website and social media needs.  They are the best.</p>


          <h6>CRITICAL COMPONENT 2: </h6>
          <p>The right people and enough people.  If your plan is to assign one person to be the commercial department, it most likely will not last.  The essence of commercial sales is meeting business owners, which means being outside the dealership and here come the barriers!  When your person is outside, often the retail sales consultants are working his or her customers and expecting “split deals” or taking the customer themselves.  This creates a multitude of problems, from numerous lost sales because the retail staff looks at the sale as a “now” sale and pressures the business owner, or you could be in for real liability issues because they don’t know the commercial product.  You just lost that person and company forever.</p>

          <p>IF IT WERE ME:  I would have a full-time commercial manager and a minimum of two sales people.  My manager needs to know sales management first and get up to speed quickly on the manufacturer’s program (GM Business Elite, FCA Business Link, Ford Commercial Vehicles, etc.).  I would prefer that my two sales people did not have commercial backgrounds or even automotive, I want them to have heavy experience in outside business-to-business sales with built-in customers, and then hold them accountable to make no less than three outside appointment calls per day just to start.  The manager holds them accountable for the activity and guess what? Sales will follow. If your sales people are not from automotive you will need an experienced commercial sales manager.</p>

          <p>A one-person department can only work if it is a pure “fleet” situation where the sales person is working through leasing companies and fleet management companies, which is the least profitable side of the business.</p>


          <h6>CRITICAL COMPONENT 3: </h6>
          <p>The right organizational tools. Too often the dealership forces the commercial department to use the retail customer relationship management software.  The problem is the system that works on the retail side doesn’t on the commercial side of the business.  I have too many stories of business development centers calling commercial customers daily to the point the customer will go somewhere else for their business.  There is a reason that top commercial departments are using CRMs like ACT or SalesForce.com.  These are designed for business-to-business selling. It is also an easy way to hold the sales people accountable.  If they don’t enter information into the CRM, you can assume they were not doing the right sales activities. Classic Chevrolet in Grapevine, Texas uses ACT and has for two decades.  Mike Stubbs, one of the best commercial managers I have ever known, uses ACT.</p>

          <p>IF IT WERE ME:  I would invest not only in a solid business-to-business CRM, but the training necessary to get the sales force up to speed quickly.  I would want the “cloud version” so it could be accessed from anywhere.  It would not hurt to have all the sales staff equipped with tablets for immediate updates and for presentation purposes.</p>


          <h6>CRITICAL COMPONENT 4: </h6>
          <p>The right inventory.  Imagine you hired a new retail sales consultant that was a superstar.  He/she shows up at the dealership to start and there are only ten units on the lot!  Don’t plan on him/her selling very many units.  Commercial inventory is critical to success.  Often the dealer that has the product wins.  The inventory should consist of true work vehicles.  A 1500 series or F250 series truck with carpet, bells, and whistles and chrome wheels is not a work truck!  A solid mix of all truck lines, vans, cab chassis, and upfitted work vehicles is necessary to get results. It can be a mixture of on the lot or bailment pool units, but you have to have the inventory if you want to sell.</p>

          <p>IF IT WERE ME:  I would have no less than three times as many work vehicles on the lot than my sales goals for each month.  If I want to sell 15 units I would have 45 units minimum between in stock and bailment pools.</p>


          <h6>CRITICAL COMPONENT 5: </h6>
          <p>The right pay plan.  The dealership will spend anywhere from $300 to $600 dollars per unit sold to drive floor traffic to the dealership, so a retail sales person can wait for an up!  No outside calls, no prospecting, just wait your turn.  If that person sells 10 units for the month, the dealership invested $3,000 to $6,000 in that sales person!  The outside commercial sales person has to go outside every day to develop business with very little marketing support, and develop business from scratch.  You can’t do it in 90 days and make a living.  What happens?  The dealership goes through four or five sales people in a year, pays a year’s worth of draws and gets no results.  Listen closely: you can’t build your sales volume in 90 days.  Top commercial dealerships know this and put the outside sales consultant on a base plus commission.</p>

          <p>IF IT WERE ME:  I would be more worried about activity than sales initially.  At a minimum, the outside sales person should be making three appointment calls per day at least four days per week, every week.  He/she should be a member of one or two trade associations and attending the meetings to get more appointments. He/she should be in a business networking group like BNI.com and working the service lanes.  I know six ways to find commercial business right in the dealership that the commercial sales consultant should be working.  I was once asked by a dealer, “How long before I will know if my commercial sales person is going to be successful?” My answer was “the first 30 days.”  If this person is performing all the outside and inside activities we demand, he/she will start selling trucks.  If they don’t do the activity in the first 30 days, they never will.  Find someone who will.</p>

          <h6>CRITICAL COMPONENT 6:  </h6>
          <p>Target marketing works!  You don’t have to spend a ton of money like on the retail side, but you do have to target market to specific segments.  Marketing should be based on what you have in stock and directed toward companies who own what you have in stock.  Don’t market vans if you don’t have vans.  There are endless ways to target market that are too numerous to mention in this article.  We send electronic newsletters out to clients and prospects for dealerships and get great results.  Why? The newsletters are targeted.  One recent newsletter got a 59% open rate (unheard of!), and a call from a customer to tell the sales consultant “great newsletter!” Numerous commercial managers and commercial sales staff have told us how effective the newsletters are in getting sales and customer responses.</p>

          <p>An essential part of my marketing program would absolutely include <a href="http://www.worktrucksolutions.com/" className="link2">Work Truck Solutions</a> and <a href="https://us17.admin.mailchimp.com/campaigns/commercialtrucktrader.com" className="link2">Commercial Truck Trader</a>. Simply put, they have built the most useful and most powerful tools I’ve seen in my time in the industry! If you work the programs correctly, you would guarantee sales every month. If it doesn’t work, it’s because the commercial staff did not use the tools properly.</p>

          <p>IF IT WERE ME:  I would have a complete marketing plan in place before I ever hired a sales person.  If you don’t know how, write me at <a href="mailto:ken@coachkentaylor.com" className="link2">ken@coachkentaylor.com</a> and I will send you a complete sample.  Great marketing in commercial sales costs very little but gets great results.</p>



          <h6>FINAL COMMENTS:  </h6>
          <p>The average upfront gross on commercial units is 3 to 4 times more profitable than retail.  With the advent of Cars.com, TrueCar.com, Cargurus, Carvana, and other portal websites, the upfront gross on retail continues to drop while commercial has remained steady.  Most of our dealerships average over $1400 upfront gross and even higher on medium duty and hard to find work trucks with unique upfits.</p>

          <p>When you truly get down to the bottom line of success, it can be summed up in one word: Relationships. The relationships are built on trust, integrity, and a passion for the business.  Now, go out and sell some trucks and vans!</p>
        </div>
      </div>

    </Layout>
  );
};
export default IfItWereMe;
