import React from 'react';
import IntlMessages from 'util/IntlMessages';

const AppNotification = () => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list">
            <div className="d-flex align-items-center h-100 justify-content-center">
                <IntlMessages id="appNotification.message"/>
            </div>
        </div>
    )
};

export default AppNotification;

