import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

class ConfirmationDialog extends Component {
    state = {
        selectedValue: undefined,
    };
    radioGroup = null;
    handleEntering = () => {
        this.radioGroup.focus();
    };
    handleCancel = () => {
        this.props.onClose(this.props.selectedValue);
    };
    handleOk = () => {
        this.props.onClose(this.state.selectedValue);
    };
    handleChange = (event, value) => {
        this.setState({selectedValue: value});
    };

    componentWillMount() {
        this.setState({selectedValue: this.props.selectedValue});
    }

    componentWillUpdate(nextProps) {
        if (nextProps.selectedValue !== this.props.selectedValue) {
            // eslint-disable-next-line react/no-will-update-set-state
            this.setState({selectedValue: nextProps.selectedValue});
        }
    }

    render() {
        const {selectedValue, ...other} = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="xs"
                onEntering={this.handleEntering}
                {...other}
            >
                <DialogTitle>Phone Ringtone</DialogTitle>
                <DialogContent>
                    <RadioGroup
                        innerRef={node => {
                            this.radioGroup = node;
                        }}
                        aria-label="ringtone"
                        name="ringtone"
                        selectedValue={this.state.selectedValue}
                        onChange={this.handleChange}
                    >
                        {options.map(option =>
                            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />,
                        )}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ConfirmationDialog.propTypes = {
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
};
export default ConfirmationDialog;