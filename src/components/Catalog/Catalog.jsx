import ProductList from "../ProductList/ProductList.js";
import AdvantageList from "../AdvantageList/AdvantageList.jsx";

export default function Catalog(props) {
  return (
      <div className="Catalog">
        <ProductList/>
        <AdvantageList/>
      </div>
  );
}
