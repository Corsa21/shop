import ProductCard from '../ProductCard/ProductCard';
import productData from './products.json';
import Pagination from '../Pagination/Pagination';


import './ProductList.scss';

export default function ProductList(props) {
    return (
    <div className="product-list">
        <div className='product-list__list'>
            { productData.map(
                (el, i ) => <ProductCard key={i} image={el.image} title={el.title} text={el.text} cost={el.cost}/>
            )}     
        </div>  

        <Pagination/>
    </div>
  )
}
