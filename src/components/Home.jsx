import React, { Component } from 'react';
import PictureSLider from '../components/PictureSLider';
import { Image } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.isActiveChange = this.isActiveChange.bind(this)
  }

  isActiveChange() {
    this.setState({
      isActive: !this.state.isActive
    })
    console.log('ovo je state', this.state.isActive)
  }
  render() {
    console.log('ovo je propsw', this.props)
    return (
      <div className='container'>
        <div>
          <div className='home-text-info-heading title title--lines'>Puma Disk</div>
          <div className='home-text-info'>
            <p>Nemački proizvođač, PUMA, 1989 godine razvio je novu Trinomic seriju koja je podsticala razvoj tehničkih inovacija za trkače. Nakon veoma uspešnog CELL sistema gazišta sledeća inovacija je skrenula pažnu cele sportske industrije – DISK.</p>
          </div>
          <PictureSLider  patike={this.props.patike}/>
          <div className='home-text-info-video-text' style={{marginTop: '35px'}}>
            <div className='left-info' >
              <p>Disk sistem je zamena za pertle, a omogućava da se patika ravnomerno zategne kako bi nogu držala u pravilnom položaju u odnosu na gazište. Gornjište patike konstruisano je u formi čarape, okruženo gumenim steznicima koji pružaju podršku od pete ka stranicama, a njihovo prijanjanje reguliše se zatezanjem diska. Disk se zateže okretanjem u smeru kazaljke na satu, a otpušta povlačenjem učkura koji se nalazi iznad diska.</p>
            </div>
            <div className='right-info'>
              <iframe title='slike' width="100%" height="315" src="https://www.youtube.com/embed/0wrGT2M8YDc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div>
          <div className='home-text-info-heading title title--lines'>Puma Disk Problemi</div>
          <div className='home-text-info'>
            <p>
              Usled nošenja ovog modela patika dolazi do trošenja, pa čak i do pucanja sajlice u Puma Disk sistemu(Slika 1),takođe može doći i do fizičkog oštećenja plastike(Slika 2) ili točkića na patikama(Slika 3), što ih čini nefunkcionalnim i beskorisnim.
            </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', margin: '30px auto'}}>
          <div onMouseEnter={() => this.isActiveChange()} onMouseLeave={() => this.isActiveChange()} className='col-md-10 col-lg-10' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
           <div>
            <a href="/cenovnik">
                <div className='problems-pics-div'> 
                  <Image src="/images/home/new/rsz_1rsz_img_20181005_172659.jpg" responsive/>
                  <div className={this.state.isActive ? 'problems-info-div-up' : 'problems-info-div'} >
                    Pukle sajlice <br/>
                    Cena popravke <br />
                    Klikni za cenovnik
                  </div>
                </div>
              </a>
           </div>
            <div >
              <a href="/cenovnik">
                <div className='problems-pics-div'>
                  <Image src="/images/home/new/rsz_1rsz_img_20181017_185155.jpg" responsive/>
                  <div className={this.state.isActive ? 'problems-info-div-up' : 'problems-info-div'}>
                    Slomljen mehanizam <br/>
                    Cena popravke        <br/>
                    Klikni za cenovnik
                  </div>
                </div>
              </a>
            </div>
           
            {/* <a href="">
            <div className='problems-pics-div'>
                <Image src="/images/home/new/rsz_rsz_2img_1577.jpg" responsive/>
                <div className='problems-info-div'>
                  Slomljen točkić <br/>
                  Cena popravke >>>
                </div>
              </div>
            </a> */}
          </div>
          </div>
         
          </div>
        </div>
      </div>
    );
  }
}

export default Home;