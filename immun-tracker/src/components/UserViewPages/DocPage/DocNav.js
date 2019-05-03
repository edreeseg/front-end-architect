import React, { Component } from 'react';
import { connect } from 'react-redux';

//Bootstrap
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { logout } from '../../../actions/actions';

//React Router
import { Link } from 'react-router-dom';

//Style
import { DocNavbarWrapper } from './DocWrapper';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';

class DocNav extends Component {
  state = {
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  logout() {
    localStorage.removeItem('token');
    this.props.logout();
  }

  render() {
    return (
      <DocNavbarWrapper>
        <Navbar light>
          <Link to="/doctorhub" className="logo mr-auto">
            Immunization Tracker <FontAwesomeIcon icon={faSyringe} />
          </Link>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="link" to="/components/">
                  View Patients
                </Link>
              </NavItem>
              <NavItem>
                <Link className="link" onClick={this.logout} to="/login">
                  {' '}
                  Logout{' '}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </DocNavbarWrapper>
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
  { logout }
)(DocNav);
