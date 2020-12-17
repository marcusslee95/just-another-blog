import React from 'react';
import Aux from '../HOCs/Aux';

const Layout = (props) => {
    return (
        <Aux>
            {props.children}
        </Aux>
    );
}

export default Layout;
