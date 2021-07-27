import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LocationMap = (props) => {
    let mapPosition = { lat: 33.9382, lng: -84.5403 }; //Default center points - Can be changed if needed
    let zoom = 5;
    let markerDetails = { // Marker lat and lng values
        position: [
            33.9382,
            -84.5403
        ],
        city: 'Welcome to Marietta, US'
    }
    if (props.locationDetails.latitude && props.locationDetails.longitude) {
        markerDetails = {
            position: [
                props.locationDetails.latitude,
                props.locationDetails.longitude
            ],
            city: `Welcome to ${props.locationDetails['place name']}, US`
        }

    }
    return (
        <div className="leaflet-container">
            <MapContainer
                className="markercluster-map"
                center={mapPosition}
                zoom={zoom}
                maxZoom={30}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={markerDetails.position}>
                    <Popup>
                        {markerDetails.city}
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    );
}

export default LocationMap;