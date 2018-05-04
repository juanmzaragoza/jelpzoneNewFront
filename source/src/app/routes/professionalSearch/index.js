import React, {cloneElement, Component} from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

import Grid from 'material-ui/Grid';
import List, {ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText,} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';

function generate(element) {
  return [0, 1, 2].map(value =>
    cloneElement(element, {
      key: value,
    }),
  );
}

const ProfessionalSearch = ({match}) => {
    return (
        <div className="app-wrapper">
            <ContainerHeader title={<IntlMessages id="sidebar.jelpzone.search.title"/>} match={match}/>

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
                              {generate(
                                  <ListItem button>
                                    <Checkbox
                                      checked={false}
                                      tabIndex={-1}
                                      disableRipple
                                    />
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary="Secondary text"

                                    />
                                  </ListItem>,
                              )}
                          </List>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h3 className="text-gray lighten-2 my-3">
                          Services List
                      </h3>
                        <div className="jr-card p-0 m-1">
                            <List dense={true}>
                                {generate(
                                    <ListItem button>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary="Secondary text"
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                  </Grid>
                </CardBox>
            </div>
        </div>
    );
};

export default ProfessionalSearch;