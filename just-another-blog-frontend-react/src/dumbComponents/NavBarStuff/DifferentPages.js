import React from 'react';
import cssClass from './DifferentPages.module.css';

const DifferentPages = (props) => {
    return (
        <ul className={cssClass.AppliesToWholeComponent}>
            <li className={cssClass.DifferentPage}>
                <a href="/">All Things Software Engineering</a>
            </li>
            <li className={cssClass.DifferentPage}>
                <a href="/">Everything else…</a>
            </li>
            <li className={cssClass.DifferentPage}>
                <a href="/">Write your own article</a>
            </li>
        </ul>
    );
};

export default DifferentPages;