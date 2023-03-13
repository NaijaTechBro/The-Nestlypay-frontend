import React from 'react'
import '../../styles/style'

function InvoiceCancel(props) {
  return (
    <>
      <div id="cancel" className="w3-modal">
        <div className="w3-modal-content invoice_history--cancel w3-animate-top">
          <div className="w3-container">
            <span className="invoice_history--cancel-img">
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="invoice_history--cancel-t1">Cancel Payment</p>
            <p className="invoice_history--cancel-t2">
              Are you sure you didn’t recieve this payment? Once deleted, it
              can't be undone.
            </p>
            <button
              onClick={props.cancelBtn}
              className="invoice_history--cancel-btn1"
            >
              Cancel
            </button>
            <button
              onClick={props.cancelBtn}
              className="invoice_history--cancel-btn2 w3-right"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceCancel
