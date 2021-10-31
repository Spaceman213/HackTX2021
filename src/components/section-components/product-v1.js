import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return    <section className="all-item-area pd-top-90 pd-bottom-100">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="section-title">
			          <h2>Explore</h2>
			        </div>
			      </div>
			      <div className="col-lg-8 mt-2">
			      </div>
			    </div>
			    <div className="all-item-section go-top">        
			      <div className="item-isotope row">
			        <div className="item-sizer col-1" />
			        {/* gallery item start here */}
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/1.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Buy Now</a>
			          </div>
			          <div className="item-details">
			            <span className="price">0.6 ETH</span>
			            <h4><Link to="/product-details">PewDiePie</Link></h4>
			            <p>3251/5000</p>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/2.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Find Seller</a>
			          </div>
			          <div className="item-details">
			            <span className="price">1.24 ETH</span>
			            <h4><Link to="/product-details">Cody Ko</Link></h4>
			            <p>SOLD OUT</p>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
							<img src={publicUrl+"assets/img/item/dc.gif"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Buy Now</a>
			          </div>
			          <div className="item-details">
			            <span className="price">43.69 ETH</span>
			            <h4><Link to="/product-details">Doge Cat</Link></h4>
			            <p>1/1</p>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/4.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Watch Video</a>
			          </div>
			          <div className="item-details">
			            <span className="price">0.08 ETH</span>
			            <h4><Link to="/product-details">Men's fashion exclusive video</Link></h4>
			            <p>13410/50000</p>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/5.jpeg"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Watch Live</a>
			          </div>
			          <div className="item-details">
			            <span className="price">0.08 ETH</span>
			            <h4><Link to="/product-details">Paul v Mayweather Fight</Link></h4>
			            <p>1/500</p>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/6.jpeg"}
						   alt="image" />
			            </a>
			            <a className="btn btn-white"><Link to="/product-details">Buy Now</Link></a>
			          </div>
			          <div className="item-details">
			            <span className="price">1.98 ETH</span>
			            <h4><Link to="/product-details">Marques Brownlee</Link></h4>
						<p>17/20</p>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12 text-center">
			        <Link className="btn btn-base" to="/product">More Products</Link>
			      </div>
			    </div>
			  </div>        
			</section>

        }
}

export default ProductV1