import React from 'react'

export const About = () => {
    return (
        <div>
            <section className="section about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img src={require("../../../assets/img/about.png").default} alt="about" className="img-fluid" />
                                <img src={require("../../../assets/img/about.png").default} alt="about" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                            <img src={require("../../../assets/img/about.png").default} alt="about" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-content pl-4 mt-4 mt-lg-0">
                                <h2 className="title-color">About School</h2>
                                <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                                <a href="service.html" className="btn btn-main-2 btn-round-full btn-icon">See More...<i className="icofont-simple-right ml-3" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
