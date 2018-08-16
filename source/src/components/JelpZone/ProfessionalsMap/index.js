import React, {Component} from "react";
import { NavLink } from 'react-router-dom';

import {Circle, GoogleMap, InfoWindow, withGoogleMap, Marker} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import canUseDOM from "can-use-dom";
import raf from "raf";
import _ from "lodash";

import Button from 'material-ui/Button';

import IntlMessages from 'util/IntlMessages';

import ProfessionalInfoWindow from "./ProfessionalInfoWindow";

export const geolocation = (
  canUseDOM && navigator.geolocation ?
    navigator.geolocation :
    ({
      getCurrentPosition(success, failure) {
        failure(`Your browser doesn't support geolocation.`);
      },
    })
);

class ProfessionalsMap extends React.Component {

  constructor() {
    super();
    this.state = {
      activeMarker: null,
    };
  }

  toggleMarkerActive( markerId ) {
    this.setState({
      activeMarker: (this.state.activeMarker == markerId)? null:markerId // if marker is active => close it
    });
  };

  render(){
    const props = this.props;
    return (

      <GoogleMap
        defaultZoom={13}
        center={props.center}
      >
        {/* render my position */}
        {props.center && (
          <InfoWindow position={props.center}>
            <div>{props.content}</div>
          </InfoWindow>
        )}
        {props.center && (
          <Circle
            center={props.center}
            radius={props.radius}
            options={{
              fillColor: 'red',
              fillOpacity: 0.20,
              strokeColor: 'red',
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
        )}

        {/* render markers */}
        <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >
          {props.markers && props.markers.map(marker => {
            if(marker.location){
              return(
                <Marker
                  position={{lat: marker.location.lat, lng: marker.location.lng}}
                  key={marker.id}
                  onClick={() => {
                    this.toggleMarkerActive(marker.id);
                  }}
                >
                  {marker.id === this.state.activeMarker && (
                    <InfoWindow 
                      position={marker.location}
                      options={{ disableAutoPan: false }}>
                      <ProfessionalInfoWindow professional={{
                          name:  marker.username,
                          destination: 'Co-Founder & CEO',
                          description: 'Who I am, from where I come, to where I am going...',
                          chipList: _.map(marker.professions, function(profession){ return profession.name; }),
                          image: 'http://demo.g-axon.com/jumbo-react/assets/images/userAvatar/domnic-harris.jpg',
                          content: <div>
                            <NavLink to={`/app/profile/${marker.id}`}>
                              <Button color="secondary"><IntlMessages id="sidebar.jelpzone.search.viewProfile.button"/></Button>
                            </NavLink>
                            <Button color="primary"><IntlMessages id="sidebar.jelpzone.search.sendBudget.button"/></Button>
                          </div>
                      }}/>
                    </InfoWindow>
                  )}
                </Marker>
              )
            }
          })}
        </MarkerClusterer>

      </GoogleMap>
    )
  }

}

export default withGoogleMap(ProfessionalsMap);
