import React from 'react'
import ReviewInvoice1 from '../../components/dashboard/ReviewInvoice1'
import { Link } from 'react-router-dom'
import '../styles/style'

export const open = () => {
  document.getElementById('modal').style.display = 'block'
}

export const close = () => {
  document.getElementById('modal').style.display = 'none'
}

function InvoiceSent() {
  return (
    <>
      <div className="invoicesent w3-modal" id="modal">
        <div className="w3-modal-content w3-animate-top">
          <i className="fa-solid fa-xmark invoicesent-x" onClick={close}></i>
          <div className="invoicesent--img">
            <ReviewInvoice1 />
          </div>
          <div className="invoicesent--body">
            <p className="invoicesent--t1">Invoice Sent to</p>
            <p className="invoicesent--t2">dominic@nestlypay.co</p>
            <Link to="/personal/dashboard" className="link">
              <button className="invoicesent--btn">Go to Dashboard</button>
            </Link>
            <p className="invoicesent--tt3">
              <span className="invoicesent--t3">nestlypay.co/invoice9283d</span>
              <span className="invoicesent--icon">
                <i className="fa-regular fa-copy"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <button onClick={open}>Open</button>
    </>
  )
}

export default InvoiceSent
