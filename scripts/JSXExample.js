import React from 'react';

export default class JSXExample extends React.Component {
  render() {
    return (
      <div>
        <strong>Hello, from JSX!</strong>
        <p>One slightly annoying thing that still trips me up from time to time is that the `render` function has to return a single parent element.</p>
      </div>
    );
  }
}
