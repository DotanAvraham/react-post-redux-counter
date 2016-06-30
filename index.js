import React from 'react';
import ReactDOM from 'react-dom';

import Root from './js/components/posts-components/root.js';

import RootCounter from './js/components/counter-redus-components/app.react.js'


ReactDOM.render(
    <div>
        <Root />
        <h1> after Posts </h1>
        <RootCounter />
     </div>,
    document.getElementById('app')
);

