import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection,Logo,LogoText,UlList,listItem,Anchor} from './style.js';

const  Navbar =()=> {
  return (
    <NavbarSection>
                  <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <listItem><Link to="/">Home</Link></listItem>
                    <listItem><Anchor href="#">Portfolio</Anchor></listItem>
                    <listItem><Anchor href="#">Resume</Anchor></listItem>
                    <listItem><Anchor href="#">About</Anchor></listItem>
                    <listItem><Link to="/Contact">Contact</Link></listItem>
                </UlList>
            </div>
    </NavbarSection>

  );
}

export default Navbar;
