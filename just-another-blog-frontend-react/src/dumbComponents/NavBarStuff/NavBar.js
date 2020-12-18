import React, {useState} from 'react';
import cssClass from './NavBar.module.css';
import {
    Link
  } from "react-router-dom";


const NavBar = (props) => {
    const [whichNavItemHasBeenClicked, setWhichNavItemHasBeenClicked] = useState("");
    let textForFirstNavBarItem = "All Things Software Engineering";
    let textForSecondNavBarItem = "Everything else…";
    let textForThirdNavBarItem = "Write your own article";

    if (whichNavItemHasBeenClicked === "Software Engineering"){
        textForFirstNavBarItem = <b><i>All Things Software Engineering</i></b>
    }
    else if (whichNavItemHasBeenClicked === "Everything else…"){
        textForSecondNavBarItem = <b><i>Everything else…</i></b>
    }
    else if (whichNavItemHasBeenClicked === "User Creates Article"){
        textForThirdNavBarItem = <b><i>Write your own article</i></b>
    }

    return (
        <div
        style=
        {{
            // backgroundColor: "#703B09",
            // backgroundImage: "linear-gradient(45deg, #01425c,   #60cdf7)",
            backgroundImage: "linear-gradient(225deg, #0274a1,   #60cdf7)",
            order: 2
        }}
        >
            {/* <DifferentPages/> */}
            <ul className={cssClass.StuffToTurnTheListHorizontalAndGetRidOfTheListDot}>
                <li className={cssClass.NavBarItem}>
                    {/* <a href="/"
                    >All Things Software Engineering</a> */}
                    <Link to="/swe" onClick={() => setWhichNavItemHasBeenClicked("Software Engineering")}
                    >{textForFirstNavBarItem}</Link>
                </li>
                <li className={cssClass.NavBarItem}>
                    <Link to="/else"
                    onClick={() => setWhichNavItemHasBeenClicked("Everything else…")}
                    >{textForSecondNavBarItem}</Link>
                </li>
                <li className={cssClass.NavBarItem}>
                    <Link to="/userWritingArticle"
                    onClick={() => setWhichNavItemHasBeenClicked("User Creates Article")}
                    >{textForThirdNavBarItem}</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
