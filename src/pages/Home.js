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
                        <h1 id="about-me-header">About Me</h1>
                        <hr id='about-me-separator'/>
                    </div>
                </div>

                    {/* <!-- Content grid --> */}
                <div className="row">
                    <div className="content col-md-12">
                        <img className="float-left rounded" id="headshot" src={headshot} alt="headshot" />
                        <p>
                            My name's Mark Trupiano and I'm a 29-year-old Seattleite currently attending the full-stack web development bootcamp run
                            by Trilogy Education and the University of Washington. In 2015 I graduated from the University of Washington with a
                            Bachelor of Science degree in mechanical engineering and I've held multiple positions in that field since. My
                            educational focus and industry experience revolved around medical device design and industrial
                            machinery design. In 2018 I began thinking I may want to pivot my career toward becoming a software engineer, so I
                            took some computer science fundamentals courses at the UW and at North Seattle Community College. I then
                            completed a one-year certificate program at the UW's Bothell campus called the Graduate Certificate in Software Design
                            and Development. This program gave me further education in computer science foundations, but upon completion I still struggled to find
                            work in the field. I'm now attending the aforementioned bootcamp with the hope of bolstering my software development
                            portfolio.
                        <br/><br/>
                            Outside of academia and my career I spend my time enjoying the outdoors, enjoying the company of my 19-year-old cat, 
                            <a href={cali} id="secret-cat" target="_blank"> Cali</a>, and enjoying the company of my family and friends.
                            I'm also an avid football-watcher (go Huskies and go Packers!), PC gamer, and concert-goer.
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
