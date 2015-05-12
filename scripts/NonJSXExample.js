import React from 'react';

export default class NonJSXExample extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement('strong', null,
        'Hello! Without JSX.'
      ),
      React.createElement('p', null,
        `There's no real reason not to use JSX though...`
      ),
    );
  }
}
