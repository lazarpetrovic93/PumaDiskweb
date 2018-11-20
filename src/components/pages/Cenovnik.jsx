import React, { Component } from 'react';

export default class Cenovnik extends Component {
  constructor(props) {
    super(props);
    this.showInfoPrice = this.showInfoPrice.bind(this)
  }

  showInfoPrice(info) {
    if (info.color) {
      return (
        <div className='cenovnik-info'>
          <p>Trajanje popravke: {info.time}</p>
          <p>Cena popravke: {info.price}</p>
          <p>Boja: {info.color}</p>
        </div>
      )
    } else {
      return (
        <div className='cenovnik-info'>
          <p>Trajanje popravke: {info.time}</p>
          <p>Cena popravke: {info.price}</p>
        </div>
      )
    }
      
  }

 render() {
   console.log('propsovi', this.props.price[2].color)
   this.showInfoPrice(this.props.price[1])
   return (
     <div className='container  '>
      <div className='cenovnik-main'>
        <div className='cenovnik-margin'>
          <div className='home-text-info-heading title title--lines'>Zamena Sajlica</div>
           {this.showInfoPrice(this.props.price[0])}
        </div>
        <div className='cenovnik-margin'>
          <div className='home-text-info-heading title title--lines'>Zamena Točkica</div>
          {this.showInfoPrice(this.props.price[1])}
        </div>
        <div className='cenovnik-margin'>
          <div className='home-text-info-heading title title--lines'>Zamena Plastike</div>
          {this.showInfoPrice(this.props.price[2])}
        </div>
        <div className='cenovnik-margin'>
          <div className='home-text-info-heading title title--lines'>Popravka Mehanizma</div>
          {this.showInfoPrice(this.props.price[3])}
        </div>
        
      </div>
     </div>
   )
 }
}