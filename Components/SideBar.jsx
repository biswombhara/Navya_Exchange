import React from "react";

const SideBar = () => {
  return (
   <aside className="slide-bar">
    <div className="close-mobile-menu">
     <a href="/" className="tx-close"></a> 
    </div>  

      <nav className="slide-mobile-menu">
        <a href="/" className="header__logo mb-30">
          <img src="assets/img/logo/logo.svg" alt="" srcset=""/>
        </a>
        <div className="header-mobile-search">
          <form action="#" role= "search">
            <input type="text" placeholders="SearchKeywords"/>
            <button type="submit">
              <i className="ti-search"/>
            </button>
          </form>
        </div>

        <ul className="mobile-menu-active">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="#about" className="scrollspy-btn">
              About
            </a> 
            </li> 
          <li>
            <a href="#roadmap" className="scrollspy-btn">
              Roadmap
            </a>
            </li> 
          <li>
            <a href="#team" className="scrollspy-btn">
              Team
            </a>
            </li> 
          <li>
            <a href="#!" className="">
              Blog
            </a>
            </li> 
          <li>
            <a href="#!" className="">
             Get In touch
            </a>
            </li>
        </ul>
      </nav>
  </aside>
  );
};

export default SideBar;