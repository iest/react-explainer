import React from 'react';

import NonJSXExample from './NonJSXExample';
import JSXExample from './JSXExample';
import PropsExample from './PropsExample';
import StateExample from './StateExample';

const styles = {
  maxWidth: '50em',
  margin: '0 auto',
  font: '1em/1.5 Helvetica Neue'
};

React.render(
  <div style={styles}>
    <h1>React examples</h1>
    <NonJSXExample/>
    <JSXExample/>
    <PropsExample/>
    <StateExample onDone={alert}/>
  </div>
  , document.getElementById('root')
);
