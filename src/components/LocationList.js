import React, { Component } from 'react';
import { Locations } from '../utils/data';


class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: {},
            cities: Locations.detail
        }
    }
    getLocationData = (e) => {
        this.setState({ selectedCity: e.target.value }, () => {
            let selectedCity = Locations.detail.filter((el) => parseInt(el.id) === parseInt(e.target.value));
            if (selectedCity.length === 1) {
                this.props.getLocation(selectedCity[0]);
            }
        })
    }
    render() {
        let { selectedCity, cities } = this.state;
        let { locationDetails } = this.props;
        return (
            <div className="locationFinder">
                <div className="form-group">
                    <label htmlFor="locationList">Cities</label>
                    <select className="form-control" value={selectedCity} onChange={(event) => this.getLocationData(event)} id="locationList">
                        <option value=''>--Select City--</option>
                        {cities.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>{item.city}</option>
                            )
                        })
                        }
                    </select>
                    {locationDetails.latitude && locationDetails.longitude &&
                        <ul className="list-group location-details">
                            <li className="list-group-item">Place Name: {locationDetails['place name']}</li>
                            <li className="list-group-item">Postal Code: {locationDetails['post code']}</li>
                            <li className="list-group-item">Latitude: {locationDetails['latitude']}</li>
                            <li className="list-group-item">Longitude: {locationDetails['longitude']}</li>
                        </ul>
                    }
                </div>
            </div >
        );
    }
}

export default LocationList;