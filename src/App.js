import react, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import AdvantageList from './components/AdvantageList/AdvantageList.jsx';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog.jsx'
import Product from './components/Product/Product';
import {BasketContext} from "./components/Basket/Basket";


function App() {  

  const [basket, setBasket] = useState([]);


  return (
    <div className="App">
      <BasketContext.Provider value={{basket, setBasket}}>
        <Header basket={basket}/>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Catalog/>
            </Route>
            <Route path="/product" component={Product}/>
          </Switch>  
        </Router> 
        <Footer/>
      </BasketContext.Provider>
    </div>
  );
}

export default App;
