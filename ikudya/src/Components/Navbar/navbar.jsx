import React from 'react';
import S from './navbar.module.css';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';

const NavBar = ({toggle}) => {
    return (
        <nav>
            <div className={S.NavbarContainer}>
                <LinkR to="Home" className={S.NavLogo}>Ikudya</LinkR>
                    <div className={S.MobileIcon} onClick={toggle} >
                        <FaBars />
                    </div>
                <ul>
                    <li >
                        <LinkS to="About" className={S.NavLinks}>About</LinkS>
                    </li>
                    <li >
                        <LinkS to="Skills" className={S.NavLinks}>Skills</LinkS>
                    </li>
                    <li >
                        <LinkS to="Migration" className={S.NavLinks}>Migration</LinkS>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default NavBar;