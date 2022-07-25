import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%',
  marginTop: '200px'
};

export class MapContainer extends Component {
  render() {
    return ( 
        <div>
            <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={{
                    lat: 13.050423,
                    lng: 77.598391
                    }}
                >
                <Marker position= {{lat:13.050423 , lng:77.598391}}  />
            </Map>

            {/* feedback form */}
            <div>
                <h1>Feedback Form</h1>
            </div>
        </div>
    );
  }
}

export default GoogleApiWrapper({
apiKey: 'AIzaSyCiLM2R3SjTw4VX18F5ktNKc_BoFfnyJRk'
})(MapContainer);
