import React from 'react';

class ImgComponent extends React.Component {

  propTypes: {
    src: React.Proptypes.string
  }

  render() {

    const styles = {
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: 'cover',
      width: '10em',
      height: '10em',
    };

    return (
      <div style={styles}/>
    );
  }
}

export default class PropsExample extends React.Component {
  render() {
    return <ImgComponent src="http://placecage.com/200/200"/>
  }
}
