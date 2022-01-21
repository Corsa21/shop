import Socials from '../Socials/Socials.jsx';
import Copy from '../Copyright/Сopyright.jsx';

import './Info.scss'

export default function Info() {
  return (
        <div className="infoList">
            <div className="info">
                <Copy/>
                <Socials/>
            </div>
        </div>
  );
}
