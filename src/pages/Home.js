import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer/';

import headshot from '../resources/headshot.jpg';
import cali from '../resources/whatsthis.jpg';

import './style.css'

export default function Home() {
    return (
        <div>
            <Header active='home' />
            <main className="container" role="main">
                {/* <!-- Content header --> */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-header">About Me</h1>
                        <hr className='page-header-separator'/>
                    </div>
                </div>

                    {/* <!-- Content grid --> */}
                <div className="row">
                    <div className="content col-md-12 mb-5">
                        <img className="float-left rounded" id="headshot" src={headshot} alt="headshot" />
                        <p>
                            My name's Mark and I'm a Seattleite who recently finished the full-stack web development bootcamp run
                            by Trilogy Education and the University of Washington. In 2015 I graduated from UW with a
                            Bachelor of Science degree in mechanical engineering and I've held multiple positions in that field since. My
                            educational focus and industry experience focused on medical device design and industrial
                            machinery design. 
                        <br /><br />
                            In 2018 I began thinking I may want to pivot my career toward becoming a software engineer, so I
                            took some computer science fundamentals courses at the UW and at North Seattle Community College. I then
                            completed a one-year certificate program at UW Bothell called the Graduate Certificate in Software Design
                            and Development. This program gave me further education in computer science and software engineering foundations, but upon completion I still struggled to find
                            work in the field. I then decided to attend the aforementioned bootcamp with the hope of bolstering my software development
                            portfolio with more practical skills.
                        <br/><br/>
                            Outside of education and my career I spend my time enjoying the outdoors, enjoying the company of my 19-year-old cat,  
                             <a href={cali} id="secret-cat" target="_blank" rel="noreferrer"> Cali</a>, and enjoying the company of my family and friends.
                            I'm also an avid football-watcher (go Huskies and go Packers!), PC gamer, and concert-goer. If I'm not doing one of the above activities, you'll probably find me tinkering with my custom built PC or one of my other hobby tech projects.
                        <br/><br/>
                            I'm excited to learn even more about software/web development and get my career re-started!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
