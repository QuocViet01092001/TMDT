import React, { Component } from 'react';

class Sliderr extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleFade" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="1"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="2"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="3"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="4"></li>
              </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/images/image.jpg" height={500} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/biia.jpg" height={500} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/biiia.jpg" height={500} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/biaaa.jpg" height={500} alt="Four slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/biaaaa.jpg" height={500} alt="Four slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;