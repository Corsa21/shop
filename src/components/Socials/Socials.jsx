import Social from '../Social/Social.jsx';
import SocialsData from './Socials.json'

import './Socials.scss';

export default function Socials() {
  return (
    <div className="socials">
        {SocialsData.map((el,i)=><Social key={i} image={el.image} />)}
    </div>
  );
}
