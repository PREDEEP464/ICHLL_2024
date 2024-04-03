
import React from 'react';


function HeaderItem({ name, Icon, textSize, iconSize }) {
    return (
        <div className={`flex items-center space-x-1 cursor-pointer ${textSize} hover:text-yellow-500` }>
            <Icon size={iconSize} className="hover:text-yellow-500"/>
            <p className='md:inline'>{name}</p>
        </div>
    );
}

export default HeaderItem;
