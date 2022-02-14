import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';
import { ReactComponent as BasketIcon } from '../../icons/basket.svg';
import './Basket.scss';


export const BasketContext = createContext();

export default function Basket(props) {

  const [open, setOpen] = useState(false);
  const { basket } = useContext(BasketContext)

  useEffect(()=>{
    console.log(basket)
  }, [basket])

  const calculateTotalPrice = useCallback(() => {
    const basketPrices = basket.map((elem)=>{
      return +elem.count * +elem.cost
    })
    let result = 0;

    basketPrices.forEach((elem)=>{
      result += elem
    })

    return result
  }, [basket])

  return (
    <div className="basket">
      <table className='basket__modal' style={{display:open ? 'block' : 'none'}}>
        
        <thead>
          <tr>
            <td>Название товара</td>
            <td>Количество</td>
            <td>Цена за штуку</td>
            <td>Итого</td>
          </tr>
        </thead>
        <tbody>
            {basket.map((elem)=>(
              <tr>
                <td>{elem.title}</td>
                <td>{elem.count}</td>
                <td>$ {elem.cost}</td>
                <td>$ {+elem.count * +elem.cost}</td>
              </tr>
            ))}
              <tr>
                <td></td>
                <td></td>
                <td>Итог:</td>
                <td>$ {calculateTotalPrice()}</td>
              </tr>
        </tbody>
      </table>
       <div className="basket__button" onClick={() => setOpen(!open)}>
        <BasketIcon />
      </div>
      {/* {open && <div className="basket__modal">
        {basket.map((el, i) => <div key={i} className="basket__item">
          <div className="basket__product">
            Name: <br /><span className='basket__name'>{el.title}</span> <br />Cost: <br /><span className='basket__cost'>{el.cost}</span>
          </div>
        </div>)}  */}
      </div>
    
  );
}
