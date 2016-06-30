/**
 * Created by Dotan on 27-Jun-16.
 */
import React from 'react';
import posts from '../../../data/posts.js'

const Post = (props) =>{
    var post = posts.filter((single)=> single.link === props.params.num)[0];
    return (
        <div className="each-post">
            <h3> post {post.link} </h3>
            <ul>
                <li>header:  {post.headline}</li>
                <li>description:  {post.text}</li>
            </ul>

        </div>
    );

}

export default Post;