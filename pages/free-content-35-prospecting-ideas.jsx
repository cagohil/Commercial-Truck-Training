import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const ProspectingIdeas = () => {
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
      <PageBanner pageName={"35 Prospecting Ideas"} />
      {/* Page Banner End */}
      <div className="container">
      <div className="section-title text-start m-75 wow fadeInUp delay-0-2s">
        <h5>Prospecting Ideas for Commercial Sales Consultants</h5>
        <ul>
          <li> 1. Start with your service department. Over 53% of commercial vehicles being serviced by a dealership were not bought at that dealership! Call the decision maker to do a customer service follow up and to thank him or her for the business!</li>
          <li> 2. Get a list of businesses that use your parts department! Again, stop by to do a customer service follow up and thank you call.</li>
          <li> 3. Join a networking group. One of these is www.bni.com. Business Network International is everywhere. Many commercial sales consultants get 2 to 3 leads a week from their group.</li>
          <li> 4. Use the “voice recorder” app on your smartphone to record the phone numbers of work trucks you see parked or on the road.</li>
          <li> 5. Stop by businesses in the morning when they are loading the trucks and vans. Bring donuts! (Truth serum!) Ask about decision makers.</li>
          <li> 6. Drive into a competitor’s dealership and observe what trucks are in for servicing and call that company, they might be unhappy with the dealership or the vehicle.</li>
          <li> 7. Start an employee purchase program for companies who are not yet ready to use you for their commercial vehicles.</li>
          <li> 8. Call the vendors of your dealership! You are the customer and they will talk with you!</li>
          <li> 9. Do a customer service call on your current clients and ask about the vendors who service their business. This is usually good for about 10-12 leads!</li>
          <li> 10. Keep with you at all times a list of prospects with whom you want to do business. Show this list to everyone you meet including current clients. You will be surprised who they know.</li>
          <li> 11. Trade shows: If you cannot afford a booth, buy a ticket and visit the most important prospects…the companies who have booths!</li>
          <li> 12. Get involved in sponsoring or attending community events such as Rotary or charity events. Offer to donate for every car that is bought at your dealership.</li>
          <li> 13. Chamber of Commerce: Attend meetings and make appointments! Join the “newcomers committee.” You will get a list of names of companies and individuals who are moving to your area.</li>
          <li> 14. Websites of customers and prospects: These have a wealth of information!</li>
          <li> 15. Government websites: Many states have detailed lists of companies that are required to be licensed. (Most of your prospects!)</li>
          <li> 16. Match up referrals: Always carry a list of the names and addresses of your current customers and offer to help them obtain more business by constantly referring them.</li>
          <li> 17. Develop a cold call referral script. (ask us for ours!)</li>
          <li> 18. Visit construction job sites with water, refreshments, and even coffee!</li>
          <li> 19. Eat at lunch spots where drivers stop for lunch. (Have give-a-ways!)</li>
          <li> 20. Do a convenience store customer appreciation day.</li>
          <li> 21. Do customer appreciation days in conjunction with supply companies. (plumbing supplies, electrical, lumber, etc)</li>
          <li> 22. Utilize Home Depot and Lowe’s!</li>
          <li> 23. Wrecker companies: When they get a vehicle, their customer has a need.</li>
          <li> 24. Your own body shop!</li>
          <li> 25. Do a free fleet analysis postcard mailing with follow up.</li>
          <li> 26. Call the prospect’s sales staff and network with them.</li>
          <li> 27. Youth sports programs.</li>
          <li> 28. Industry specific marketing.</li>
          <li> 29. Have a “preferred vendor” section to your website.</li>
          <li> 30. Do a local business networking campaign.</li>
          <li> 31. Dealership cookouts for invitation only businesses.</li>
          <li> 32. Deliver coupons for free oil change to local businesses.</li>
          <li> 33. Start a commercial-only newsletter.</li>
          <li> 34. Networking with property and casualty insurance agents who have commercial auto accounts.</li>
          <li> 35. Networking with benefits companies for employee purchase program.</li>
        </ul>
      </div>
      </div>


    </Layout>
  );
};
export default ProspectingIdeas;
