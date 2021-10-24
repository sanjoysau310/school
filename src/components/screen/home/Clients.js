import React from 'react'

export const Clients = () => {
    return (
        <div>
            <section className="section clients gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>Partners who support us</h2>
                                {/* <div className="divider mx-auto my-4" /> */}
                                {/* <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium.Maiores porro cumque quaerat.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row clients-logo">
                    <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                <div className="client-thumb">
                                    <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid w-100" alt="pic" />
                                    
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 1</h5>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="client-thumb">
                                    <img src={require("../../../assets/img/clients/client2.png").default} className="img-fluid w-100" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 2</h5>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                <div className="client-thumb">
                                    <img src={require("../../../assets/img/clients/client3.png").default} className="img-fluid w-100" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 3</h5>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                                <div className="client-thumb">
                                    <img src={require("../../../assets/img/clients/client4.png").default} className="img-fluid w-100" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 4</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 5</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                    <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 6</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                    <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 7</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                                    <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 8</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                    <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 9</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                    <img src={require("../../../assets/img/clients/client2.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 10</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                    <img src={require("../../../assets/img/clients/client3.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 11</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                                    <img src={require("../../../assets/img/clients/client4.png").default} className="img-fluid" alt="pic" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>School 12</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>                    
                    </div>
                </div>
            </section >
        </div >
    )
}

