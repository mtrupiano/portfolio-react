import React from 'react';

export default function index(props) {
    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col-md-2'>
                    
                </div>
                <div className='col-md-8'>
                    <h3 className='project-header'>{props.title}</h3>
                    {props.description}
                </div>
                <div className='col-md-2 pl-5 d-flex align-items-center'>
                    <div className='row'>
                        <div className='col'>
                            <a href={props.github}>Github</a>
                        </div>
                        <div className='col'>
                            <a href={props.github}>Deployed</a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
