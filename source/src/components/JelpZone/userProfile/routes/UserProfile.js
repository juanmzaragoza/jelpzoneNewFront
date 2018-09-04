import { connect } from 'react-redux';

import UserProfile from 'components/JelpZone/userProfile/components/UserProfile';

import {
  fetchUserInformationById,
} from 'actions/User';

const mapStateToProps = ({ userProfileInformation }, ownProps) => {
  const {
    information,
    loading,
    errorMessage,
    showMessage
  } = userProfileInformation;
  return {
    isMyProfile: false,
    userId: ownProps.match.params.userId,
    information,
    loading,
    errorMessage,
    showMessage
  }
};


export default connect(mapStateToProps, {
    populateUserInfo: fetchUserInformationById,
})(UserProfile);