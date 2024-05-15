import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const WorkTruckSolutions = () => {
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
      <PageBanner pageName={"Work Truck Solutions"} />
      {/* Page Banner End */}
      <div className="section-title text-center m-75 wow fadeInUp delay-0-2s">
                {/* <span className="sub-title mb-15">Pricing Package</span> */}
                <h2>Page in Development</h2>
              </div>
    </Layout>
  );
};
export default WorkTruckSolutions;
