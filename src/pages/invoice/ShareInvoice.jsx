import React, { useState } from 'react'
import InvoiceSentModal2 from './InvoiceSentModal2'
import { Link } from 'react-router-dom'
import '../styles/style'

export const openSent = () => {
  document.getElementById('share').style.display = 'block'
}

const closeSent = () => {
  document.getElementById('share').style.display = 'none'
}

function ShareInvoice(props) {
  const [isOpen, setIsOpen] = useState(false)
  const openSent = () => {
    setIsOpen((current) => !current)
    handleSubmit()
  }

  const [invoiceEmail, setInvoiceEmail] = useState('')

  const handleSubmit = () => {
    console.log(invoiceEmail)
  }

  return (
    <>
      <div id="share" className="w3-modal shareinvoice--modal">
        <div className="w3-modal-content shareinvoice--content w3-animate-top">
          <div className="w3-container">
            <i
              className="fa-solid fa-xmark invoicesent-x w3-right"
              onClick={props.closeShareInvoice}
            ></i>
            <p className="shareinvoice--t1">Share Invoice</p>
            <p className="shareinvoice--t2">
              You can invite anyone to see this invoice
            </p>
            <div className="shareinvoice--modal-form">
              <input
                className="shareinvoice--input"
                placeholder="Email Address"
                onChange={(e) => setInvoiceEmail(e.target.value)}
                value={invoiceEmail}
              />
              <button onClick={openSent} className="shareinvoice--modal-btn">
                Send Invite
              </button>
            </div>
            <p className="shareinvoice--t3">
              {'nestlypay.com/reviewinvoice/' + props.invoiceID}
              <span className="shareinvoice--t3b">
                <i className="fa-regular fa-copy"></i>
              </span>
            </p>
            <Link to="/personal/dashboard" className="link">
              <p className="shareinvoice--t4" onClick={closeSent}>
                Back to Home
              </p>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <InvoiceSentModal2
          key={props.id}
          id={props.id}
          invoiceID={props.invoiceID}
          issueDate={props.issueDate}
          dueDate={props.dueDate}
          fromFullName={props.fromFullName}
          fromEmailAddress={props.fromEmailAddress}
          fromPhoneNumber={props.fromPhoneNumber}
          toFullName={props.toFullName}
          toEmailAddress={props.toEmailAddress}
          toPhoneNumber={props.toPhoneNumber}
          totalPrice={props.totalPrice}
          sub={props.sub}
          items={props.items}
          closeSent={openSent}
          sentEmail={invoiceEmail}
        />
      )}
    </>
  )
}

export default ShareInvoice
