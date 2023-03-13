import React from 'react'
import '../../styles/style'

function AddClient(props) {
  return (
    <>
      <div id="add" className="w3-modal">
        <div className="w3-modal-content clients--modal w3-animate-top">
          <div className="w3-container">
            <span
              className="w3-display-topright clients--modal-x"
              onClick={props.addBtn}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="clients--modal-t1">Add Client</p>
            <div className="clients--modal-inputs">
              <input className="clients--modal-input" placeholder="Full Name" />
              <input
                className="clients--modal-input"
                placeholder="Email Address"
              />
              <input
                className="clients--modal-input"
                placeholder="Phone Number"
              />
            </div>
            <button onClick={props.addBtn} className="clients--modal-btn">
              Add Client
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient
