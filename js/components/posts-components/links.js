/**
 * Created by Dotan on 27-Jun-16.
 */
import React from 'react';

import {Link} from 'react-router';

const Links = (props) =>{
    return (
        <div>
        <ul className="general-list">
            <li>
                <Link to="home">Home</Link>
            </li>
            <li>
                <Link to="about">About</Link>
            </li>
            <li>
                <Link to="posts">Posts</Link>
            </li>
        </ul>
            {props.children}
        </div>
    );

}
export default Links