import React, { Component } from 'react';

import Header from '../components/header';
import Imageslider from '../components/image-slider';
import Product from '../components/Product';
import ProductPreview from '../components/Product-Preview';
import Footer from '../components/Footer';


class Homepage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Imageslider></Imageslider>
                <div class="maincontent-area">
                    <div class="zigzag-bottom"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="latest-product">
                                    <h2 class="section-title">Latest Products</h2>
                                    <div class="product-carousel">
                                        <Product></Product>
                                        <Product></Product>
                                        <Product></Product>
                                        <Product></Product>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promo-area">
                    <div className="zigzag-bottom"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo1">
                                    <i className="fa fa-refresh"></i>
                                    <p>30 Days return</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo2">
                                    <i className="fa fa-truck"></i>
                                    <p>Free shipping</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo3">
                                    <i className="fa fa-lock"></i>
                                    <p>Secure payments</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo4">
                                    <i className="fa fa-gift"></i>
                                    <p>New products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-widget-area">
                    <div class="zigzag-bottom"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="single-product-widget">
                                    <h2 class="product-wid-title">Top Sellers</h2>
                                    <a href="" class="wid-view-more">View All</a>
                                    <ProductPreview></ProductPreview>
                                    <ProductPreview></ProductPreview>
                                    <ProductPreview></ProductPreview>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product-widget">
                                    <h2 class="product-wid-title">Recently Viewed</h2>
                                    <a href="#" class="wid-view-more">View All</a>
                                    <ProductPreview></ProductPreview>
                                    <ProductPreview></ProductPreview>
                                    <ProductPreview></ProductPreview>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product-widget">
                                    <h2 class="product-wid-title">Top New</h2>
                                    <a href="#" class="wid-view-more">View All</a>
                                    <ProductPreview></ProductPreview>
                                    <ProductPreview></ProductPreview>
                                    <ProductPreview></ProductPreview>
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
export default Homepage;