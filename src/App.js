import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import LocationMap from './components/LocationMap'; // Child component
import locationIcon from './assets/images/brand-logo.png'; // child component

class App extends Component { // Parent component
  constructor(props) {
    super(props);
    this.state = {
      locationDetails: {}
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.locationResponse !== prevProps.locationResponse) {
      if (this.props.locationResponse && this.props.locationResponse.places && this.props.locationResponse.places[0]) {
        let locationDetails = this.props.locationResponse.places[0]
        this.setState({
          locationDetails: locationDetails
        })
      }
    }
  }
  render() {
    let { getLocation, locationError } = this.props;
    let { locationDetails } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light navbar-bg">
          <div className="container-fluid">
            <div className="navbar-header">
              <img src={locationIcon} alt="" className="d-inline-block align-text-bottom" />
              <a className="navbar-brand" href="/"> Location Finder</a>
            </div>
          </div>
        </nav>
        {locationError !== '' && <div className='error-msg'>{locationError}</div>}
        <div className="row main-container">
          <div className="col-sm-3">
            <LocationList locationDetails={locationDetails} getLocation={getLocation} />
          </div>
          <div className="col-sm-9">
            <LocationMap locationDetails={locationDetails} />
          </div>
        </div>
        <footer class="bg-light text-center text-lg-start">
          <div class="text-center p-3">
            © 2021 Copyright: Location Finder
          </div>
        </footer>
      </div>
    );
  }
}

export default App;