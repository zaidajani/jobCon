import React from "react";

function Navbar() {
  React.useEffect(() => {
    const burger = document.querySelector(".navbar-burger");

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      document.querySelector('.navbar-menu').classList.toggle('is-active');
    });
  });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="jobcon.jpg" width="112" height="28" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a
            className="navbar-item"
            href="https://github.com/zaidajani/jobCon"
            target="_blank"
          >
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/about">
                About
              </a>
              <a className="navbar-item" href="/">
                Jobs
              </a>
              <a className="navbar-item" href="/contact">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href="https://github.com/zaidajani/jobCon/issues"
                target="_blank"
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
