import React from 'react'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import DashboardPaymentHistory from '../../../components/dashboard/DashboardPaymentHistory'
import InvoiceData from '../../../components/data/InvoiceData'
import { CSVLink } from 'react-csv'
import { useRef } from 'react'
import '../../styles/style'

function PaymentHistory() {
  const csvLinkEl = useRef()

  const headers = [
    { label: 'Client Name', key: 'invoice.details.toFullName' },
    { label: 'Email Address', key: 'invoice.details.toEmailAddress' },
    { label: 'Invoice ID', key: 'invoice.details.id' },
    { label: 'Amount', key: 'invoice.price.totalPrice' },
    { label: 'Date', key: 'invoice.details.issueDate' },
    { label: 'Status', key: 'invoice.status' },
  ]

  const downloadCSV = () => {
    csvLinkEl.current.link.click()
  }

  let key
  let id
  let date
  let invoiceID
  let fromName
  let fromEmailAddress
  let amount
  let status
  let toEmailAddress
  let toName
  let method

  const paymenthistory = InvoiceData.map((history) => {
    key = history.invoice.id
    id = history.invoice.details.id
    date = history.invoice.details.issueDate
    invoiceID = history.invoice.details.id
    fromName = history.invoice.details.fromFullName
    toName = history.invoice.details.toFullName
    fromEmailAddress = history.invoice.details.fromEmailAddress
    toEmailAddress = history.invoice.details.toEmailAddress
    amount = history.invoice.price.totalPrice
    date = history.invoice.details.issueDate
    status = history.invoice.status
    method = history.invoice.method

    return (
      <DashboardPaymentHistory
        key={key}
        id={id}
        clientName={toName}
        emailAddress={toEmailAddress}
        invoiceID={invoiceID}
        amount={amount}
        date={date}
        status={status}
        method={method}
      />
    )
  })

  return (
    <>
      <DashboardSideBar thePage="transactionHistory" />
      <div className="paymenthistory--content w3-animate-bottom">
        <DashboardHeader />
        <div className="paymenthistory--header">
          <p className="paymenthistory--table-t">Transaction History</p>
          <button
            onClick={downloadCSV}
            className="paymenthistory--btn1 w3-right"
          >
            Download CSV
          </button>
        </div>
        <div className="paymenthistory--table">
          <table className="personaldashboard--table-head">
            <tr>
              <th>Client Name</th>
              <th>Email Address</th>
              <th>Invoice ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            {paymenthistory}
          </table>
        </div>
        <CSVLink
          headers={headers}
          filename="Invoice_Data.csv"
          data={InvoiceData}
          ref={csvLinkEl}
        />
      </div>
    </>
  )
}

export default PaymentHistory
