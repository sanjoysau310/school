import React from 'react'

export const Header = () => {
    return (
        <div>
            <header>
                <div className="header-top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2" />support@aset.com</a></li>
                                    <li className="list-inline-item"><i className="icofont-location-pin mr-2" />Address - Kolkata </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <a href="tel:+23-345-67890">
                                        <span>Call Now : </span>
                                        <span className="h4">123-4567-890</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <h1 className="text-dark">School Logo</h1>
                        {/* <div className="logo">                        
                            <h1 className="text-light"><Link to="/"><span>Tutorials</span></Link></h1>
                            <img src={require("../../assets/img/logo.png").default} alt="tagline" className="img-fluid" /> */}
                        </div>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="icofont-navigation-menu" /> */}<i class="bi bi-list"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down" /></a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                        <li><a className="dropdown-item" href="department.html">Departments</a></li>
                                        <li><a className="dropdown-item" href="department-single.html">Department Single</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="doctor.html" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down" /></a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                        <li><a className="dropdown-item" href="doctor.html">Doctors</a></li>
                                        <li><a className="dropdown-item" href="doctor-single.html">Doctor Single</a></li>
                                        <li><a className="dropdown-item" href="appoinment.html">Appoinment</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down" /></a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                        <li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
                                        <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

    )
}
