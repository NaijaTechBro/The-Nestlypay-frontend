import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style'

import user from '../../assets/images/user.png'
import logo from '../../assets/images/nestlypay-lg.png'

function DashboardSideBar(props) {
  const navShow = () => {
    document.getElementById('the-xmark').style.display = 'block'
    document.getElementById('the-barmark').style.display = 'none'
    document.getElementById('personaldashboard--sidebar').style.display =
      'block'
  }

  const navHide = () => {
    document.getElementById('the-xmark').style.display = 'none'
    document.getElementById('the-barmark').style.display = 'block'
    document.getElementById('personaldashboard--sidebar').style.display = 'none'
  }

  const theUserName = localStorage.getItem('userName')
  const theUserEmail = localStorage.getItem('email')

  if (props.thePage == 'homePage') {
    return (
      <>
        <div
          id="personaldashboard--sidebar"
          className="w3-sidebar w3-bar-block personaldashboard--sidebar w3-animate-left"
        >
          <div className="personaldashboard--logo">
            <i
              id="the-xmark"
              onClick={navHide}
              className="fa-solid fa-xmark the-xmark w3-hide-large w3-right"
            ></i>
            <img src="" className="personaldashboard--img1" alt="User" />
            <span className="personaldashboard--t1">
              {/* {theUserName.toUpperCase()} */}
            </span>
            <p className="personaldashboard--t2">{theUserEmail}</p>
          </div>
          <Link className="link" to="/personal/dashboard">
            <button
              id="home"
              className="w3-bar-item personaldashboard--t3 pd--t3a"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Home
            </button>
          </Link>
          <p className="personaldashboard--t3-h">INVOICE</p>
          {/* <Link className="link" to="/activities"><button id="activities" className="w3-bar-item personaldashboard--t3">
                            <span className="personaldashboard--icons"><i className="fa-solid fa-house personaldashboard--icon"></i></span>My Activities
                        </button>
                    </Link> */}
          <Link className="link" to="/myinvoice">
            <button
              id="myinvoices"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              My Invoices
            </button>
          </Link>
          <Link className="link" to="/invoicehistory">
            <button
              id="invoicehistory"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Invoice Status
            </button>
          </Link>
          <p className="personaldashboard--t3-h">TRANSACTIONS</p>
          <Link className="link" to="/clients">
            <button id="clients" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Clients
            </button>
          </Link>
          <Link className="link" to="/paymenthistory">
            <button id="payouts" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Transaction History
            </button>
          </Link>
        </div>

        <i
          id="the-barmark"
          className="fa-solid fa-bars the-barmark w3-hide-large"
          onClick={navShow}
        ></i>
      </>
    )
  } else if (props.thePage == 'myInvoices') {
    return (
      <>
        <div
          id="personaldashboard--sidebar"
          className="w3-sidebar w3-bar-block personaldashboard--sidebar w3-animate-left"
        >
          <div className="personaldashboard--logo">
            <i
              id="the-xmark"
              onClick={navHide}
              className="fa-solid fa-xmark the-xmark w3-hide-large w3-right"
            ></i>
            <img src={logo} className="personaldashboard--img1" alt="User" />
            <span className="personaldashboard--t1">Praise Dominic</span>
            <p className="personaldashboard--t2">dominic@nestlypay.co</p>
          </div>
          <Link className="link" to="/personal/dashboard">
            <button id="home" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Home
            </button>
          </Link>
          <p className="personaldashboard--t3-h">INVOICE</p>
          {/* <Link className="link" to="/activities"><button id="activities" className="w3-bar-item personaldashboard--t3">
                            <span className="personaldashboard--icons"><i className="fa-solid fa-house personaldashboard--icon"></i></span>My Activities
                        </button>
                    </Link> */}
          <Link className="link" to="/myinvoice">
            <button
              id="myinvoices"
              className="w3-bar-item personaldashboard--t3 pd--t3a"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              My Invoices
            </button>
          </Link>
          <Link className="link" to="/invoicehistory">
            <button
              id="invoicehistory"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Invoice Status
            </button>
          </Link>
          <p className="personaldashboard--t3-h">TRANSACTIONS</p>
          <Link className="link" to="/clients">
            <button id="clients" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Clients
            </button>
          </Link>
          <Link className="link" to="/paymenthistory">
            <button id="payouts" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Transaction History
            </button>
          </Link>
        </div>

        <i
          id="the-barmark"
          className="fa-solid fa-bars the-barmark w3-hide-large"
          onClick={navShow}
        ></i>
      </>
    )
  } else if (props.thePage == 'invoiceStatus') {
    return (
      <>
        <div
          id="personaldashboard--sidebar"
          className="w3-sidebar w3-bar-block personaldashboard--sidebar w3-animate-left"
        >
          <div className="personaldashboard--logo">
            <i
              id="the-xmark"
              onClick={navHide}
              className="fa-solid fa-xmark the-xmark w3-hide-large w3-right"
            ></i>
            <img src={logo} className="personaldashboard--img1" alt="User" />
            <span className="personaldashboard--t1">Praise Dominic</span>
            <p className="personaldashboard--t2">dominic@nestlypay.co</p>
          </div>
          <Link className="link" to="/personal/dashboard">
            <button id="home" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Home
            </button>
          </Link>
          <p className="personaldashboard--t3-h">INVOICE</p>
          {/* <Link className="link" to="/activities"><button id="activities" className="w3-bar-item personaldashboard--t3">
                            <span className="personaldashboard--icons"><i className="fa-solid fa-house personaldashboard--icon"></i></span>My Activities
                        </button>
                    </Link> */}
          <Link className="link" to="/myinvoice">
            <button
              id="myinvoices"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              My Invoices
            </button>
          </Link>
          <Link className="link" to="/invoicehistory">
            <button
              id="invoicehistory"
              className="w3-bar-item personaldashboard--t3 pd--t3a"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Invoice Status
            </button>
          </Link>
          <p className="personaldashboard--t3-h">TRANSACTIONS</p>
          <Link className="link" to="/clients">
            <button id="clients" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Clients
            </button>
          </Link>
          <Link className="link" to="/paymenthistory">
            <button id="payouts" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Transaction History
            </button>
          </Link>
        </div>

        <i
          id="the-barmark"
          className="fa-solid fa-bars the-barmark w3-hide-large"
          onClick={navShow}
        ></i>
      </>
    )
  } else if (props.thePage == 'clients') {
    return (
      <>
        <div
          id="personaldashboard--sidebar"
          className="w3-sidebar w3-bar-block personaldashboard--sidebar w3-animate-left"
        >
          <div className="personaldashboard--logo">
            <i
              id="the-xmark"
              onClick={navHide}
              className="fa-solid fa-xmark the-xmark w3-hide-large w3-right"
            ></i>
            <img src={logo} className="personaldashboard--img1" alt="User" />
            <span className="personaldashboard--t1">Praise Dominic</span>
            <p className="personaldashboard--t2">dominic@nestlypay.co</p>
          </div>
          <Link className="link" to="/personal/dashboard">
            <button id="home" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Home
            </button>
          </Link>
          <p className="personaldashboard--t3-h">INVOICE</p>
          {/* <Link className="link" to="/activities"><button id="activities" className="w3-bar-item personaldashboard--t3">
                            <span className="personaldashboard--icons"><i className="fa-solid fa-house personaldashboard--icon"></i></span>My Activities
                        </button>
                    </Link> */}
          <Link className="link" to="/myinvoice">
            <button
              id="myinvoices"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              My Invoices
            </button>
          </Link>
          <Link className="link" to="/invoicehistory">
            <button
              id="invoicehistory"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Invoice Status
            </button>
          </Link>
          <p className="personaldashboard--t3-h">TRANSACTIONS</p>
          <Link className="link" to="/clients">
            <button
              id="clients"
              className="w3-bar-item personaldashboard--t3 pd--t3a"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Clients
            </button>
          </Link>
          <Link className="link" to="/paymenthistory">
            <button id="payouts" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Transaction History
            </button>
          </Link>
        </div>

        <i
          id="the-barmark"
          className="fa-solid fa-bars the-barmark w3-hide-large"
          onClick={navShow}
        ></i>
      </>
    )
  } else if (props.thePage == 'transactionHistory') {
    return (
      <>
        <div
          id="personaldashboard--sidebar"
          className="w3-sidebar w3-bar-block personaldashboard--sidebar w3-animate-left"
        >
          <div className="personaldashboard--logo">
            <i
              id="the-xmark"
              onClick={navHide}
              className="fa-solid fa-xmark the-xmark w3-hide-large w3-right"
            ></i>
            <img src={logo} className="personaldashboard--img1" alt="User" />
            <span className="personaldashboard--t1">Praise Dominic</span>
            <p className="personaldashboard--t2">dominic@nestlypay.co</p>
          </div>
          <Link className="link" to="/personal/dashboard">
            <button id="home" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Home
            </button>
          </Link>
          <p className="personaldashboard--t3-h">INVOICE</p>
          {/* <Link className="link" to="/activities"><button id="activities" className="w3-bar-item personaldashboard--t3">
                            <span className="personaldashboard--icons"><i className="fa-solid fa-house personaldashboard--icon"></i></span>My Activities
                        </button>
                    </Link> */}
          <Link className="link" to="/myinvoice">
            <button
              id="myinvoices"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              My Invoices
            </button>
          </Link>
          <Link className="link" to="/invoicehistory">
            <button
              id="invoicehistory"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Invoice Status
            </button>
          </Link>
          <p className="personaldashboard--t3-h">TRANSACTIONS</p>
          <Link className="link" to="/clients">
            <button id="clients" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Clients
            </button>
          </Link>
          <Link className="link" to="/paymenthistory">
            <button
              id="payouts"
              className="w3-bar-item personaldashboard--t3 pd--t3a"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Transaction History
            </button>
          </Link>
        </div>

        <i
          id="the-barmark"
          className="fa-solid fa-bars the-barmark w3-hide-large"
          onClick={navShow}
        ></i>
      </>
    )
  } else {
    return (
      <>
        <div
          id="personaldashboard--sidebar"
          className="w3-sidebar w3-bar-block personaldashboard--sidebar w3-animate-left"
        >
          <div className="personaldashboard--logo">
            <i
              id="the-xmark"
              onClick={navHide}
              className="fa-solid fa-xmark the-xmark w3-hide-large w3-right"
            ></i>
            <img src={logo} className="personaldashboard--img1" alt="User" />
            <span className="personaldashboard--t1">Praise Dominic</span>
            <p className="personaldashboard--t2">dominic@nestlypay.co</p>
          </div>
          <Link className="link" to="/personal/dashboard">
            <button id="home" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Home
            </button>
          </Link>
          <p className="personaldashboard--t3-h">INVOICE</p>
          {/* <Link className="link" to="/activities"><button id="activities" className="w3-bar-item personaldashboard--t3">
                            <span className="personaldashboard--icons"><i className="fa-solid fa-house personaldashboard--icon"></i></span>My Activities
                        </button>
                    </Link> */}
          <Link className="link" to="/myinvoice">
            <button
              id="myinvoices"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              My Invoices
            </button>
          </Link>
          <Link className="link" to="/invoicehistory">
            <button
              id="invoicehistory"
              className="w3-bar-item personaldashboard--t3"
            >
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Invoice Status
            </button>
          </Link>
          <p className="personaldashboard--t3-h">TRANSACTIONS</p>
          <Link className="link" to="/clients">
            <button id="clients" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Clients
            </button>
          </Link>
          <Link className="link" to="/paymenthistory">
            <button id="payouts" className="w3-bar-item personaldashboard--t3">
              <span className="personaldashboard--icons">
                <i className="fa-solid fa-house personaldashboard--icon"></i>
              </span>
              Transaction History
            </button>
          </Link>
        </div>

        <i
          id="the-barmark"
          className="fa-solid fa-bars the-barmark w3-hide-large"
          onClick={navShow}
        ></i>
      </>
    )
  }
}

export default DashboardSideBar
