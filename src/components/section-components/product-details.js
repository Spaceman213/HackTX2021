import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="product-details pd-top-100">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="single-product-wrap">
		          <div>
		            <img src={publicUrl+"assets/img/product/1.png"} alt="image" />
		          </div>
		          <div className="single-product-details">
		            <h4><a href="#">NFT Price History</a></h4>
		            <p>Marques Brownlee Exclusive NFT #1</p>                            
		          </div>
		        </div>
		        <div className="product-tab">
		          <ul className="nav nav-pills">
		            <li className="nav-item">
		              <a className="nav-link active" id = "mario" data-toggle="pill" href="#pills-home">Creator Description</a>
		            </li>
		          </ul>
		          <div className="tab-content">
		            <div className="tab-pane fade show active" id="pills-home">
		              <p> Brownlee joined YouTube on March 21, 2008. He first started uploading videos January 1, 2009, about new products, or reviews of products he already owned. He says his first videos were screencasting where he would post an image and just talk over it, then responded to requests from viewers of what they would like to watch. His first several hundred videos were primarily hardware tutorials, and freeware. He was later approached by companies to demonstrate their paid software and hardware, but only reviews products that would be of interest to his audience of technology enthusiasts. Brownlee is best known today for his content about hand-held devices. Brownlee usually uploads one video per week. </p>
					  <p>Brownlee's reviews have been promoted by other review sites. Engadget promoted, in January 2012 they feature his tour of the then-new cloud based storage service called Insync In November 2013, one of Brownlee's most viral videos was posted based on the LG G Flex. He performed various scratch tests to portray the self-healing ability of the device. The video hit over a million views in the first day. In December 2013, Brownlee did an interview with Motorola CEO Dennis Woodside which was widely quoted. Woodside confirmed his plans for customization with Project Ara. </p>
		              <h5 className="title">NFT Overview</h5>
		              <ul>
		                <li>
		                  <p className="font-medium">Exclusive Weekly Content</p>
		                  <p>In addition to Brownlee's weekly videos, owners will gain exclusive weekly video content only avaliable to holders of this NFT. This content is up to the creator and will focus on product reviews of new tech</p>
		                </li>
		                <li>
		                  <p className="font-medium">Community recognition:</p>
		                  <p>Owners can proudly display their NFT showcasing their support for their favorite creator</p>
		                </li>
		                <li>
		                  <p className="font-medium">Potential ROI:</p>
		                  <p>Holder of this NFT can sell at any time. Depending on the content creators performance metrics, the price can flucuate either positivly or negativly</p>
		                </li>
		              </ul>
		            </div>
		            <div className="tab-pane fade" id="pills-profile">
		              <h5 className="title">Reviews (2)</h5>
		              <div className="single-review">
		                <h6 className="name">Tyler Bailey</h6>
		                <span className="date">13 August 2019</span>
		                <div className="star-rating">
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                </div> 
		                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
		              </div>
		              <div className="single-review">
		                <h6 className="name">Tom Clark</h6>
		                <span className="date">13 August 2019</span>
		                <div className="star-rating">
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star-o" /></span>
		                </div> 
		                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
		              </div>
		              <div className="add-review">
		                <h5 className="title">Add Review</h5>
		                <div className="star-rating">
		                  <p>Your Rating:</p>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                </div> 
		                <form className="contact-form">
		                  <div className="row">
		                    <div className="col-12">
		                      <div className="single-input-wrap">
		                        <input type="text" className="single-input" placeholder="Your Name" />
		                      </div>
		                    </div>
		                    <div className="col-12">
		                      <div className="single-input-wrap">
		                        <input type="text" className="single-input" placeholder="Your Email" />
		                      </div>
		                    </div>
		                    <div className="col-12">
		                      <div className="single-input-wrap">
		                        <textarea className="single-input textarea" placeholder="Your Review" defaultValue={""} />
		                      </div>
		                    </div>
		                  </div>
		                  <a className="btn btn-base" href="#">Submit</a>
		                </form>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
		        <div className="sidebar-area">
		          <div className="widget widget-cart">
		            <div className="widget-cart-inner text-center">
		              <h3 className="price">1.98 ETH</h3>
		              <ul>
		                <li><i className="fa fa-shopping-cart" />52 Sales</li>
		                <li><i className="fa fa-eye" />125 Views</li>
		              </ul>
		              <a className="btn btn-base" href="#">Buy Now</a>
					  <div id = "noah"></div>
					  <a className="btn btn-base" href="#">Sell Now</a>
		            </div>
		          </div>
		          <div className="widget widget-client text-center">
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/icon/3.png"} alt="img" />
		            </div>
		            <h4>Marques Brownlee</h4>
					<p>Verified Creator</p>
					<p>14.9 Million Subscribers</p>
		            <span className="ratting">
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <span>(128)</span>
		            </span>
		          </div>
		          <div className="widget widget-list">
		            <ul>
		              <li><span>YouTube</span>14.9 M</li>
		              <li><span>Instagram</span>3.1 M</li>
		              <li><span>Yearly Growth</span>15.6%</li>
		              <li><span>Sub Percentile</span>Top 0.001%</li>
		              <li><span>Est. Growth</span>5.3%</li>
		              <li><span>Category</span>Product Reviews</li>
		            </ul>   
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
  


        }
}

export default ProductDetails