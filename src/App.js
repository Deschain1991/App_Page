import './App.css';
import Products from './components/Products/Products';
import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import NewProduct from './components/New-Product/NewProduct';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Switch>
          <Route
            exact path='/'
            component={Products}
          />
          <Route
            exact path='/details/:id'
            component={NewProduct} />
            <Redirect to = "/" />
        </Switch>

      </div >
    </BrowserRouter >
  )
}




export default App;
