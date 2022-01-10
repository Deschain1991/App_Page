import './App.css';
import Products from './components/Products/Products';
import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import { Route } from 'react-router';
import OneProduct from './components/Products/add_product/one_product';
import NewProduct from './components/New-Product/NewProduct';
import Modal from './components/Products/Modal/Modal';
import Sort from './components/Products/Modal/Sort';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Route
          exact path='/'
          component={Products}
        />
        <Route
          exact path='/details/:id'
          component={NewProduct} />
        <Route
          exact path='/Modal'
          component={Modal} />
      </div >
    </BrowserRouter >
  )
}



export default App;
