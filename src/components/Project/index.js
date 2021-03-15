import React from 'react';
import { BoxArrowInRight, Github } from 'react-bootstrap-icons';

import './style.css';

export default function index(props) {
    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col-lg-3 mx-auto thumbnail-column'>
                    <a href={props.deployed} rel='noopener noreferrer' target='_blank'>
                        <img src={props.thumbnail} alt={props.title+'-thumbnail'}></img>
                    </a>
                </div>
                <div className='col-lg-7 mb-2'>
                    <h3 className='project-header'>{props.title}</h3>
                    <p class='description'>{props.description}</p>
                </div>
                <div className='col-lg-2 mx-auto'>
                    <div className='mx-auto project-links'>
                        <a className='btn align-middle' 
                            href={props.github} 
                            rel='noopener noreferrer' 
                            target='_blank'>
                            <Github className='mr-2 bootstrap-icon'/>Github
                        </a>
                        <a className='btn align-middle' 
                            href={props.deployed} 
                            rel='noopener noreferrer' 
                            target='_blank'>
                            <BoxArrowInRight className='mr-2 bootstrap-icon'/>
                            Deployed
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}
