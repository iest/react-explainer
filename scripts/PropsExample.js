import React from 'react';

let DumbThing = React.createClass({

  propTypes: {
    text: React.PropTypes.string,
    size: React.PropTypes.number,
    isRed: React.PropTypes.bool
  },

  render() {

    const styles = {
      color: this.props.isRed ? 'red':'#333',
      fontSize: this.props.size
    };

    return (
      <div style={styles}>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <DumbThing
        text="This is a dumb use of props"
        size={24}
        isRed={true}
      />
    );
  }
});
