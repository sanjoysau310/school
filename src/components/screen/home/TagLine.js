import React from 'react'

export const TagLine = () => {
    return (
        <div>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="block">
                                <div className="divider mb-3" />
                                <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                                <p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                                <div className="btn-container ">
                                    <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  " /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={require("../../../assets/img/tagline.png").default} className="img-fluid" alt="tagline" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
