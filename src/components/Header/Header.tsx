import Icon from 'dmf_ui/Icon';
import Nav from 'dmf_ui/nav/Nav';
import NavItem from 'dmf_ui/nav/NavItem';
import NavLink from 'dmf_ui/nav/NavLink';
import Navbar from 'dmf_ui/navbar/Navbar';
import NavbarBrand from 'dmf_ui/navbar/NavbarBrand';
import NavbarCollapse from 'dmf_ui/navbar/NavbarCollapse';
import NavbarContainer from 'dmf_ui/navbar/NavbarContainer';
import NavbarInput from 'dmf_ui/navbar/NavbarInput';
import NavbarToggler from 'dmf_ui/navbar/NavbarToggler';
import NavbarWrapper from 'dmf_ui/navbar/NavbarWrapper';
import React, { useState } from 'react';
const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <>
      <header>
        <Navbar navbar>
          <NavbarContainer>
            <NavbarWrapper>
              <NavbarBrand className="text-white">DMF</NavbarBrand>
              <NavbarToggler
                color="primary"
                onClick={() => setOpenNavbar(!openNavbar)}
                ripple="light"
              />
            </NavbarWrapper>

            <NavbarCollapse open={openNavbar}>
              <Nav leftSide>
                <NavItem active={true}>
                  <Icon name="language" size="xl" />
                  Discover
                </NavItem>
                <NavLink href="#navbar">
                  <Icon name="account_circle" size="xl" />
                  Profile
                </NavLink>
                <NavItem>
                  <Icon name="settings" size="xl" />
                  Settings
                </NavItem>
              </Nav>
              <NavbarInput type="text" placeholder="Search here" />
            </NavbarCollapse>
          </NavbarContainer>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
