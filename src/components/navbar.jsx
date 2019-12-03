// import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
// import data from "../json/home-data.json";
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className=" navbar navbar-expand-sm navbar-light ">
//         <div className="container">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">

//               {data.menu.data.map(res => {
//                 return (
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to={res["linkPage"]}>
//                       {res["menuName"]}
//                     </NavLink>
//                   </li>
//                 )
//               })
//               }
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// };

// export default NavBar;

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hdata: []
    };
  };
  componentDidMount = () =>{
    console.log(this.props.d)
  }
  render() {
    return (
      <nav className=" navbar navbar-expand-sm navbar-light ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;