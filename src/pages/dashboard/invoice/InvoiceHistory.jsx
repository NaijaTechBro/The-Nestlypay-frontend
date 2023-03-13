import React from 'react'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import Invoice_History from '../../../components/dashboard/Invoice_History'
import InvoiceData from '../../../components/data/InvoiceData'
import '../../styles/style'

function InvoiceHistory() {
  const invoicehistory = InvoiceData.map((invoice) => {
    return (
      <Invoice_History
        key={invoice.invoice.id}
        invoiceID={invoice.invoice.details.id}
        amount={invoice.invoice.price.totalPrice}
        issueDate={invoice.invoice.details.issueDate}
        dueDate={invoice.invoice.details.dueDate}
        fromFullName={invoice.invoice.details.fromFullName}
        fromEmailAddress={invoice.invoice.details.fromEmailAddress}
        fromPhoneNumber={invoice.invoice.details.fromPhoneNumber}
        toFullName={invoice.invoice.details.toFullName}
        toEmailAddress={invoice.invoice.details.toEmailAddress}
        toPhoneNumber={invoice.invoice.details.toPhoneNumber}
        totalPrice={invoice.invoice.price.totalPrice}
        sub={invoice.invoice.price.tax}
        items={invoice.invoice.items}
      />
    )
  })

  return (
    <>
      <DashboardSideBar thePage="invoiceStatus" />
      <div className="invoicehistory--content">
        <DashboardHeader />
        <div>
          <p id="1" className="invoicehistory--table-t w3-animate-left">
            Invoice Status
          </p>
          {/* <button id="2" className="invoicehistory--btn1 w3-right">Download CSV</button> */}
        </div>
        <div className="invoice_history--table">
          <table className="invoice_history--table-head w3-animate-right">
            <tr>
              <th className="invoice_history--th1">Invoice ID</th>
              <th>Due Date</th>
              <th>Issue Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            {invoicehistory}
          </table>
        </div>
      </div>
    </>
  )
}

export default InvoiceHistory
