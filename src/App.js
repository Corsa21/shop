import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import HeaderList from './components/HeaderList/HeaderList';
import AdvantageList from './components/AdvantageList/AdvantageList.jsx';
import Footer from './components/Footer/Footer';
// import Product from './components/Product/Product';



function App() {  
  return (
    <div className="App">
     
      <HeaderList/>
      {/* <Header/>
      <Navbar/>
      <Filters/> */}
      <ProductList/>
      <AdvantageList/>
      <Footer/>
      {/* <Product/> */}
      
    </div>
  );
}

export default App;
