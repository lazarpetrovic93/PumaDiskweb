import React,{ Component } from 'react';
import PictureSLider from './PictureSLider';

class Gallery extends Component {
  render() {
    console.log('ovo su tikepa', this.props.patike)
    return (
      <div style={{height: '900px'}} className='container'>
        <div >
          <PictureSLider patike={this.props.patike}/>
        </div>
      </div>
    );
  }
}

export default Gallery;