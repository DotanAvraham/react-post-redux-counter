/**
 * Created by Dotan on 27-Jun-16.
 */
import React from 'react';
import {Link} from 'react-router';

import posts from '../../../data/posts.js'



const Posts = (props) =>{

    const links = posts.map((post) => {

        return (
            <li key={post.link}>
                <Link to={`/posts/post/${post.link}`}>{post.link}</Link>
            </li>);
    });

    return (
        <div  className="posts">
            <div className="posts-list">
                <h3> posts </h3>
                <ul>
                    {links}
                </ul>
            </div>
            {props.children}
        </div>
    );

}

export default Posts;