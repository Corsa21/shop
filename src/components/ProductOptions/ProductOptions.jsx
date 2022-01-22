import './ProductOptions.scss';

export default function ProductOptions() {
  return (
    <div className="productOptions">
        <div className="productOptions__title">Select Size</div>
        <div className="productOptions__btns">
            <button className="productOptions__btnSize">S</button>
            <button className="productOptions__btnSize">M</button>
            <button className="productOptions__btnSize">L</button>
            <button className="productOptions__btnSize">XL</button>
            <button className="productOptions__btnSize">2XL</button>
            <button className="productOptions__btnSize">3XL</button>
        </div>
        <div className="productOptions__title">Select Color</div>
        <div className="productOptions__btnsColors">
            <button className="productOptions__btnColor productOptions__btnColor_black">Black</button>
            <button className="productOptions__btnColor productOptions__btnColor_white">White</button>
        </div>
        <button className="productOptions__btn">
        <img src="/basket2.svg" alt="add to cart" />
        Add To Cart
        </button>
    </div>
    
  );
}
