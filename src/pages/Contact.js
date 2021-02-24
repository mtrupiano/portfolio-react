import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer/';

import './style.css';

import resume from '../resources/Trupiano_Resume.pdf'

export default function Contact() {
    return (
        <div>
            <Header active='contact'/>
            <main id="contact-content" className="container" role="main">
                {/* <!-- Content header --> */}
                <div className="row">
                    <div className="col">
                        <h1>Contact</h1>
                        <hr/>
                    </div>
                </div>

                    {/* <!-- Content grid --> */}
                <div className="row">
                    <div className="col-md-6 col-xs-12 mb-3">
                        <h3>Reach out to me with a message: </h3>
                        <div className="form-group">
                            <label className="h4" forHTML="formNameEntry">Name</label>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label className="h4" forHTML="formEmailEntry">E-mail</label>
                            <input type="email" className="form-control" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label className="h4" forHTML="formMessageBox">Message</label>
                            <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Write your message here..."></textarea>
                        </div>
                        <button className="btn btn-block" >Send</button>
                    </div>
                    <div className="col-md-1"></div>
                    <div className=" col-md-5 col-xs-12" id="check-me-out">
                            <h3>...or check me out here: </h3>
                        <ul className="list-group list-group-horizontal-xs">
                            <li className="list-group-item flex-fill text-center">
                                <a href="https://github.com/mtrupiano" target="_blank">Github</a>
                            </li>
                            <li className="list-group-item flex-fill text-center">
                                <a href="https://www.linkedin.com/in/mark-trupiano-709043163/" target="_blank">LinkedIn</a>
                            </li>
                            <li className="list-group-item flex-fill text-center">
                                <a href="mailto:markt4@uw.edu" target="_blank">markt4@uw.edu</a>
                            </li>
                            <li className="list-group-item flex-fill text-center">
                                <a href={resume} target="_blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
