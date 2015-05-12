import React from 'react';

import NonJSXExample from './NonJSXExample';
import JSXExample from './JSXExample';

React.render(
  <div>
    <h1>React examples</h1>
    <NonJSXExample/>
    <JSXExample/>
  </div>
  , document.getElementById('root')
);
