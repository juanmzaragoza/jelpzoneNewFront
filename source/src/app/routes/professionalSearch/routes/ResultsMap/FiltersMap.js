import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import Button from 'material-ui/Button';
import Slider from '@material-ui/lab/Slider';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';

import IntlMessages from 'util/IntlMessages';

import {
    changeDistanceRadius,
} from 'actions/SearchMap';

class FiltersMap extends Component {

	constructor(){
    super();
    this.state = {
      sliderValue: 5,
    }
  }

	onSelectSliderValue = (event, value) => {
		this.setState({sliderValue: value});
		this.props.changeDistanceRadius( value );
	}

	render(){

		const {
      sliderValue
    } = this.state;

		return (
			<Grid container>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={16}>
            <Grid item xs={6} sm={6}> {/* form radius */}
              <Grid container>
                <label>Search radius</label>
                <Slider aria-labelledby="label" value={sliderValue} min={1} max={20} step={3} onChange={this.onSelectSliderValue} />
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6}> {/* selected value */}
              <Grid container>
                <Chip label={sliderValue+" km"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
		)
	}
};

const mapStateToProps = ({professionalsSearch}) => {
  const { allProfessions } = professionalsSearch;

  return {
    allProfessions
  }
};


export default connect(mapStateToProps, {
  changeDistanceRadius,
})(FiltersMap);