import React from 'react';
import cssClass from './NavBar.module.css';
import DifferentPages from './DifferentPages';


const NavBar = (props) => {
    return (
        <div className={cssClass.AppliesToWholeComponent}>
            <DifferentPages/>
        </div>
        // <header className={classes.Toolbar}>
        // <div>Menu</div>
        // <Logo/>
        // <nav>
        //     <DifferentPages/>
        // </nav>
        // </header>
    );
};

export default NavBar;
