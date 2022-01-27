import './ProductBuy.scss';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductOptions from '../ProductOptions/ProductOptions';
import ProductImg from '../ProductImg/ProductImg';

export default function ProductBuy() {
  return (
    <>
      <ProductImg/>
      <div className="productBuy">
          <ProductInfo/>
          <ProductOptions/>
      </div>
    </>
  );
}
