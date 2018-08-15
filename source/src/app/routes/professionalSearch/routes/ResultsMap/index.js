import React, {Component} from 'react';
import { connect } from 'react-redux';

import raf from "raf";

import ContainerHeader from 'components/ContainerHeader';
import CardBox from 'components/CardBox';
import ProfessionalsMap, { geolocation } from 'components/JelpZone/ProfessionalsMap';

import IntlMessages from 'util/IntlMessages';

import FiltersMap from "./FiltersMap";

import {
    fetchProfessionalsById,
    fetchProfessionalsByFilters
} from 'actions/Professionals';

class ResultsMap extends Component {

  constructor() {
    super();
    this.state = {
      professionIds: [],
      distance: 1,
      center: null,
      content: null,
      radius: 6000,
      markers: [],
    };
  }

  isUnmounted = false;

  componentWillMount(){
    // decode profession ids list -> refer to professionalSearch/routes/Index (DELETED)
    /* const professionIds = atob(this.props.match.params.hashedIds).split("-"),
          distance = this.props.match.params.distance;

    this.setState({
      professionIds: professionIds,
      distance: distance
    }) */

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.distance !== this.props.distance && this.center !== null){
      //Perform some operation
      this.setState({distance: nextProps.distance });
      this.props.fetchProfessionalsByFilters({lat: this.state.center.lat, lng: this.state.center.lng, distance: nextProps.distance});
    }
  }

  componentDidMount() {

    // growing reference point
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
        content: `I'm here.`
      });

      // populate professionals
      // create an action that is passed when we connect the component with the container (logic)
      // this fires an action that is catched by root sagas
      this.props.fetchProfessionalsByFilters({lat: position.coords.latitude, lng: position.coords.longitude, distance: this.state.distance});

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

        {/* Filters */}
        <div className="row">
          <CardBox styleName="col-lg-12">
            <FiltersMap />
          </CardBox>
        </div>

        {/* Filters */}
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
              markers={this.props.allProfessionals}
            />
          </CardBox>
        </div>
      </div>
    );
  }

};

const mapStateToProps = ({professionalsSearch}) => {
  const { allProfessionals, filterDistance } = professionalsSearch;

  return {
    allProfessionals,
    distance: filterDistance,
  }
};


export default connect(mapStateToProps, {
  fetchProfessionalsById,
  fetchProfessionalsByFilters,
})(ResultsMap);
