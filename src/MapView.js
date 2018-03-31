import React, { Component }from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCa-r58Ki6V8t9wq1vGZBkhmJkIhiM0d04&v=3",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 54px)` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 40.7413549, lng: -73.9980244 }}
    >
    {props.placeDetail? props.placeDetail.map(place => (
      <Marker
        key={place.id}
        position={{ lat: place.location.lat, lng: place.location.lng }}
        animation={window.google.maps.Animation.BOUNCE}
        >
        <InfoBox>
          <div className="card">
            <div className="card-header" style={{ fontSize: `1rem`, fontColor: `#08233B` }}>
              {place.name}
            </div>
            <div className="card-block">
              <h6>Address</h6>
              <p>{place.location.formattedAddress}</p>
              <h6>Phone</h6>
              <p>{place.contact.formattedPhone}</p>
              <h6>Twitter</h6>
              <p>{place.contact.twitter}</p>
              <h6>Facebook</h6>
              <p>{place.contact.facebookName}</p>
            </div>
          </div>
        </InfoBox>
      </Marker>
    )):(null)}
    {props.places.map(place => (
        <Marker
          key={place.id}
          position={{ lat: place.location.lat, lng: place.location.lng }}
          onClick={() => props.onMarkerClick(place.id)}
          >
        </Marker>
      ))}
  </GoogleMap>
));

class MapView extends Component {
  state = {
    selectId: ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectId: nextProps.selectPlace.id
    });
  }

  handleMarkerClick = (selectId) => {
    this.setState({ selectId });
  }

  render() {
    const { places } = this.props;
    const { selectId } = this.state;

    let renderPlaces;
    let clickPlace;

    // If mark was click, render markers
    if(selectId){
      renderPlaces = places.filter(place => place.id !== selectId);
      clickPlace = places.filter(place=>place.id === selectId);
    } else {
      renderPlaces = places;
    }

    return (
      <Map
        onMarkerClick={this.handleMarkerClick}
        isOpen={this.state.isOpen}
        places={renderPlaces}
        placeDetail={clickPlace}
      />
    );
  }
}

export default MapView;
