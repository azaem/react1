import React from "react";

import logo from "../componens/image/logo.svg"
const Header =()=>{
    return(
       <div className="header">
           <div className="container">
               <div className="header-content">
                   <div className="left">
                       <a href="">
                           <img src={logo} alt=""/>
                       </a>
                   </div>

                   <div className="right">

                       <ul className="nav-links">
                           <li><a href="">Home</a></li>
                           <li><a href="">Recipes</a></li>
                           <li><a href="">Meat</a></li>
                           <li><a href="">About</a></li>
                           <li><a href="">Blog</a></li>
                           <li><a href="">Support</a></li>

                       </ul>

                       <button className="btn">Sign in</button>
                       <button className="bnt">Request demo</button>

                   </div>
               </div>
           </div>
       </div>
    )
}

export  default Header