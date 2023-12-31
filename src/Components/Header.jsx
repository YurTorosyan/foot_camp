import React from "react"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"
import "./Header.scss"
import {
  faFutbol,
  faPeopleGroup,
  faStreetView,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrap">
          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="LOGO" />
            </NavLink>
          </div>
          <nav className="header__nav">
            <NavLink className="header__link" to="/fixtures">
              <FontAwesomeIcon icon={faFutbol} />
              <p>Fixtures</p>
            </NavLink>
            <NavLink className="header__link" to="/leagues">
              <FontAwesomeIcon icon={faTrophy} />
              <p>Leagues</p>
            </NavLink>
            <NavLink className="header__link" to="/teams">
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>Teams</p>
            </NavLink>
            <NavLink className="header__link" to="/players">
              <FontAwesomeIcon icon={faStreetView} />
              <p>Players</p>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
