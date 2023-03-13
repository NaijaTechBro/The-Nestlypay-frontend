import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import InvoiceData from '../../../components/data/InvoiceData'
import HomePaymentHistory from '../../../components/dashboard/HomePaymentHistory'
import { useState } from 'react'
import '../../styles/style'

function PersonalDashboard() {
  const paymenthistory = InvoiceData.map((history) => {
    return (
      <HomePaymentHistory
        key={history.invoice.id}
        clientName={history.invoice.details.toFullName}
        emailAddress={history.invoice.details.toEmailAddress}
        invoiceID={history.invoice.details.id}
        amount={history.invoice.price.totalPrice}
        date={history.invoice.details.issueDate}
        status={history.invoice.status}
      />
    )
  })

  const successPayment = InvoiceData.filter((data) => {
    return data.invoice.status === 'Success'
  })

  const cancelledPayment = InvoiceData.filter((data) => {
    return data.invoice.status === 'Cancelled'
  })

  const pendingPayment = InvoiceData.filter((data) => {
    return data.invoice.status === 'Pending'
  })

  const unPaidList = cancelledPayment.concat(pendingPayment)
  const totalList = successPayment.concat(cancelledPayment, pendingPayment)

  const completedPayments = successPayment.reduce((acc, data) => {
    const muah = +acc + +data.invoice.price.totalPrice
    return muah
  }, 0)

  const unpaidPayments = unPaidList.reduce((acc, data) => {
    const muah = +acc + +data.invoice.price.totalPrice
    return muah
  }, 0)

  const totalPayments = totalList.reduce((acc, data) => {
    const muah = +acc + +data.invoice.price.totalPrice
    return muah
  }, 0)

  const [increasePercentTotal, setIncreasePercentTotal] = useState(0)
  const [decreasePercentUnPaid, setDecreasePercentUnpaid] = useState(0)

  // Set Increase Percentage Value
  useEffect(() => {
    const d = new Date()
    const hour = d.getHours()
    const minute = d.getMinutes()
    if (hour === 0 && minute === 0) {
      localStorage.setItem('totalPayments', totalPayments)
      console.log(totalPayments)
    }
    let localIncrease = localStorage.getItem('totalPayments')
    if (!localStorage.getItem('totalPayments')) {
      localIncrease = 0
    }
    console.log(totalPayments)
    console.log(localIncrease)

    const theTotaled = ((totalPayments - localIncrease) / localIncrease) * 100
    setIncreasePercentTotal(theTotaled)
    console.log(theTotaled)
  }, [totalPayments])

  // Set Decrease Percentage Value
  useEffect(() => {
    const d = new Date()
    const hour = d.getHours()
    const minute = d.getMinutes()
    if (hour === 0 && minute === 0) {
      localStorage.setItem('unpaidPayments', unpaidPayments)
      console.log(unpaidPayments)
    }
    let localDecrease = localStorage.getItem('unpaidPayments')
    if (!localStorage.getItem('unpaidPayments')) {
      localDecrease = 0
    }
    console.log(unpaidPayments)
    console.log(localDecrease)

    const theUnpaid = ((unpaidPayments - localDecrease) / localDecrease) * 100
    setDecreasePercentUnpaid(theUnpaid)
    console.log(theUnpaid)
  }, [unpaidPayments])

  const theUserName = localStorage.getItem('userName')

  return (
    <>
      <div className="personaldasboard">
        {/* <!-- Sidebar --> */}
        <DashboardSideBar thePage="homePage" />

        {/* <!-- Page header --> */}
        <div className="personaldashboard--content">
          <DashboardHeader />

          {/* <!-- Page Body --> */}

          <div className="personaldashboard--body">
            <div className="personaldashboard--sec1 w3-animate-right">
              <p className="personaldashboard--t4">
                Welcome to NestlyPay, {theUserName} 🎊
              </p>
              <p className="personaldashboard--t5">
                Here are your invoices overview
              </p>
              <Link to="/createinvoice">
                <button className="personaldashboard--btn1 w3-right">
                  Create Invoice
                </button>
              </Link>
            </div>

            <div className="w3-row personaldashboard--row w3-animate-left">
              <div className="w3-col l4 m4">
                <div className="personaldashboard--col1">
                  <p className="personaldashboard--t6">Completed Payments</p>
                  <p className="personaldashboard--t7">
                    ₦ {completedPayments.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
              <div className="w3-col l4 m4">
                <div className="personaldashboard--col2">
                  <p className="personaldashboard--t6">Unpaid Invoice</p>
                  <p className="personaldashboard--t7">
                    ₦ {unpaidPayments.toLocaleString('en-US')}
                  </p>
                  <p className="personaldashboard--t8a">
                    Decreased{' '}
                    {decreasePercentUnPaid.toFixed(1) === 'Infinity'
                      ? '0'
                      : decreasePercentUnPaid.toFixed(1)}
                    % today
                  </p>
                </div>
              </div>
              <div className="w3-col l4 m4">
                <div className="personaldashboard--col2">
                  <p className="personaldashboard--t6">Total Invoices</p>
                  <p className="personaldashboard--t7">
                    ₦ {totalPayments.toLocaleString('en-US')}
                  </p>
                  <p className="personaldashboard--t8b">
                    + Increased{' '}
                    {increasePercentTotal.toFixed(1) === 'Infinity'
                      ? '0'
                      : increasePercentTotal.toFixed(1)}
                    % today
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="personaldashboard--chart">
                            
                        </div> */}

            <p className="personaldashboard--table-t w3-animate-bottom">
              Transaction History
            </p>
            <p className="personaldashboard--table-t2 w3-right w3-animate-bottom">
              <Link className="link" to="/paymenthistory">
                View All
              </Link>
            </p>

            <div className="personaldashboard--table">
              <table className="personaldashboard--table-head w3-animate-bottom">
                <tr>
                  <th>Client Name</th>
                  <th className="personaldashboard--th">Email Address</th>
                  <th className="personaldashboard--th">Invoice ID</th>
                  <th className="personaldashboard--th">Amount</th>
                  <th className="personaldashboard--th">Date</th>
                  <th>Status</th>
                </tr>
                {paymenthistory}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalDashboard
