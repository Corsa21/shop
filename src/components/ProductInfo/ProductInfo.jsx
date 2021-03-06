import './ProductInfo.scss';

export default function ProductInfo() {
  return (
    <div className="productInfo productInfo_margin">
      <div className="productInfo__list">
        <div className="productInfo__title">Skorper Tee</div>
        <div className="productInfo__price">$145</div>
        <div className="productInfo__subtitle">Product Description</div>
        <div className="productInfo__text">This is your new favorite t-shirt for pretty much everything you do—it's light, comfy, and super-soft on the inside.</div>
        <div className="productInfo__subtitle">Material(s)</div>
        <div className="productInfo__text">100% Polyester</div>
        <div className="productInfo__img"><img src="/badges.png" alt="badges" /></div>
      </div>
    </div>
  );
}
