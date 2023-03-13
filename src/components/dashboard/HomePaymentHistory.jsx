import React, { useEffect, useState } from 'react'
import Modalx from './Modalx'
import '../styles/style'

let status
let method

export const closeModal = () => {
  document.getElementById('receipt').style.display = 'none'
}

function HomePaymentHistory(props) {
  if (props.status === 'Success') {
    status = <span className="personaldashboard--success">Success</span>
  } else if (props.status === 'Cancelled') {
    status = <span className="personaldashboard--cancelled">Cancelled</span>
  } else if (props.status === 'Pending') {
    status = <span className="personaldashboard--pending">Pending</span>
  }

  if (props.method === 1) {
    method = 'Bank Transfer'
  }

  if (props.method === 0) {
    method = 'Cryptocurrency'
  }

  return (
    <>
      <tr>
        <td id="fromName">{props.clientName}</td>
        <td id="fromEmailAddress">{props.emailAddress}</td>
        <td id="invoiceID">{props.invoiceID}</td>
        <td>₦{(props.amount * 1).toLocaleString('en-US')}</td>
        <td id="issueDate">{props.date}</td>
        <td>{status}</td>
      </tr>
    </>
  )
}

export default HomePaymentHistory
