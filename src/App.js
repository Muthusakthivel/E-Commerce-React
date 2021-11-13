import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Homepage from './Pages/home';
import Shoppage from './Pages/shop';
import Productpage from './Pages/single-product';
import Cartpage from './Pages/cart';
import Checkoutpage from './Pages/checkout'

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/responsive.css';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/shop" component={Shoppage}></Route>
                    <Route path="/product" component={Productpage}></Route>
                    <Route path="/cart" component={Cartpage}></Route>
                    <Route path="/checkout" component={Checkoutpage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;
