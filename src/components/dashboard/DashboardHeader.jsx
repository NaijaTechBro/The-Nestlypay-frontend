import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import '../styles/style'

import user from '../../assets/images/user.png'

const openProfile = () => {
  var x = document.getElementById('profile')
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show'
  } else {
    x.className = x.className.replace(' w3-show', '')
  }
  document.getElementById('notification').style.display = 'none'
}

const closeProfile = () => {
  document.getElementById('profile').style.display = 'none'
}

const openNotification = () => {
  var x = document.getElementById('notification')
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show'
  } else {
    x.className = x.className.replace(' w3-show', '')
  }
  document.getElementById('profile').style.display = 'none'
}

const closeNotification = () => {
  document.getElementById('notification').style.display = 'none'
}

function DashboardHeader() {
  const signOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  const accShow = () => {
    var x = document.getElementById('second--dashboard-nav')
    if (x.className.indexOf('w3-show') == -1) {
      x.className += ' w3-show'
    } else {
      x.className = x.className.replace(' w3-show', '')
    }
  }

  const theUserPhoto = localStorage.getItem('userPhoto')
  console.log(theUserPhoto)

  return (
    <>
      {localStorage.getItem('isVerified') === 'false' ? (
        <Navigate to="../" />
      ) : (
        <>
          <div
            onClick={closeNotification}
            id="notification"
            className="personaldashboard--n w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom"
          >
            <div className="w3-bar-item pd-n--item">
              <div className="pd-n--item">
                <i className="fa fa-user pd-n--icon"></i>
                <div className="pd-n--item-right">
                  <p className="pd-n--txt1">Account Verification</p>
                  <p className="pd-n--txt2">
                    Hi Dominic! We have recieved your verification request.
                  </p>
                </div>
              </div>
              <div className="pd-n--item">
                <i className="fa fa-user pd-n--icon"></i>
                <div className="pd-n--item-right">
                  <p className="pd-n--txt1">Invoice Creation</p>
                  <p className="pd-n--txt2">
                    Hi Dominic! You have successfully created invoice{' '}
                    <Link to="/reviewinvoice/056847383NESPAY" className="link">
                      <span style={{ cursor: 'pointer', color: '#0c46d3' }}>
                        #056847383NESPAY
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={closeProfile}
            id="profile"
            className="personaldashboard--p w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom"
          >
            <Link to="/profile" className="link">
              <p className="w3-bar-item pd-p--item">
                <i className="pd-p--icon fa fa-user"></i>Profile
              </p>
            </Link>
            <Link to="/settings" className="link">
              <p className="w3-bar-item pd-p--item">
                <i className="pd-p--icon fa fa-user"></i>Settings
              </p>
            </Link>
            <p
              className="w3-bar-item"
              style={{ cursor: 'pointer' }}
              onClick={signOut}
            >
              Sign Out
            </p>
          </div>

          <div className="w3-container personaldashboard--header w3-animate-top">
            <input
              className="personaldashboard--search"
              placeholder="Search"
              onClick={closeNotification}
            />
            <div className="w3-right personaldashboard--h-right w3-hide-small w3-hide-medium">
              <i
                className="fa-regular fa-bell personaldashboard--notification"
                onClick={openNotification}
              ></i>
              <img
                src={user}
                className="personaldashboard--user"
                alt="user"
                onClick={openProfile}
              />
            </div>
          </div>

          <i
            onClick={accShow}
            id="the-nav2"
            className="fa-solid fa-ellipsis-vertical the-nav2 w3-hide-large w3-right"
          ></i>
          <div
            id="second--dashboard-nav"
            style={{ marginTop: '-24px', marginRight: '24px' }}
            className="w3-right personaldashboard--h-right w3-animate-right"
          >
            <i
              className="fa-regular fa-bell personaldashboard--notification"
              onClick={openNotification}
            ></i>
            <img
              src="images/user.png"
              className="personaldashboard--user"
              alt="user"
              onClick={openProfile}
            />
          </div>
        </>
      )}
    </>
  )
}

export default DashboardHeader
