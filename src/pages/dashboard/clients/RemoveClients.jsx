import React from 'react'
import '../../styles/style'

function RemoveCLient(props) {
  return (
    <>
      <div id="remove" className="w3-modal">
        <div className="w3-modal-content clients--modal-delete w3-animate-top">
          <div className="w3-container">
            <span className="clients--modal-delete-img">
              <i className="fa fa-trash"></i>
            </span>
            <p className="clients--modal-delete-t1">Delete Client</p>
            <p className="clients--modal-delete-t2">
              Are you sure you want to delete this client? Once deleted, it
              can't be undone.
            </p>
            <button
              onClick={props.removeBtn}
              className="clients--modal-delete-btn1"
            >
              Cancel
            </button>
            <button
              onClick={props.removeBtn}
              className="clients--modal-delete-btn2 w3-right"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RemoveCLient
