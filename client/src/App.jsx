import './App.css';
import NewProductForm from './components/NewProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/boostrap.min.css';
import React, {useState} from 'react';

function App() {
  let [newProductAdded, setNewProductAdded] = useState(false);

  return (
    <BrowserRouter>
      <div className='App container'>
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path= '/'>
            <NewProductForm newProductAdded={newProductAdded} setNewProductAdded={setNewProductAdded}></NewProductForm>
            <hr />
            <AllProducts newProductAdded={newProductAdded}></AllProducts>
          </Route>
          <Route exact path = '/products/:_id'>
            <OneProduct></OneProduct>
          </Route>
          <Route exact path = '/products/edit/:_id'>
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;