import React from 'react';
import {Badge} from 'reactstrap';

export default class Contextual extends React.Component {
    render() {
        return (
            <div className="badge-group">
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="danger">Danger</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="info">Info</Badge>
                <Badge color="light">Light</Badge>
                <Badge color="dark">Dark</Badge>
            </div>
        );
    }
}