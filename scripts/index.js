import React from 'react';

import NonJSXExample from './NonJSXExample';
import JSXExample from './JSXExample';
import PropsExample from './PropsExample';
import StateExample from './StateExample';
import ReduxExample from './ReduxExample';

const styles = {
  maxWidth: '50em',
  margin: '0 auto',
  font: '1em/1.5 Helvetica Neue'
};

const containerStyles = {
  background: 'rgba(0,0,0,.02)',
  padding: '0.5rem',
  marginBottom: 10,
  borderRadius: 4
};

React.render(
  <div style={styles}>
    <h1>React examples</h1>

    <div style={containerStyles}>
      <NonJSXExample/>
    </div>

    <div style={containerStyles}>
      <JSXExample/>
    </div>

    <div style={containerStyles}>
      <PropsExample/>
    </div>

    <div style={containerStyles}>
      <StateExample onDone={alert}/>
    </div>

    <div style={containerStyles}>
      <ReduxExample/>
    </div>

  </div>
  , document.getElementById('root')
);
