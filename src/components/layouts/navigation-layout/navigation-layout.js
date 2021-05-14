import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./navigation-layout.scss";
import logo from "../../../img/logo.png";
import greenLogo from '../../../img/logo1.png';
import burger from '../../../img/menu.png';
import cross from '../../../img/cross.png';
import filter from '../../../img/filter.png';
import activeFilter from '../../../img/filterActive.png';
import { DesktopNavigation } from "./desktop-navigation/desktop-navigation";
import { MobileNavigation } from "./mobile-navigation/mobile-navigation";

export const NavigationLayout = ({ isLogged, activeLink, isFilterOpen, handleFilter }) => {
  const navigationList = [
    { title: "JOGS", link: "/jog" },
    { title: "INFO", link: "/info" },
    { title: "CONTACT US", link: "#"},
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
      setIsOpen(true);
  }

  const handleCloseMenu = () => {
      setIsOpen(false);
  }

  return (
    <div className="navigation-layout" style={isOpen? {backgroundColor:'#fff'} : null}>
      <div className="navigation-layout__logo">
        <img src={isOpen? greenLogo : logo} />
      </div>
      <div className="navigation-layout__options">
        {isLogged ? (
            <>
            <DesktopNavigation navigationList={navigationList} activeLink={activeLink}/>
            <div className='filter__icon'>
              <img src={isFilterOpen ? activeFilter : filter} onClick={handleFilter}/>
            </div>
            <div className='burger' onClick={() => handleOpenMenu()} style={isOpen ? {display: 'none'} : null}>
                <img src={burger}/>
            </div>
            <div className='cross' onClick={() => handleCloseMenu()} style={isOpen ? null: {display: 'none'}}>
                <img src={cross}/>
            </div>
            <MobileNavigation navigationList={navigationList} activeLink={activeLink} isOpen={isOpen}/>
            </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
