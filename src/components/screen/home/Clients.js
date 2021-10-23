import React from 'react'

export const Clients = () => {
    return (
        <div>
            <section className="section clients">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>Partners who support us</h2>
                                <div className="divider mx-auto my-4" />
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium.Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row clients-logo">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                                            <div className="member">
                                                <img src={require("../../../assets/img/clients/client1.png").default} className="img-fluid" alt="pic" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button> */}
                    
                    </div>
                </div>
            </section >
        </div >
    )
}

