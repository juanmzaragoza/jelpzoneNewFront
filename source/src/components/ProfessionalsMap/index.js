import React, {Component} from "react";

import {Circle, GoogleMap, InfoWindow, withGoogleMap} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import canUseDOM from "can-use-dom";
import raf from "raf";

export const geolocation = (
  canUseDOM && navigator.geolocation ?
    navigator.geolocation :
    ({
      getCurrentPosition(success, failure) {
        failure(`Your browser doesn't support geolocation.`);
      },
    })
);

const ProfessionalsMap = withGoogleMap(props => (
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
      {props.markers && props.markers.map(marker => (
        <Marker
          position={{lat: marker.latitude, lng: marker.longitude}}
          key={marker.photo_id}
        />
      ))}
    </MarkerClusterer>
    
  </GoogleMap>
));

export default ProfessionalsMap;