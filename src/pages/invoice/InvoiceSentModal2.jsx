import React from 'react'
import ReviewInvoice1 from '../../components/dashboard/ReviewInvoice1'
import '../styles/style'
// export const open = () => {
//     document.getElementById("modal").style.display ="block"
//   }

function InvoiceSentModal2(props) {
  return (
    <>
      <div className="invoicesent w3-modal" id="modal">
        <div className="w3-modal-content invoicesent--content w3-animate-top">
          <i
            className="fa-solid fa-xmark invoicesent-x"
            onClick={props.closeSent}
          ></i>
          <div
            className="invoicesent--img"
            style={{ marginTop: '-200px', position: 'relative', top: '-60px' }}
          >
            <ReviewInvoice1
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
              items={props.items}
              sub={props.sub}
            />
          </div>
          <div className="invoicesent--body">
            <p className="invoicesent--t1">Invoice Sent to</p>
            <p className="invoicesent--t2">{props.sentEmail}</p>
            <button className="invoicesent--btn">Go to Dashboard</button>
            <p className="invoicesent--tt3">
              <span className="invoicesent--t3">
                {'nestlypay.com/reviewinvoice/' + props.invoiceID}
              </span>
              <span className="invoicesent--icon">
                <i className="fa-regular fa-copy"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceSentModal2
