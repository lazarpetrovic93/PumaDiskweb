import React,{ Component } from 'react';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div style={{display: 'flex'}} className='footer-main-content'>
        <div  className='container footer-main-content-div'>
          <div className='col-md-6'>
            <div className='left-footer-info'>
              <div>Kontakt:</div>
              <div>060/044-55-08</div>
              <div>
                <a href="https://www.instagram.com/_puma_diskovic_" >
                  <FaInstagram className='footer-icon '/>
                </a>
                <a href="https://www.facebook.com/petar.lazarevic.1048">
                  <FaFacebookSquare className='footer-icon '/>
                </a>
              </div>
            </div>
          </div>
          <div  className='col-md-6'>
            <ul className='footer-ul'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/galerija">Galerija</a>
              </li>
              <li>
                <a href="/cenovnik">Cenovnik</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-strip'>
        <div className='container footer-strip-info'>
           Developed by Lazar Petrović
        </div>
      </div>

    </div>
  )
}

export default Footer;