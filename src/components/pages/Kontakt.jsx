import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import  { FaPhone, FaMapMarker, FaMap, FaEnvelope} from 'react-icons/fa';

export default class Kontakt extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      lat: 44.7995,
      lng: 20.4750,
      zoom: 13,
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className='container kontakt-info-main'>
        <div className='kontakt-info-div'>
          <div className='kontakt-info'>
            <div className='kontakt-heading'>Adresa</div>
            <div className='kontakt-icon'><FaMap size={40}/></div>
              <p>
                Šumatovačka 24, Beograd
              </p>
          </div>
          <div className='kontakt-info'>
            <div className='kontakt-heading'>Telefon</div>
            <div className='kontakt-icon'><FaPhone size={40}/></div>
              <a href="tel:+381600445508" className='kontakt-link'>
                <p>
                  060/ 044 55 08
                </p>
              </a>
          </div>
          <div className='kontakt-info-right'>
            <div className='kontakt-heading'>E mail</div>
            <div className='kontakt-icon'><FaEnvelope size={40}/></div>
              <a href="lazarpetrovic93@gmail.com" className='kontakt-link'>
                <p>
                  pumadiskovic@gmail.com
                </p>
              </a>
          </div>
        </div>
        <div className="leafletCont ">
					<Map  center={position} zoom={this.state.zoom} className="leafletCont">
						<TileLayer
							attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={position}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</Map>
        </div>
      </div>
    )
  }
}
