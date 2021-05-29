import React from 'react';

function Albom(props) {

    return (
        <li className='list-group-item'>
            {props.albom.title}
        </li>
    );
}

export default Albom;