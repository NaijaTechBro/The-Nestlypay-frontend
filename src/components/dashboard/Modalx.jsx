import React from 'react'
import '../styles/style'

function Modalx(props) {
  return (
    <>
      <div id="receipt" className="w3-modal personaldashboard--modal">
        <div className="w3-modal-content paymenthistory--receipt w3-animate-top">
          <div className="w3-container">
            <div className="paymenthistory--receipt--logo w3-center">
              <img
                src="images/nestlypay-lg.png"
                className="paymenthistory--receipt--img1"
                alt="User"
              />
              <span className="paymenthistory--receipt--t1">
                {props.fromName}
              </span>
              <p className="paymenthistory--receipt--t2">{props.fromEmail}</p>
            </div>
            <div className="paymenthistory--receipt--t">
              <p className="paymenthistory--receipt--t3">INVOICE ID</p>
              <span className="paymenthistory--receipt--t4 w3-right">
                {props.fromInvoice}
              </span>
            </div>
            <div className="paymenthistory--receipt--t">
              <p className="paymenthistory--receipt--t3">DATE</p>
              <span className="paymenthistory--receipt--t4 w3-right">
                {props.fromDate}
              </span>
            </div>
            <div className="paymenthistory--receipt--t">
              <p className="paymenthistory--receipt--t3">PAYMENT METHOD</p>
              <span className="paymenthistory--receipt--t4 w3-right">
                {props.fromMethod}
              </span>
            </div>
            <button
              onClick={props.closeModal}
              className="paymenthistory--receipt--btn"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modalx
