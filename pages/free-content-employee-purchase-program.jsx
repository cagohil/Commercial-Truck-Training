import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const EmployeePurchaseProgram = () => {
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
      <PageBanner pageName={"Employee Purchase Program"} />
      {/* Page Banner End */}


      <div className="container">
        <div className="section-title text-area text-start m-75 wow fadeInUp delay-0-2s">
          <p>In our training we have examined over 30 employee purchase programs that are being utilized by commercial vehicle departments nationally. This report takes the best practices of each program and combines them to give you an advantage in the marketplace. When putting together your program, follow these guidelines and your success rate will soar!</p>

          <br />
          <h6>Marketing Materials</h6>
          <p>Your marketing materials should be first class. If you do not create a look that is extremely professional, companies will not use your program. When creating your marketing materials, here are a few marketing tips:</p>

          <ul>
            <li>1. Go glossy! It gives your materials a rich look that says “VIP”! People want to feel as if they are a part of something special. Make sure your materials are special!
            </li>
            <li>2. Your cover should be carefully worded. Here are a few examples that you could use:
              <i className="far fa-long-arrow-right" /> Preferred Platinum Program <br />
              <i className="far fa-long-arrow-right" /> VIP Client Program <br />
              <i className="far fa-long-arrow-right" /> You Are Special! <br />
              <i className="far fa-long-arrow-right" /> Elite Vehicle Program <br />
            </li>
            <li>3. Load your marketing piece with benefits such as: <br />
              <i className="far fa-long-arrow-right" /> Exclusive discount vehicle pricing<br />
              <i className="far fa-long-arrow-right" /> Preferred service on dealership visits<br />
              <i className="far fa-long-arrow-right" /> Off-site product demonstrations at home or work!<br />
              <i className="far fa-long-arrow-right" /> Complimentary vehicle appraisal<br />
              <i className="far fa-long-arrow-right" /> 10% discount on all service and parts<br />
              <i className="far fa-long-arrow-right" /> Special notifications on new vehicles<br />
              <i className="far fa-long-arrow-right" /> Special notifications on all sales and incentives<br />
              <i className="far fa-long-arrow-right" /> Free newsletter on tips and ideas for your vehicle<br />
              <i className="far fa-long-arrow-right" /> Invitations to all dealer events<br />
              <i className="far fa-long-arrow-right" /> Referral incentive program<br />
            </li>
          </ul>

          <p>
            There are several marketing pieces you will need to make the program successful:
          </p>
          <ul>
            <li>1. Program glossy handout: This is your main piece (see example provided). This sells your program and must be first class. It should have cut inserts to put the sales consultant’s card and a special plastic card that is their identification card with a special number.</li><br />
            <li>2. Sign up form: This is a critical piece! It allows you to keep a record of everyone who has a program card. It gives you all their personal information and allows you to follow up with them regarding needs or requests. It should be a two-form carbonless paper. The client keeps a copy and you keep a copy to input into your computer. This form allows you to know everyone whom is enrolled in the program and to advertise to them in a very low-key way. It cannot be stressed enough how important this single form is to the success of the program. (See attached example)</li><br />
            <li>3. Introductory letter: This letter will go to business owners and human resource specialists in various companies. It introduces the program in an exciting and informative way and lets the contact know you will be calling to introduce the free program.</li><br />
            <li>4. Follow-up letter: You want to thank the client after the fact and give the details of your meeting. The letter will be followed with a phone contact.</li><br />
          </ul>


          <h6>Implementation of the Program</h6>
          <p>Step One: Prepare a script for all sales consultants regarding what you want them to say on telephone when prospecting as well as face-to-face meetings. Do no leave this to chance, have very defined words that the sales consultants are to use. They should not deviate from your script. Improve it as you go and take feedback from sales consultants on how to improve your script. </p>

          <p>Step Two: Train your entire dealership in how the program works and what they should be looking for when a customer calls or comes in. The worst thing that can happen is when a VIP customer comes to the dealership and the person they talk to has no idea of how the program works or if it even exists! Make the customer feel special and give them true VIP treatment. </p>

          <p>Step Three: Make sure all sales consultants in both retail and commercial know how the program works and if someone comes to the dealership that is a member, they are given to the proper sales person. It is preferred that as part of the program, they call first to set up an appointment with the right sales consultant. </p>

          <p>Step Four: Go to all your current commercial accounts and offer the program to their employees first. Your next step is on all sales calls, make sure the sales consultants have the program materials available. </p>

          <p>Step Five: As companies sign up for your program, ask to meet with employees to explain the program and sign them up on site. This can be through a meeting or a table set up in the break room of the company. Important: An individual does not get a program card until he or she completes the sign up sheet! </p>

          <p>Step Six: Stay in contact with the human resources person or the contact person in the company to let them know when employees are taking advantage of the program. This will help you keep the program going. When they hire a new employee, ask to personally meet the person to sign him or her up for the service.</p> <br />

          <h6>Employee Purchase Brochure</h6>
          <p>That is the program! It is simple to implement and should not only give you a steady stream of new clients, but gives you a backdoor into commercial businesses that are not ready to buy commercial vehicles. This is a powerful program that works exceptionally well.</p>
        </div>
      </div>

    </Layout>
  );
};
export default EmployeePurchaseProgram;
