import React from 'react';
import Aux from '../../HOCs/Aux';
import Logo from './Logo';
import NavBar from '../NavBarStuff/NavBar';
import cssClass from './Layout.module.css'

const Layout = (props) => {
    return (
        <Aux>
            {/* B4: The Stuff that goes into every page */}
            <div className={cssClass.LogoAndNavBar}>
                <Logo/>
                <NavBar/>
                <div id="HiddenDivForStylingPurposes" 
                style=
                {{
                    order: 3,
                    width: 100
                }}
                ></div>
            </div>
            {/* AFTER: The Stuff that goes into every page */}
            {props.children} {/* The individual pages */}
        </Aux>
    );
}

export default Layout;
