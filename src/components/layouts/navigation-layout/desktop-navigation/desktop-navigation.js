import React from 'react';
import {Link} from 'react-router-dom';

import './desktop-navigation.scss';

export const DesktopNavigation = ({navigationList, activeLink}) => {
    const activeLinkStyles = {
        borderBottom: "2px solid #fff",
      };

    return(
        <ul className='options-list__desktop'>
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