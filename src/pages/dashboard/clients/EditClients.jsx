import React from 'react'
import '../../styles/style'

function EditClients(props) {
  return (
    <>
      <div id="edit" key={props.key} className="w3-modal">
        <div className="w3-modal-content clients--modal w3-animate-top">
          <div className="w3-container">
            <span
              className="w3-display-topright clients--modal-x"
              onClick={props.editBtn}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="clients--modal-t1">Edit Client</p>
            <div className="clients--modal-inputs">
              <input
                className="clients--modal-input"
                placeholder={props.name}
              />
              <input
                className="clients--modal-input"
                placeholder={props.emailAddress}
              />
              <input
                className="clients--modal-input"
                placeholder={props.phoneNumber}
              />
            </div>
            <button onClick={props.editBtn} className="editclient--modal-btn1">
              Cancel
            </button>
            <button
              onClick={props.editBtn}
              className="editclient--modal-btn2 w3-right"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditClients
