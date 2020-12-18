import React from 'react';
import cssClass from './Logo.module.css'

const Logo = (props) => {
    return (
        // <div className="Logo">
        <div className={cssClass.TheLogo}>
            JAB
        </div>
    );
}

export default Logo;
