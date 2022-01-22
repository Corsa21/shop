import './ProductBuy.scss';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductOptions from '../ProductOptions/ProductOptions';

export default function ProductBuy() {
  return (
    <div className="productBuy">
        <ProductInfo/>
        <ProductOptions/>
    </div>
  );
}
