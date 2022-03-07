import React from "react";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import "./Navbar.css";
import SmallNav from "./SmallNav/SmallNav";

const Navbar = () => {
  return (
    <>
      {/* SmallNav */}
      <SmallNav />
      {/* BottomNavbar */}
      <BottomNavbar />
      {/* <!-- Navbar --> */}
      <nav class="navbar  shadow-2-strong navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid px-md-5">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <a class="navbar-brand mt-2 mt-lg-0 fs-6 fs-md-4" href="/">
            {/* <img
          src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        /> */}
            <h5 className="fs-4 text-blue brand-name ">Outfit Delight</h5>
          </a>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}

            {/* <!-- Left links --> */}
            <ul class="navbar-nav ms-lg-5  me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Western Wears
                </a>
                <ul
                  class="dropdown-menu shadow "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/">
                      Category-1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Category-2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Category-3
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Features Products
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            {/* <!-- Right elements --> */}
            <div class="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <a class="text-reset me-3" href="/">
                <i class="fas fa-shopping-cart"></i>
              </a>

              {/* <!-- Notifications --> */}
              <div class="dropdown">
                <a
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    15
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Avatar --> */}
              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="/"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="/">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>

        {/* <!-- Container wrapper --> */}
      </nav>
    </>
  );
};

export default Navbar;
