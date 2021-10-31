import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="footer-area pd-top-100">
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget widget_contact">
				          <h4 className="widget-title">Contact Us</h4>
				          <div className="media">
				            <div className="thumb">
				              <img src={publicUrl+"assets/img/footer/1.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p>1909 Rio Grande St.</p>
				              <p>Austin, TX 78705</p>
				            </div>
				          </div>
				          <div className="media">
				            <div className="thumb mt-0">
				              <img src={publicUrl+"assets/img/footer/2.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p className="m-0">kunalmody@teal.com</p>
				            </div>
				          </div>
				          <div className="media">
				            <div className="thumb mt-0">
				              <img src={publicUrl+"assets/img/footer/3.png"} alt="img" />
				            </div>
				            <div className="media-body">
				              <p className="m-0">(310)-550-4000</p>
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget widget_nav_menu">
				          <h4 className="widget-title">Useful links</h4>
				          <ul className="go-top">
				            <li><Link to="/product">All NFTs</Link></li>
				            <li><Link to="/faq">FAQ’S</Link></li>
				            <li><Link to="/policy">Terms &amp; Conditions</Link></li>
				            <li><Link to="/sign-in">Sign up</Link></li>
				            <li><Link to="/blog">Articles</Link></li>
				            <li><Link to="/category">Popular Creators</Link></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget widget widget_products">
				          
				        </div>
				      </div>
				      <div className="col-lg-3 offset-lg-1 col-md-6">
				        <div className="footer-widget widget widget_news">
				        </div>
				      </div>
				    </div>
				  </div>
				  {/*Footer bottom*/}
				  <div className="container">
				    <div className="copyright-area">
				      <div className="row">
				        <div className="col-lg-6 align-self-center">
				          <p>©2021 Copyright TEAL. All rights reserved. </p>
				        </div>
				        <div className="col-lg-6 text-lg-right">
				          <ul>
				            <li>
				              <a href="#">Home</a>
				            </li>
				            <li>
				              <a href="#">About</a>
				            </li>
				            <li>
				              <a href="#">Blog</a>
				            </li>
				            <li>
				              <a href="#">Contact</a>
				            </li>
				          </ul>
				        </div>
				      </div>
				    </div>                
				  </div>
				</footer>


        )
    }
}


export default Footer_v1