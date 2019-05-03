import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { Footer } from './PNavbarWrapper'

import { Link } from "react-router-dom";

class PatientFooter extends Component {
    render() {
        return (
           <Footer>
        
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Add Patient</NavLink>
          </NavItem>
          <NavItem>
          <Link className='nav-link' onClick={this.logout} to='/login'> Logout </Link>
          </NavItem>
        </Nav>
        </Footer>
        );
    }
}

export default PatientFooter;