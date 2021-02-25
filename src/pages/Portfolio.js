import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer/';
import Project from '../components/Project';

import descriptions from '../resources/descriptions.json';

import allmarketTile from '../resources/allmarket-tile.png';
import webm8Tile from '../resources/webm8-tile.png';

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
                <ul className='list-group' id='portfolio-list'>
                    <Project title='allmarket' 
                        github='https://github.com/mtrupiano/allmarket' 
                        deployed='https://mtrupiano.github.io/allmarket/' 
                        thumbnail={allmarketTile}
                        description={descriptions.allmarket} />
                    <Project title='webM8' 
                        github='https://github.com/mtrupiano/Bookmark-Manager' 
                        deployed='https://webm8.herokuapp.com/' 
                        thumbnail={webm8Tile}
                        description={descriptions.webm8}/>
                </ul>
            <Footer />
            </main>
        </div>
    )
}
