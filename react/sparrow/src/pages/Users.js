import React from "react";
import { connect } from 'react-redux';

import UsersList from "../components/users/UsersList";
import MainNavigation from "../components/shared/Navigation/MainNavigation"

import { fetchUsers } from '../redux/actions'


class Users extends React.Component {
  state = {count : 'nothing'}

  // countUpdate = () => {
  //   this.setState({count:this.props.users.length})
  // }

  componentDidMount() {
    this.props.fetchUsers();
    // this.countUpdate();
  }

  render() {
    // console.log(this.props.users);
    return (
      <React.Fragment>
        <MainNavigation />
        <UsersList items={this.props.users} count={this.props.users.length} />
      </React.Fragment>
    );
  }

}
const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(Users);
