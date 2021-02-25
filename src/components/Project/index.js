import React from 'react';
import { BoxArrowInRight, Github } from 'react-bootstrap-icons';

import './style.css';

import '../../pages/style.css';

export default function index(props) {
    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col-md-2'>
                    
                </div>
                <div className='col-md-8 mb-2'>
                    <h3 className='project-header'>{props.title}</h3>
                    {props.description}
                </div>
                <div className='col-md-2 pl-5 d-flex align-items-center'>
                    <div className='row'>
                        <div className='col mb-2'>
                            <a className='btn btn-large' href={props.github} target='_blank'>
                                <Github className='mr-2'/>Github
                            </a>
                        </div>
                        <div className='col'>
                            <a className='btn' href={props.github} target='_blank'>
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
