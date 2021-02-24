import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer/';
import Project from '../components/Project';

import descriptions from '../resources/descriptions.json';

export default function Portfolio() {
    return (
        <div>
            <Header active='portfolio'/>
            <main className="container" role="main">
                {/* <!-- Content header --> */}
                <div className="row">
                    <div className="col">
                        <h1 className='page-header'>Portfolio</h1>
                        <hr className='page-header-separator' />
                    </div>
                </div>
                <ul className='list-group'>
                    <Project title='allmarket' 
                        github='https://github.com/mtrupiano/allmarket' 
                        deployed='https://mtrupiano.github.io/allmarket/' 
                        thumbnail=''
                        description={descriptions.allmarket} />
                    <Project title='webm8' 
                        github='https://github.com/mtrupiano/Bookmark-Manager' 
                        deployed='https://webm8.herokuapp.com/' 
                        thumbnail=''
                        description={descriptions.webm8}/>
                </ul>
            <Footer />
            </main>
        </div>
    )
}
