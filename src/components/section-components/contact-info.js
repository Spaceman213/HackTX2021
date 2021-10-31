import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="contact-page-area pd-top-100 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb" id = "a1">
			            <img src={publicUrl+"assets/img/icon/lock_app.png"} alt="img" />
			          </div>
			          <h4>Secure</h4>
			          <p>Blockchain infrastructure. Sophisticated algorithms.</p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb" id ="a2">
			            <img src={publicUrl+"assets/img/icon/lightning.png"} alt="img" />
			          </div>
			          <h4>Easy</h4>
			          <p>Mint 100 tokens in 30s with the push of a button</p>
			          <p></p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb" id = "a3">
			            <img src={publicUrl+"assets/img/icon/gift.png"} alt="img" />
			          </div>
			          <h4>Get Rewarded</h4>
			          <p>95% of all profits go directly to the creators</p>
			        </div>
			      </div>   
			    </div>
			  </div>          
			</section>

        }
}

export default ContactInfo