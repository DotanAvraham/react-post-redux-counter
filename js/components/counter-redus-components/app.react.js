/**
 * Created by Dotan on 30-Jun-16.
 */
import React from 'react';
import Store from '../../stores/store.redux.js';
import {increment , decrement  } from '../../action-creators/action-creators.redux.js';


class App extends React.Component{
    constructor(){
        super();
        this.action = '';
        Store.dispatch = Store.dispatch.bind(this);
    }

    changeState(){
        let copyState = Store.getState();

        this.setState(copyState);
    }

    componentWillMount(){
        this.changeState();
    }
    componentDidMount(){
        this.unsbscribe = Store.subscribe(()=>{
           this.changeState();
        });
    }

    componentWillUnmount(){
        this.unsbscribe();
    }


    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=> Store.dispatch(increment())}> + </button>
                <button onClick={()=> Store.dispatch(decrement())}> - </button>
            </div>

        );

    }

};

export default App;