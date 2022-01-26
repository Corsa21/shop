import react, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import HeaderList from './components/HeaderList/HeaderList';
import AdvantageList from './components/AdvantageList/AdvantageList.jsx';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog.jsx'
import Product from './components/Product/Product';



function App() {  
  return (
    <div className="App">
     
      <HeaderList/>
      <Router>
        <Switch>
          <Route exact path="/" component={Catalog}/>
          <Route path="/product" component={Product}/>
        </Switch>  
      </Router> 
      <Footer/>      
    </div>
  );
}

export default App;
