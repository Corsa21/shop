import Advantage from '../Advantage/Advantage' ;
import AdvantageData from './AdvantageList.json';

import  './AdvantageList.scss';

export default function AdvantageList() {
  return (
    <div className="advantages">
        <div className="advantageList">
            {AdvantageData.map((el,i)=><Advantage key={i} image={el.image} title={el.title} text={el.text}/>)}
        </div>
    </div>
 );
}
