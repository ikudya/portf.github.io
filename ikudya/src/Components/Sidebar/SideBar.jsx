import React from 'react';
import S from  './SideBar.module.css';
import {FaTimes} from "react-icons/fa";
import {Link as LinkS} from 'react-scroll';
import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top:0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const SideBar = ({isOpen, toggle}) => {
    return (
        <Aside isOpen={isOpen} onClick={toggle}>
            <div className={S.Icon} onClick={toggle}>
                <FaTimes className={S.CloseIcon}/>
            </div>
            <div className={S.SideBarWrapper}>
                <ul className={S.UlSideBar}>
                    <LinkS className={S.LinkS} onClick={toggle} to='about'>About</LinkS>
                    <LinkS className={S.LinkS} onClick={toggle} to='Skills'>Skills</LinkS>
                    <LinkS className={S.LinkS} onClick={toggle} to='Migration'>Migration</LinkS>
                </ul>

            </div>
        </Aside>
    )
}
export default SideBar;