import React from 'react'
import './header.css'
import dashboard from '../../../assets/images/dashboard.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="nestlypay__header section__padding">
      <div className="nestlypay__header-content">
        <div className="nestlypay__header-contentstart"></div>
        <h1>
          Connecting Businesses for <br />
          Simplified Payments.
        </h1>
        <h4>
          Create and send invoices, manage your finance, track sales, and <br />
          get paid faster
        </h4>
        <div className="nestlypay__header-content__input">
          <Link to="/create-free-invoice">
            <button type="button">Create Free Invoice</button>
          </Link>
        </div>
      </div>
      <div class="nestlypay__header-content-image">
        <img src={dashboard} alt="dashboard" />
      </div>
    </div>
  )
}

export default Header
