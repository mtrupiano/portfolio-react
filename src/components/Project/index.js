import React from 'react';
import { BoxArrowInRight, Github } from 'react-bootstrap-icons';

import './style.css';

import '../../pages/style.css';

export default function index(props) {
    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col-md-3 d-flex justify-content-center thumbnail-column'>
                    <a href={props.deployed} rel='noopener noreferrer' target='_blank'>
                        <img src={props.thumbnail} alt={props.title + '-thumbnail'}></img>
                    </a>
                </div>
                <div className='col-md-7 mb-2'>
                    <h3 className='project-header'>{props.title}</h3>
                    {props.description}
                </div>
                <div className='col-md-2 pl-5 d-flex align-items-center'>
                    <div className='row'>
                        <div className='col mb-2'>
                            <a className='btn btn-large' href={props.github} rel='noopener noreferrer' target='_blank'>
                                <Github className='mr-2'/>Github
                            </a>
                        </div>
                        <div className='col'>
                            <a className='btn' href={props.deployed} rel='noopener noreferrer' target='_blank'>
                                <BoxArrowInRight className='mr-2'/>
                                Deployed
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
