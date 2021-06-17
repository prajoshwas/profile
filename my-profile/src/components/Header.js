import React, {useState,useRef}from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBIcon
} from "mdbreact";
import Modal from '../components/Modal';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = (props) => {

    const[collapse, isOpen] = useState('');
    const modal = useRef();
    const toggleCollapse = () => {
    isOpen(!collapse);
    }
        return(
        <Router>
        <Modal ref={modal} />
        <MDBNavbar dark fixed="top" expand="md" 
        transparent={true} 
        scrolling={true} 
        color="young-passion-gradient" 
        scrollingNavbarOffset={600}>
        <MDBNavbarBrand>
            <strong className="white-text">Profile</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse" isOpen={collapse} navbar>
            <MDBNavbarNav left>
            <MDBNavItem>
                <MDBNavLink to="/profile">
                <MDBIcon icon="home" className="pr-2" size='lg'></MDBIcon>
                <span style={{fontSize:'16px'}}>Home</span>
                </MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem onClick={() => modal.current.toggle()}>
                <MDBNavLink to="#">
                <MDBIcon icon="envelope" className="pr-2" size="lg"></MDBIcon>
                <span style={{fontSize:'16px'}}>Contact Me</span>
                </MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        </Router>
        );
}

export default Header;