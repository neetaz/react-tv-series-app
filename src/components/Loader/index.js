import React, { Component } from 'react';
import loaderSrc from '../../assets/loader.gif';

class Loader extends Component {
  render() {
      return( 
        <div>
            <img src={loaderSrc} alt="Loader icon" style={{width:75}}/>
        </div>
        )
    }
}

export default Loader