/**
 * Created by Dotan on 27-Jun-16.
 */
import React from 'react';

import {Router,Rout,hashHistory} from 'react-router'

import Container from "./container.js"



class Root extends React.Component {
    render() {
        return (
            <div>
                <Container />

            </div>
        )
    }
}



export default Root;