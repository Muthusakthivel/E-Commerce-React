import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

class Cartpage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div class="product-big-title-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="product-bit-title text-center">
                                    <h2>Shopping Cart</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-product-area">
                    <div class="zigzag-bottom"></div>
                    <div class="container">
                        <div class="row">


                            <div class="col-md-12">
                                <div class="product-content-right">
                                    <div class="woocommerce">
                                        <form>
                                            <table cellspacing="0" class="shop_table cart">
                                                <thead>
                                                    <tr>
                                                        <th class="product-remove">&nbsp; </th>
                                                        <th class="product-thumbnail">&nbsp; </th>
                                                        <th class="product-name">Product</th>
                                                        <th class="product-price">Price</th>
                                                        <th class="product-quantity">Quantity</th>
                                                        <th class="product-subtotal">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    

                                                    <tr>

                                                        <td class="actions" colspan="6">
                                                            <div class="coupon">
                                                                <label for="coupon_code">Coupon: </label>
                                                                <input type="text" placeholder="Coupon code" value=""
                                                                    id="coupon_code" class="input-text" name="coupon_code" />
                                                                <input type="button" value="Apply Coupon" name="apply_coupon"
                                                                    class="button" />
                                                            </div>
                                                            <input type="button" value="Update Cart" name="update_cart"
                                                                class="button" />
                                                            <input type="button" value="Checkout" name="proceed"
                                                                class="checkout-button button alt wc-forward" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>

                                        <div class="cart-collaterals">





                                            <div class="cart_totals ">
                                                <h2>Cart Totals</h2>

                                                <table cellspacing="0">
                                                    <tbody>
                                                        <tr class="cart-subtotal">
                                                            <th>Cart Subtotal</th>
                                                            <td><span class="amount">£15.00</span></td>
                                                        </tr>

                                                        <tr class="shipping">
                                                            <th>Shipping and Handling</th>
                                                            <td>Free Shipping</td>
                                                        </tr>

                                                        <tr class="order-total">
                                                            <th>Order Total</th>
                                                            <td><strong><span class="amount">£15.00</span></strong> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>





                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Cartpage;