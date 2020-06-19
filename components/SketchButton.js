'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { TwitterPicker } from 'react-color';

class SketchButton extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: 6,
      g: 147,
      b: 227,
      a: 1,
    },
    hex: '#693001'
  };

  getColor = () => {
    return this.state.hex;
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    this.setState({ hex: color.hex })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '64px',
          height: '64px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        contain: {
            display: 'inline-block',
            margin: '10px'
        }
      },
    });

    return (
      <div style={styles.contain}>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <TwitterPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default SketchButton