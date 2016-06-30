/**
 * Created by Dotan on 27-Jun-16.
 */
import React from 'react';

import {Router,Route,hashHistory} from 'react-router';
import Home from './home.js';
import About from './about.js';
import Posts from './posts';
import Post from './post.js';

import Links from './links.js';


const Container = (props) =>{
    return (
        <div className="container">
            <h2> Wellcome </h2>

            <Router history={hashHistory}>
                <Route path="/" component= {Links}>

                <Route path="home" component={Home}></Route>
                <Route path="about" component={About}></Route>
                <Route path="posts" component={Posts}>
                    <Route path="post/:num" component={Post}></Route>
                </Route>

                </Route>
            </Router>

        </div>
    );

}

export default Container;