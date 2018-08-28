import { connect } from 'react-redux';

import UserProfile from 'components/JelpZone/userProfile/components/UserProfile';

import {
  fetchLoggedInUserInformation as populateUserInfo,
} from 'actions/User';

const mapStateToProps = ({ profile }) => {
    const {
      information,
      loading,
      errorMessage,
      showMessage
    } = profile;
    return {
      information,
      loading,
      errorMessage,
      showMessage
    }
};


export default connect(mapStateToProps, {
    populateUserInfo,
})(UserProfile);