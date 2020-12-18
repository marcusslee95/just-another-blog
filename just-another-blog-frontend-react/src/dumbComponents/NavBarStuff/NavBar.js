import React from 'react';
import DifferentPages from './DifferentPages';


const NavBar = (props) => {
    return (
        <div
        style=
        {{
            backgroundColor: "#703B09",
            order: 2
        }}
        >
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
