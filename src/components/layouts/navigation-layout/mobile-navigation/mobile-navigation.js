import React from 'react';
import {Link} from 'react-router-dom';

import './mobile-navigation.scss';

export const MobileNavigation = ({navigationList, activeLink, isOpen}) => {
    const activeLinkStyles = {
        color: '#7ed321'
    }

    const openNavigationStyles = {
        transform: 'translateY(77px)'
    }

    return(
        <ul className='options-list__mobile' style={isOpen? openNavigationStyles : null}>
            {navigationList.map((el, index) => {
              return (
                <li key={index}>
                  <Link
                    style={
                      el.title === activeLink ? activeLinkStyles : undefined
                    }
                    to={el.link}
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </ul>
    )
}