import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return <div className="banner-area"
            style={
                { background: 'url(' + publicUrl + 'assets/img/banner/2.png)' }} >
            <div className="container" >
                <div className="banner-area-inner" >
                    <div className="row justify-content-center" >
                        <div className="col-lg-8">
                            <div className="banner-inner text-center" >
                                <h2 > Collect and sell < br /> <span> content creator NFTs </span></h2 >
                                    <p > Support your favorite content creators by trading their unique tokens </p>
                            </div>
                        </div>
                    <div className="col-md-10" >
                        </div> </div> </div> </div> </div>
    }
}

export default Banner