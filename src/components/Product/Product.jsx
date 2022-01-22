import './Product.scss';
import HeaderList from '../HeaderList/HeaderList.jsx';
import ProductBuy from '../ProductBuy/ProductBuy';
import Footer from '../Footer/Footer';

export default function Product() {
    return (
    <>
    <HeaderList/>
      <div className="product">
        <ProductBuy/>
      </div>
      <Footer/>
    </>
  )
}
