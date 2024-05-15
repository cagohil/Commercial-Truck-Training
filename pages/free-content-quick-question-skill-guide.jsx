import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const QuickQuestionSkillGuide = () => {
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
      <PageBanner pageName={"Quick Question Skill Guide"} />
      {/* Page Banner End */}


      <div className="container">
        <div className="section-title text-area text-start m-75 wow fadeInUp delay-0-2s">
          <h6>The following guide will help you in planning sales calls that focus on gathering information from the client rather than dominating the sales call with product presentations. The questions are divided according to the various phases of the sales call, and are meant to trigger your thought process and improve the quality of your sales calls.</h6>

          <ul>
            <li>1. What is my main reason for calling on this account today?<br />
              <i className="far fa-long-arrow-right" /> Get a list of businesses that use your parts department! Again, stop by to do a customer service follow up and thank you call. <br />
              <i className="far fa-long-arrow-right" /> What specific goal do I want to accomplish?<br />
              <i className="far fa-long-arrow-right" /> Have they already expressed specific needs that my product or service can meet?<br />
              <i className="far fa-long-arrow-right" /> What happened on the last sales call on this client and how can I build off that information?<br />
              <i className="far fa-long-arrow-right" /> Do I know all the decision makers and their personalities?<br />
              <i className="far fa-long-arrow-right" /> Do I know each decision maker’s buying mode?<br />
              <i className="far fa-long-arrow-right" /> Is today’s plan built around this information?<br />
            </li>
            <br />
            <li>2. Opening the sales call:<br />
              <i className="far fa-long-arrow-right" /> “The last time we met you said…(review a need they expressed that matches your product capability)…Is that still the case? If the answer is yes, move to the next phase of this guide. If that need no longer exists, ask…<br />
              <i className="far fa-long-arrow-right" /> “Is there another need that has become more urgent?” (Usually, there is a new need. Give them time to explain the need and then move to the next phase of this guide. Ask as many questions about the new need as possible.)<br />
              <i className="far fa-long-arrow-right" /> (New Call) “Thanks for taking the time to meet with me. My purpose for being here is to learn more about your company and discover if there are ways we might me able to help you increase your profitability or save you time in the loan process. Would that be helpful?”<br />
              <i className="far fa-long-arrow-right" /> (New Call) “Thanks for meeting with me. I’m not here to sell you on products and service we offer, I’m here to gain an understanding of your business and see if there are ways we can help support your efforts. If I can’t help you, I certainly don’t want to waste your time.” Does that make sense?” (When they say yes, begin learning about their business through a questioning process.)<br />
            </li>
            <br />
            <li>3. Developing the sales call:<br />
              <i className="far fa-long-arrow-right" /> Focus on questions that allow the client or prospect to describe your product or service such as: “If there were a specific product or service that could meet your needs in this area, what features would you look for?” This allows the potential for a product or service match. If they describe something that your product or service cannot match, you may want to take a different path or focus on a different product or service. The critical point is, don’t just describe your product or service and risk a poor fit.<br />

              <i className="far fa-long-arrow-right" /> You can also focus on “new information” questions at this point. These are questions designed to gather information you did not previously know. In their simplest form they are who, what, when, why, and how questions. Examples would be: “what are your goals for next year?” “When do you expect to add additional staff?” “How much business did you do last month?” “What are some of the challenges you anticipate next year?”<br />

              <i className="far fa-long-arrow-right" /> Another great questioning skill is “Problem Expansion.” You ask about problems the client or prospect is experiencing and then expand the problem in their mind. It helps them move toward change when the problem appears bigger than they originally thought. Here is an example of problem expansion:<br />
            </li>
          </ul>
          <br />

          <p>
            Salesperson: “You mentioned that you had a problem with getting service after hours, not to mention losing business while your vehicle is off the road.”<br />
            Prospect: “Yes, it is an inconvenience, but we can live with it.”<br />
            Salesperson: “How often do you have a circumstance where you would need to get serviced quickly but can’t?”<br />
            Prospect: “About three times a month!”<br />
            Salesperson: “How much time does it take out of your teams’ work day?”<br />
            Prospect: “Probably about three hours each.”<br />
            Salesperson: “So you lose 9 hours per month of productivity or about 108 hours a year which is pushing three full work weeks.”<br />
            Prospect: “I never thought about it that way! That’s a lot of time!”<br />
            Salesperson: “You’re right, time you could use for more important tasks.”<br />
            Salesperson: “Does this ever create stress from your customers?”<br />
            Prospect: “Yes, I could tell you some horror stories!”<br />
          </p>



          <p>You can see how this works. What the client or prospect felt was insignificant can become very significant if we expand their thinking. </p>

          <ul>
            <li>2. Once you have hit a “hot button”, change your focus on how the client or prospect feels. These are called emotional questions. They are very simple questions. Here are a few examples: “How do you feel about the impact of that change on your company?” “How will it affect you personally?” “What is your personal opinion about the change?” “What do you think about the situation?” Key words are feel, think, opinion, and affect. When a client or prospect responds emotionally, he or she is giving you personal needs and problems. Your solution should not only fit the situation and the company, but must also fit the individual involved or you will have a difficult time progressing the sales process. Once you have positive feedback on the solutions you offered, you are ready to move to the closing phase of the sale and the questioning process that goes with the close.

            </li>
            <br />
            <li>4. The closing phase: Most sales professionals have difficulty with this phase due to fear of rejection. It should be natural and the client or prospect should be an active participant in the process.<br />
              <i className="far fa-long-arrow-right" /> The summary- This is a preparation stage for the closing. You simply review what was most important to the client and ask a verification question after your review such as: “Is that accurate?” “Is that correct?” “Does that summarize what you are looking for?” When the client or prospect agrees, you can begin closing. If the client or prospect does not agree, you can ask clarifying questions, such as: “Would you mind sharing with me more specifically what you are looking for?” or “What are your concerns?” or “I want to make sure I know your specific needs, would you mind sharing with me what you are looking for?”<br />
              <i className="far fa-long-arrow-right" /> The closing- The best closes are simple, non-threatening, and allow the client or prospect to participate in the process. Let’s look at two simple closes that meet these criteria:<br />
              {" "}1.“What’s our next step?” The client or prospect can now tell you how they want to proceed or will stop the process if they are unsure. <br />
              2.“How would you like to proceed?” <br />
              • You can also use an assumptive close by asking first, “Could I outline a few steps we could take to accomplish the things we discussed today?” You are asking permission to describe a plan of action to implement your solution. As soon as the client says yes, you can start your close! <br />
              3. With these types of closes, you always live to fight another day. High pressure closes in today’s sales environment can be very detrimental in the more complex selling situation. The client will actually begin to avoid you or not take your calls.
            </li>
          </ul>

        </div>
      </div>

    </Layout>
  );
};
export default QuickQuestionSkillGuide;
