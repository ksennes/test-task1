import React from 'react';

import './add-buton.scss';

import add from '../../../../img/add.png';

export const AddButton = ({onClick}) => {
    return(
        <div className='add-button' onClick={onClick}>
            <img src={add}/>
        </div>
    )
}