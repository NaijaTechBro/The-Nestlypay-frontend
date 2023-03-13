import React, { useState } from 'react'
import ShareInvoice from './ShareInvoice'
import { Link } from 'react-router-dom'
import '../styles/style'

function InvoiceButton(props) {
  const [isOpenSent, setIsOpenSent] = useState(false)

  const openSent = () => {
    setIsOpenSent((current) => !current)
  }

  return (
    <>
      {isOpenSent && (
        <ShareInvoice
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
          closeShareInvoice={openSent}
          items={props.items}
        />
      )}

      <div className="w3-center invoice--btn">
        <button onClick={props.downloadBtn} className="reviewinvoice--btn1">
          Download
        </button>
        <button className="reviewinvoice--btn2" onClick={openSent}>
          Send Invoice
        </button>
      </div>
    </>
  )
}

export default InvoiceButton
