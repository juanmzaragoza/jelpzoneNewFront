import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';


import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import IntlMessages from 'util/IntlMessages';

import {
    changeDistanceRadius,
    changeProfession
} from 'actions/SearchMap';

import {
    fetchProfessions,
} from 'actions/Professions';

class FiltersMap extends Component {

	constructor(){
    super();
    this.state = {
      sliderValue: 5,
      professionValue: ""
    }
  }

  componentWillMount() {
    this.props.fetchProfessions();
  }

	onSelectSliderValue = (event, value) => {
		this.setState({sliderValue: value});
		this.props.changeDistanceRadius( value );
	}

	onSelectProfessionValue = (event, value) => {
		this.setState({professionValue: event.target.value});
		this.props.changeProfession( event.target.value );
	}

	render(){

		const {
      sliderValue,
      professionValue
    } = this.state;

    const {
      allProfessions
    } = this.props;

		return (
			<Grid container>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={16}>
            <Grid item xs={10} sm={10}> {/* form radius */}
              <Grid container>
                <InputLabel>Search radius</InputLabel>
                <Slider aria-labelledby="label" value={sliderValue} min={1} max={20} step={3} onChange={this.onSelectSliderValue} />
              </Grid>
            </Grid>
            <Grid item xs={2} sm={2}> {/* selected value */}
              <Grid container>
                <Chip label={sliderValue+" km"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className="w-100">
            <InputLabel htmlFor="profession-filter">Profession</InputLabel>
            <Select
              value={professionValue}
              onChange={this.onSelectProfessionValue}
              input={<Input id="profession-filter"/>}
            >
            	<MenuItem value="">
                  <em>None</em>
              </MenuItem>
            	{allProfessions.map((profession,index) =>
                <MenuItem key={index} value={profession.id}>{profession.name}</MenuItem>
              )}
            </Select>
          </FormControl>
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
  changeProfession,
  fetchProfessions,
})(FiltersMap);