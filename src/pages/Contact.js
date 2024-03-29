import { React, useState } from 'react';
import { Github, Linkedin, Envelope, FileText } from 'react-bootstrap-icons';

import Header from '../components/Header';
import Footer from '../components/Footer/';

import './style.css';

import resume from '../resources/Trupiano_Resume.pdf';

export default function Contact() {

    const [ message, setMessage ] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInput = (event) => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        window.emailjs.send(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID, 
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, 
            {
                message: message.message,
                from_name: message.name,
                reply_to: message.email,
            }
        ).then( (response) => {
            setMessage({
                name: '',
                email: '',
                message: '',
            })
        }).catch( (err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <Header active='contact'/>

            <main id="contact-content" className="container" role="main">
                {/* <!-- Content header --> */}
                <div className="row">
                    <div className="col">
                        <h1 className='page-header'>Contact</h1>
                        <hr className='page-header-separator'/>
                    </div>
                </div>

                {/* <!-- Content grid --> */}
                <div className="row">
                    <div className="col-md-6 col-xs-12 mb-3">
                        <h3>Reach out to me with a message: </h3>
                        <div className="form-group">
                            <label className="h4" forHTML="formNameEntry">Name</label>
                            <input 
                                onChange={handleInput}
                                type="text"
                                name='name'
                                className="form-control" 
                                placeholder="Name"
                                value={message.name} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="h4" forHTML="formEmailEntry">E-mail</label>
                            <input 
                                onChange={handleInput}
                                type="email"
                                name='email'
                                className="form-control" 
                                placeholder="name@example.com" 
                                value={message.email} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="h4" htmlFor="formMessageBox">Message</label>
                            <textarea 
                                onChange={handleInput}
                                className="form-control" 
                                name="message"
                                id="formMessageBox"
                                cols="30" 
                                rows="10" 
                                placeholder="Write your message here..."
                                value={message.message} 
                            />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-block">Send</button>
                    </div>

                    <div className="col-md-1"></div>

                    <div className=" col-md-5 col-xs-12" id="check-me-out">
                            <h3>...or check me out here: </h3>
                        <ul className="list-group list-group-horizontal-xs mb-5">
                            <li className="list-group-item flex-fill text-center">
                                <a href="https://github.com/mtrupiano" rel='noreferrer' target="_blank">
                                    <Github className='mr-2 bootstrap-icon' />
                                    Github
                                </a>
                            </li>
                            <li className="list-group-item flex-fill text-center">
                                <a target="_blank" rel='noreferrer'
                                    href="https://www.linkedin.com/in/mark-trupiano-709043163/">
                                    <Linkedin className='mr-2 bootstrap-icon' />
                                    LinkedIn
                                </a>
                            </li>
                            <li className="list-group-item flex-fill text-center">
                                <a href="mailto:mtrupiano2@gmail.com" rel='noreferrer' target="_blank">
                                    <Envelope className='mr-2 bootstrap-icon' />
                                    mtrupiano2@gmail.com
                                </a>
                            </li>
                            <li className="list-group-item flex-fill text-center">
                                <a href={resume} rel='noreferrer' target="_blank">
                                    <FileText className='mr-2 bootstrap-icon' />
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
