import React from 'react';
import cssClass from './DifferentPages.module.css';
import {
    Link
  } from "react-router-dom";

const DifferentPages = (props) => {
    return (
        <ul className={cssClass.AppliesToWholeComponent}>
            <li className={cssClass.DifferentPage}>
                {/* <a href="/"
                
                >All Things Software Engineering</a> */}
                <Link to="/swe">All Things Software Engineering</Link>
            </li>
            <li className={cssClass.DifferentPage}>
                {/* <a href="/"
                
                >Everything else…</a> */}
                <Link to="/else…">Everything else…</Link>
            </li>
            <li className={cssClass.DifferentPage}>
                {/* <a href="/"
                
                >Write your own article</a> */}
                <Link to="/userWritingArticle">Write your own article</Link>
            </li>
        </ul>
    );
};

export default DifferentPages;

// class DifferentPages extends Component {
//     state = {
//         whichNavItemHasBeenClicked: "initial"
//     }

//     render () {
//         let navBarItem1 = null;
//         let navBarItem2 = null;
//         let navBarItem3 = null;
//         if (this.state.whichNavItemHasBeenClicked === "initial") {
//             navBarItem1 = (
//                 <li className={cssClass.DifferentPage}>
//                     <button
//                     onClick={() => this.setState({whichNavItemHasBeenClicked: "Software Engineering"})}
//                     >All Things Software Engineering</button>
//                     {/* <a href="/"
//                     onClick={() => setWhichNavItemHasBeenClicked("Software Engineering")}
//                     >All Things Software Engineering</a> */}
//                 </li>
//             );
//             navBarItem2 = (
//                 <li className={cssClass.DifferentPage}>
//                     <button
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "Everything else…"})}
//                         >Everything else…</button>
//                 </li>
//             );
//             navBarItem3 = (
//                 <li className={cssClass.DifferentPage}>
//                     <button
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "User Creates Article"})}
//                         >Write your own article
//                     </button>
//                 </li>
//             );
//         }
//         else if (this.state.whichNavItemHasBeenClicked === "Software Engineering") {
//             navBarItem1 = (
//                 <li className={cssClass.DifferentPage}
//                 style=
//                     {{
//                         color: 'pink'
//                     }}
//                 >
//                      <p
//                     onClick={() => this.setState({whichNavItemHasBeenClicked: "Software Engineering"})}
//                     >All Things Software Engineering</p>
//                 </li>
//             );
//             navBarItem2 = (
//                 <li className={cssClass.DifferentPage}>
//                     <p
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "Everything else…"})}
//                         >Everything else…</p>
//                 </li>
//             );
//             navBarItem3 = (
//                 <li className={cssClass.DifferentPage}>
//                     <p
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "User Creates Article"})}
//                         >Write your own article
//                     </p>
//                 </li>
//             );
//         }
//         else if (this.state.whichNavItemHasBeenClicked === "Everything else…") {
//             navBarItem1 = (
//                 <li className={cssClass.DifferentPage}>
//                     <p
//                     onClick={() => this.setState({whichNavItemHasBeenClicked: "Software Engineering"})}
//                     >All Things Software Engineering</p>
//                     {/* <a href="/"
//                     onClick={() => setWhichNavItemHasBeenClicked("Software Engineering")}
//                     >All Things Software Engineering</a> */}
//                 </li>
//             );
//             navBarItem2 = (
//                 <li className={cssClass.DifferentPage}
//                 style=
//                     {{
//                         color: 'pink'
//                     }}
//                 >
//                     <p
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "Everything else…"})}
//                         >Everything else…</p>
//                 </li>
//             );
//             navBarItem3 = (
//                 <li className={cssClass.DifferentPage}>
//                     <p
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "User Creates Article"})}
//                         >Write your own article
//                     </p>
//                 </li>
//             );
//         }
//         else if (this.state.whichNavItemHasBeenClicked === "User Creates Article") {
//             navBarItem1 = (
//                 <li className={cssClass.DifferentPage}>
//                     <p
//                     onClick={() => this.setState({whichNavItemHasBeenClicked: "Software Engineering"})}
//                     >All Things Software Engineering</p>
//                     {/* <a href="/"
//                     onClick={() => setWhichNavItemHasBeenClicked("Software Engineering")}
//                     >All Things Software Engineering</a> */}
//                 </li>
//             );
//             navBarItem2 = (
//                 <li className={cssClass.DifferentPage}>
//                     <p
//                         onClick={() => this.setState({whichNavItemHasBeenClicked: "Everything else…"})}
//                         >Everything else…</p>
//                 </li>
//             );
//             navBarItem3 = <li className={cssClass.DifferentPage}
//                 style=
//                     {{
//                         color: 'pink'
//                     }}
//             >
//                 <p
//                     onClick={() => this.setState({whichNavItemHasBeenClicked: "User Creates Article"})}
//                     >Write your own article
//                 </p>
//             </li>
//         }

//         return (
//         <ul className={cssClass.AppliesToWholeComponent}>
//             {navBarItem1}
//             {navBarItem2}
//             {navBarItem3}
//         </ul>);
//     }

// }
// export default DifferentPages;

