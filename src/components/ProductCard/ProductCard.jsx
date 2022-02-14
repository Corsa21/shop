import './ProductCard.scss';
import { Link } from "react-router-dom"
import { BasketContext } from '../Basket/Basket';
import { useContext } from 'react';



function ProductCard(props) {

    const { setBasket } = useContext(BasketContext);

    const addToBasket = (event) => {
        event.preventDefault();
        setBasket((prev) => {
            let duplicateIndex;
            const duplicate = prev.find((elem, i) => {
                if (elem.title === props.title) {
                    duplicateIndex = i;
                    return true;
                }
                return false;
            })

            if (duplicate) {
                const newBasket = [...prev];
                newBasket[duplicateIndex].count += 1;
                return newBasket;
            } else {
                const basketItem = { ...props, count: 1 };
                return prev.concat([basketItem]);
            }
        })
    }

    return (
        <Link to="/product" className="product-card">
            <img className='product-card__img' src={props.image} alt="" />
            <div className="product-card__title">{props.title}</div>
            <div className="product-card__text">{props.text}</div>
            <div className="product-card__cost">$ {props.cost}</div>
            <div className="product-card__layer">
                <button
                    onClick={addToBasket}
                    className="product-card__btn"
                >
                    <svg id="Outlined" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g id="Fill"><path d="M23.78,11,22.35,5.27A3,3,0,0,0,19.44,3H12.56A3,3,0,0,0,9.65,5.27L8.22,11H2.16L6.09,26.73A3,3,0,0,0,9,29H23a3,3,0,0,0,2.91-2.27L29.84,11ZM15,21v6H12.83L11.7,21Zm-3.67-2L10.2,13H15v6ZM17,21h3.3l-1.13,6H17Zm0-2V13h4.8l-1.13,6Zm6.83-6h3.45l-1.5,6H22.7ZM11.59,5.76a1,1,0,0,1,1-.76h6.88a1,1,0,0,1,1,.76L21.72,11H10.28ZM8.17,13,9.3,19H6.22l-1.5-6ZM8,26.24,6.72,21h3l1.12,6H9A1,1,0,0,1,8,26.24Zm15.94,0A1,1,0,0,1,23,27H21.21l1.12-6h3Z" /></g></svg>
                    Add to cart
                </button>
            </div>
        </Link>
    )
}


export default ProductCard;