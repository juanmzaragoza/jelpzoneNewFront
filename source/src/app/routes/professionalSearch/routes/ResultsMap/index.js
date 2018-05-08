import React, {Component} from 'react';

import ContainerHeader from 'components/ContainerHeader';
import CardBox from 'components/CardBox';
import ProfessionalsMap, { geolocation } from 'components/ProfessionalsMap';

import IntlMessages from 'util/IntlMessages';

import raf from "raf";

export default class ResultsMap extends Component {

    constructor() {
      super();
      this.state = {
        center: null,
        content: null,
        radius: 6000,
        markers: [],
      };
    }

    isUnmounted = false;

    componentDidMount() {
      const tick = () => {
        if (this.isUnmounted) {
          return;
        }
        this.setState({radius: Math.max(this.state.radius - 20, 0)});

        if (this.state.radius > 200) {
          raf(tick);
        }
      };
      geolocation.getCurrentPosition((position) => {
        if (this.isUnmounted) {
          return;
        }
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          content: `I'm here.`,
        });

        raf(tick);
      }, (reason) => {
        if (this.isUnmounted) {
          return;
        }
        this.setState({
          center: {
            lat: 60,
            lng: 105,
          },
          content: `Error: The Geolocation service failed (${reason}).`,
        });
      });
    }

    componentWillUnmount() {
      this.isUnmounted = true;
    }

  render(){
    const { match } = this.props;
    return (
      <div className="animated slideInUpTiny animation-duration-3">
        <ContainerHeader title={<IntlMessages id="sidebar.map.geoLocation"/>} match={match}/>

        <div className="row">
          <CardBox styleName="col-lg-12">
            <ProfessionalsMap 
              containerElement={
                <div className="embed-responsive embed-responsive-21by9"/>
              }
              mapElement={<div className="embed-responsive-item"/>}
              center={this.state.center}
              content={this.state.content}
              radius={this.state.radius}
            />
          </CardBox>
        </div>
      </div>
    );
  }

};