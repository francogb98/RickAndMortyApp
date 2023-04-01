import React from "react";
import { Link, useLocation } from "react-router-dom";

import SearchChar from "./search/SearchChar";

function Nav() {
  const location = useLocation();

  return (
    <div className="navbar navbar-expand-lg navbar-dark fs-4 fw-bold">
      <div className="container-fluid">
        <a href="#" className="navbar-brand text-warning fs-3">
          RICK AND MORTY
        </a>
        <SearchChar></SearchChar>

        {/* BOTON PARA MENU MOVIL */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Mostrar / Ocultar Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Menu de navegacion --> */}
        <div className="collapse navbar-collapse " id="menu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/home"
                className={
                  location.pathname === "/home"
                    ? `nav-link text-primary text-decoration-underline `
                    : `nav-link text-light `
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorites"
                className={
                  location.pathname === "/favorites"
                    ? `nav-link text-primary text-decoration-underline `
                    : `nav-link text-light `
                }
              >
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? `nav-link text-primary text-decoration-underline `
                    : `nav-link text-light `
                }
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
