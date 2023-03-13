import React, { useState, useRef } from 'react'
import ReviewInvoice1 from './ReviewInvoice1'
import ShareInvoice from '../../pages/invoice/ShareInvoice'
import InvoiceConfirm from '../../pages/dashboard/invoice/InvoiceConfirm'
import InvoiceCancel from '../../pages/dashboard/invoice/InvoiceCancel'
import jsPDF from 'jspdf'
import '../styles/style'

function Invoice_History(props) {
  const [confirm, setConfirm] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [viewText, setViewText] = useState(
    <i className="fa-solid fa-eye" style={{ color: '#0c46d3' }}></i>,
  )

  const showOpenConfirm = () => {
    setConfirm((current) => !current)
  }

  const showOpenCancel = () => {
    setCancel((current) => !current)
  }

  const [isShown, setIsShown] = useState(false)
  const review = () => {
    setIsShown((current) => !current)
    if (isShown === true) {
      setViewText(
        <i className="fa-solid fa-eye" style={{ color: '#0c46d3' }}></i>,
      )
    } else {
      setViewText(
        <i className="fa-solid fa-eye-slash" style={{ color: 'red' }}></i>,
      )
    }
  }

  const [isShare, setIsShare] = useState(false)
  const share = () => {
    setIsShare((current) => !current)
  }

  const reportTemplateRef = useRef(null)
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    })

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal')

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save(props.invoiceID)
      },
    })
  }

  return (
    <>
      <tr>
        <td>
          <span className="invoice_history--icons">
            <i className="fa-solid fa-house invoice_history--icon"></i>
          </span>
          {props.invoiceID} |{' '}
          <span style={{ cursor: 'pointer' }} onClick={review}>
            {viewText}
          </span>
        </td>
        <td>{props.dueDate}</td>
        <td>{props.issueDate}</td>
        <td>₦{(props.amount * 1).toLocaleString('en-US')}</td>
        <td>
          <span className="invoice_history--tick" onClick={showOpenConfirm}>
            <i className="fa-solid fa-check"></i>
          </span>
          <span className="invoice_history--x" onClick={showOpenCancel}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </td>
      </tr>
      {confirm && <InvoiceConfirm confirmBtn={showOpenConfirm} />}

      {cancel && <InvoiceCancel cancelBtn={showOpenCancel} />}

      {isShown && (
        <>
          <div ref={reportTemplateRef} className="invoice_history_review--1">
            <ReviewInvoice1
              key={props.id}
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
          <div className="w3-right invoice_history_review--btn">
            <button onClick={share} className="invoice_history_review--btn1">
              Share
            </button>
            <button
              onClick={handleGeneratePdf}
              className="invoice_history_review--btn2"
            >
              Download
            </button>
          </div>
        </>
      )}

      {isShare && (
        <>
          <ShareInvoice
            key={props.id}
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
            closeShareInvoice={share}
            items={props.items}
          />
        </>
      )}
    </>
  )
}

export default Invoice_History
