import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import Cenovnik from '../components/pages/Cenovnik'
import Kontakt from '../components/pages/Kontakt'

class App extends Component {
  render() {
    console.log('ovo je props', this.props.patike)
    return (
      <div>
        <Router>
          <div className="App">
            <Header /> 
            <Route exact path="/" component={() => <Home patike={this.props.patike} />}/>
            <Route path="/galerija" component={() => <Gallery patike={this.props.tikepa}/>}/>
            <Route path="/cenovnik" component={() => <Cenovnik price={this.props.price}/>}/>
            <Route path="/kontakt" component={() => <Kontakt price={this.props.price}/>}/>
            
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    patike: state.sneakers.sneakersPics,
    tikepa: state.sneakers.tikepa,
    price: state.sneakers.price,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
