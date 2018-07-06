import React, {Component} from 'react';
import { connect } from 'react-redux';

import ContainerHeader from 'components/ContainerHeader';
import CardBox from 'components/CardBox';
import ProfessionalsMap, { geolocation } from 'components/ProfessionalsMap';

import IntlMessages from 'util/IntlMessages';

import raf from "raf";

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
    // decode profession ids list -> refer to professionalSearch/routes/Index
    const professionIds = atob(this.props.match.params.hashedIds).split("-"),
          distance = this.props.match.params.distance;

    this.setState({
      professionIds: professionIds,
      distance: distance
    })

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
  const { allProfessionals } = professionalsSearch;

  return {
    allProfessionals
  }
};


export default connect(mapStateToProps, {
  fetchProfessionalsById,
  fetchProfessionalsByFilters,
})(ResultsMap);
