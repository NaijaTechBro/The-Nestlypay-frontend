import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import { Link } from 'react-router-dom'

const Menu = () => <></>

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="nestlypay__navbar">
      <div className="nestlypay__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nestlypay__navbar-links_container">
        <Menu />
      </div>
      <div className="nestlypay__navbar-sign">
        <button type="button">
          <Link to="/account-type">Sign In</Link>
        </button>
      </div>
      <div className="nestlypay__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nestlypay__navbar-menu_container scale-up-center">
            <div className="nestlypay__navbar-menu_container-links">
              <Menu />
              <div className="nestlypay__navbar-menu_container-links-sign">
                <button type="button">
                  <Link to="/account-type">Sign In</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
