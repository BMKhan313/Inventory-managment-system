import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SaleInvoice from './components/SaleInvoice';
import Header from './components/Header';
import Home from './components/Home';
// import SaleInvoice from './components/SaleInvoie';
import AddStockItems from './components/AddStockItems';
import ItemsList from './components/ItemsList';

const App = () =>{
 
  return(
    <BrowserRouter>
     <Header />
    <Switch> 
    <Route exact from="/" render={props => <Home {...props} /> } />
    <Route exact path="/SaleInvoice" render={ props => <SaleInvoice {...props} /> } />
    <Route exact path="/AddStockItems" render={ props => <AddStockItems {...props} /> } />
    <Route exact path="/ItemsList" render={ props => <ItemsList {...props} /> } />
    </Switch>
    </BrowserRouter>
  )

};
export default App;