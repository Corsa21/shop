import SubscriptionList from "../SubscriptionList/SubscriptionList.jsx";
import Quote from "../Quote/Quote.jsx";

import './Feedback.scss';


export default function Feedback() {
  return (
    <div className="feedbackList">
        <div className="feedback">
        <Quote/>
        <SubscriptionList/>
        </div>
    </div>
  );
}
