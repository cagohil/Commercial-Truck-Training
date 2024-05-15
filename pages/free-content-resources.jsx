import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const Resources = () => {
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
      <PageBanner pageName={"Resources"} />
      {/* Page Banner End */}
      <div className="container">
        <div className="section-title text-area text-start m-75 wow fadeInUp delay-0-2s">
          <p><a href="http://act.com/" className="link2">ACT!</a> description coming soon!</p>

          <p> <a href="http://www.adriansteel.com/" className="link2">Adrian Steel</a> is committed to providing quality products highlighted by constant innovation. They are proud to be the first and only van equipment manufacturer to obtain TS16949 certification. Adrian Steel’s products are durable and reliable. Warranty claims are less than 1% of sales. The warranty covers Adrian Steel’s products for three years or 36,000 miles.</p>

          <p>
            Whether a client wants to buy or lease, <a href="https://www.ally.com/dealer/" className="link2">Ally Financial</a>  has the products to fit your customers needs. Ally Financial has products for government entities as well as large and small businesses. Products and options include: buying options, smart lease, Com TRAC open-ended lease, municipal lease purchase plans, commercial line of credit, third party guaranty, and more!
          </p>

          <p><a href="http://www.commercialtrucktrader.com/" className="link2">Commercial Truck Trader</a> description coming soon!</p>
          <p><a href="http://www.commercialvan.com/" className="link2">Commercial Van Interiors</a> description coming soon!</p>

          <p><a href="http://www.hitachicapitalamerica.com/" className="link2">Hitachi Capital America Corp.</a> is an independent, diversified leasing and financial services company providing financing to Hitachi group companies and the commercial business sector in the United States. They offer a variety of asset-based financing solutions with our business focus on truck finance, vendor finance, medical equipment finance, lease discounting, and software financing. Hitachi understand customers’ needs for a reliable financing source that knows the importance of responding quickly to opportunities. Their dedicated team of professionals, with their experience and expertise, are committed to meeting your specific financing needs.</p>

          <p> <a href="http://www.knapheide.com/" className="link2">Knapheide</a> has been in operation since 1848.  Their historical roots and rich heritage are not forgotten by the generation that leads Knapheide into success today.  The ability to evolve into new technology and new products has made them the industry leader.  Knapheide’s product lines are the most diverse they’ve ever been and they continue to identify and move into new markets to better serve distributors, fleet customers, and end users.  As we look into what the future will hold for Knapheide, they remember to never forget how hard the generations before us worked in order to keep Knapheide on top.</p>

          <p> <a href="http://www.readingbody.com/" className="link2">Reading</a> sets the benchmark by which all other truck bodies are measured. Reading’s Award Winning Aluminum Bodies are saving fuel, increasing payloads, and are backed by the best warranty. It’s a fact, you’ll find more Reading Bodies serving more industries than any other body manufacturer.
          </p>

          <p> <a href="http://www.worktrucksolutions.com/" className="link2">Work Truck Solutions</a> description coming soon!</p>
        </div>
      </div>
    </Layout>
  );
};
export default Resources;
