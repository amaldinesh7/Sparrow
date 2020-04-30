import React from "react";
import { connect } from 'react-redux';

import UsersList from "../components/users/UsersList";
import MainNavigation from "../components/shared/Navigation/MainNavigation"

import { fetchUsers } from '../redux/actions'


class Users extends React.Component {
  state = { count: 'nothing' }

  countUpdate = () => {
    this.setState({count:this.props.users.length})
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    // this.countUpdate();
    console.log(this.state.count);
    return (
      <React.Fragment>
        <MainNavigation />
        <UsersList items={this.props.users} count={this.state.count} />
      </React.Fragment>
    );
  }

}
const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(Users);
