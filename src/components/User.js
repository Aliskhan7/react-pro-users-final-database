import React from 'react';
import {NavLink, useParams} from 'react-router-dom'

function User(props) {
    const id = parseInt(useParams().id)

    return (
        <li className={`list-group-item ${id === props.user.id ? 'list-group-item-info' : ''}`}>
            <NavLink className='text-decoration-none' to={`/${props.user.id}`}>
                {props.user.name}
            </NavLink>
        </li>
    );
}

export default User;