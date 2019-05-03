import React from 'react';
import { connect } from 'react-redux';

// This is an example of how you could dynamically change what's rendered based on the user's role (provider vs not provider)

class Hub extends React.Component {
  render() {
    return this.props.user.providerId ? (
      <div>{/* Code for if they're provider */}</div>
    ) : (
      <div>{/* Code for if they're not */}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  {}
)(Hub);
