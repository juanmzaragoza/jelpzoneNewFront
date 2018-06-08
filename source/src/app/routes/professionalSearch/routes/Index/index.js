import React, {cloneElement, Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import Slide from 'material-ui/transitions/Slide';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText,} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import WorkIcon from 'material-ui-icons/Work';
import DeleteIcon from 'material-ui-icons/Delete';

import {ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Button from 'material-ui/Button';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

import _ from 'lodash';

import {
    fetchProfessions,
} from 'actions/Professions';

function generate(element) {
  return [0, 1, 2].map(value =>
    cloneElement(element, {
      key: value,
    }),
  );
}

class Index extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedProfessions: [],
      selectedServices: []
    }
  }

  componentWillMount() {
    this.props.fetchProfessions();
  }

  onCheck = id => (event, checked) => {

    // if exists -> delete it
    let selectedProfessions = this.state.selectedProfessions;
    let index = selectedProfessions.indexOf(id);
    if(index >= 0){
      selectedProfessions.splice(index, 1);
    } else{
      selectedProfessions.push(id);
    }

    // filter all professions objects
    const filteredProfessions = this.props.allProfessions.filter((profession) => {
      return selectedProfessions.includes(profession.id);
    });

    // first, merge all object by key and then flat the array of services
    const res = _.mapValues(filteredProfessions[0], (value, key) => _.map(filteredProfessions, key));
    const selectedServices = _.flatten(res.services);

    this.setState({
      selectedProfessions: selectedProfessions,
      selectedServices: selectedServices
    });

  }

  render(){

    const {
      match,
      allProfessions
    } = this.props;

    const {
      selectedServices
    } = this.state;

    return (
        <div className="app-wrapper">
            <ContainerHeader title={<IntlMessages id="sidebar.jelpzone.search.title"/>} match={match}/>

            <div className="row">
              <Grid container>
                <Grid item xs={12}>
                  <Grid container justify={'flex-end'}>
                    <ButtonGroup vertical={this.props.isVertical}>
                      <NavLink to="/app/search/map">
                        <Button variant="raised" color="primary" className="jr-btn text-white jr-btn-lg">
                          <span><IntlMessages id="sidebar.jelpzone.search.title"/></span>
                          <i className="zmdi zmdi-search zmdi-hc-fw"/>
                        </Button>
                      </NavLink>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </div>

            <div className="row">
                <CardBox
                    styleName="col-lg-12 col-12"
                    cardStyle="p-0 bg-transparent no-shadow"
                >
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <h3 className="text-gray lighten-2 my-3">
                        Professional Type
                      </h3>
                      <div className="jr-card p-0 m-1">
                          <List dense={false}>
                              {allProfessions.map((profession,index) =>
                                <ListItem key={profession.id} button>
                                  <Checkbox
                                    tabIndex={-1}
                                    disableRipple
                                    onChange={this.onCheck(profession.id)}
                                  />
                                  <Avatar 
                                  src={"/professions-svg/" + profession.icon + ".svg"}
                                  />
                                  <ListItemText
                                      primary={ profession.name.charAt(0).toUpperCase() + profession.name.slice(1).toLowerCase() }
                                  />
                                </ListItem>
                              )}
                          </List>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {selectedServices.length?
                        <Slide in={true} direction="right">
                          <div>
                            <h3 className="text-gray lighten-2 my-3">
                                Services List
                            </h3>
                            <div className="jr-card p-0 m-1">
                              <List dense={true}>
                                {selectedServices.map((serviceName,index) =>
                                  <ListItem key={index} button>
                                    <ListItemIcon>
                                        <WorkIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={serviceName}
                                    />
                                  </ListItem>,
                                )}
                              </List>
                            </div>
                          </div>
                        </Slide>
                        :
                        null
                      }
                    </Grid>
                  </Grid>
                </CardBox>
            </div>
        </div>
    );
  }
};

const mapStateToProps = ({professionalsSearch}) => {
    const { allProfessions } = professionalsSearch;

    return {
        allProfessions
    }
};


export default connect(mapStateToProps, {
  fetchProfessions,
})(Index);
