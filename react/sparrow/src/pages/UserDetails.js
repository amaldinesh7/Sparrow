import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UserContent from '../components/users/UserContent';
import MainNavigation from "../components/shared/Navigation/MainNavigation";


class UserDetails extends React.Component {

  uId = parseInt(this.props.match.params.id);   
  items = this.props.users.filter(users => users.id === this.uId);

  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <UserContent items={this.items} />
      </React.Fragment>
    )
  }
};

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(withRouter(UserDetails));
