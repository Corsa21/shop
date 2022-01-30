import Basket from '../Basket/Basket';
import {Link} from "react-router-dom"
import './HeaderMenu.scss';
import { Router } from 'react-router-dom';

export default function HeaderMenu(props) {
  return (
    <div className="HeaderMenu">
      <nav className="HeaderMenu__list">
      <div className="HeaderMenu__item"><a href="" className="HeaderMenu__link">Home</a></div>
        <div className="HeaderMenu__item"><a href="" className="HeaderMenu__link">About</a></div>
        <div className="HeaderMenu__item"><a href="/" className="HeaderMenu__link">Products</a></div>
        <div className="HeaderMenu__item"><a href="" className="HeaderMenu__link">Contact</a></div>
      </nav> 
      <Basket basket={props.basket}/>
    </div>
  );
}

