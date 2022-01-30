import React, { useState, createContext, useContext } from 'react';
import { ReactComponent as BasketIcon } from '../../icons/basket.svg';
import './Basket.scss';


export const BasketContext = createContext();

export default function Basket(props) {

    const [open, setOpen] = useState(false);
    const {basket} = useContext(BasketContext)

  return (
    <div className="basket">
        <div className="basket__button" onClick={()=>setOpen(!open)}>
            <BasketIcon/>
        </div>
        { open && <div className="basket__modal">
          {basket.map((el, i) => <div key={i} className="basket__item">
            <div className="basket__product">
             Name: <br/><span className='basket__name'>{el.title}</span> <br/>Cost: <br/><span className='basket__cost'>{el.cost}</span>
            </div>
          </div>)}
        </div>
        }


    </div>
  );
}
