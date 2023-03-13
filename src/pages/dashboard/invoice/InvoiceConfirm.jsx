import React from 'react'
import '../../styles/style'

function InvoiceConfirm(props) {
  return (
    <>
      <div id="confirm" className="w3-modal">
        <div className="w3-modal-content invoice_history--confirm w3-animate-top">
          <div className="w3-container">
            <span className="invoice_history--confirm-img">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="invoice_history--confirm-t1">Confirm Payment</p>
            <p className="invoice_history--confirm-t2">
              Are you sure you have recieved this payment? Once confirmed, it
              can't be undone.
            </p>
            <button
              onClick={props.confirmBtn}
              className="invoice_history--confirm-btn1"
            >
              Cancel
            </button>
            <button
              onClick={props.confirmBtn}
              className="invoice_history--confirm-btn2 w3-right"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceConfirm
