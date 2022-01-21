import Subscription from '../Subscription/Subscription.jsx'; 
import Form from '../Form/Form.jsx';

import './SubscriptionList.scss'

export default function SubscriptionList() {
  return (
    <div className="SubscriptionList">
        <Subscription/>
        <Form/>
    </div>
  );
}
