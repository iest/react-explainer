import React from 'react';

import NonJSXExample from './NonJSXExample';
import JSXExample from './JSXExample';
import PropsExample from './PropsExample';

React.render(
  <div>
    <h1>React examples</h1>
    <NonJSXExample/>
    <JSXExample/>
    <PropsExample/>
  </div>
  , document.getElementById('root')
);
