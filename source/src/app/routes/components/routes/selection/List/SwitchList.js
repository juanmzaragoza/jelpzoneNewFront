import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';


class SwitchList extends Component {
    state = {
        checked: ['a'],
    };

    handleToggle = (event, value) => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <List subheader={<ListSubheader className="position-static">{this.props.title}</ListSubheader>}>

                <ListItem>
                    <ListItemText primary="Enable Primary Color"/>
                    <ListItemSecondaryAction>
                        <Switch
                            classes={{
                                checked: 'text-primary',
                                bar: 'bg-primary',
                            }}
                            onClick={event => this.handleToggle(event, 'a')}
                            checked={this.state.checked.indexOf('a') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>

                    <ListItemText primary="Enable Secondary Color"/>
                    <ListItemSecondaryAction>
                        <Switch
                            classes={{
                                checked: 'text-secondary',
                                bar: 'bg-secondary',
                            }}
                            onClick={event => this.handleToggle(event, 'b')}
                            checked={this.state.checked.indexOf('b') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                    <ListItemText primary="Enable Dark Grey Color"/>
                    <ListItemSecondaryAction>
                        <Switch
                            classes={{
                                checked: 'text-dark',
                                bar: 'bg-dark',
                            }}
                            onClick={event => this.handleToggle(event, 'c')}
                            checked={this.state.checked.indexOf('c') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

            </List>
        );
    }
}


export default SwitchList;