import React from 'react'
import '../styles/style'

function Profile_Update() {
  return (
    <>
      <div className="profile_update w3-animate-bottom">
        <div className="profile--div" align="center">
          <div className="profile--img">
            <i class="fa-regular fa-circle-user profile--icon"></i>
          </div>
          <div className="profile--btn">
            <button className="profile--btn1">Upload Image</button>
            <button className="profile--btn2">Delete</button>
          </div>
          <input className="profile--input" placeholder="First Name" />
          <input className="profile--input" placeholder="Last Name" />
          <input className="profile--input" placeholder="Email Address" />
          <input className="profile--input" placeholder="Phone Number" />
          <button className="profile--btn3">Update</button>
        </div>
      </div>
    </>
  )
}

export default Profile_Update
