import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LatestNews extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
     <section className="blog-area pd-top-90 pd-bottom-70 bg-sky-blue">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-6">
		        <div className="section-title text-center">
		          <h2>You might also like...</h2>
		        </div>
		      </div>
		    </div>
		    <div className="row justify-content-center go-top">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png"} alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />28 JANUARY, 2020</span>
		              <a href="#"><i className="far fa-user" aria-hidden="true" />BY ADMIN</a>
		            </div>
		            <h5><Link to="/blog-details">What is an NFT?</Link></h5>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.jpeg"} alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />28 JANUARY, 2020</span>
		              <a href="#"><i className="far fa-user" aria-hidden="true" />BY ADMIN</a>
		            </div>
		            <h5><Link to="/blog-details">How to profitiably trade NFTs</Link></h5>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/3.jpeg"} alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />28 JANUARY, 2020</span>
		              <a href="#"><i className="far fa-user" aria-hidden="true" />BY ADMIN</a>
		            </div>
		            <h5><Link to="/blog-details">Doge coin reaches all time high with help of Elon Musk</Link></h5>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>



    )
  }
}

export default LatestNews;
